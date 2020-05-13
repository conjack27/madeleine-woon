<template>
  <Layout>
   <div class="flex flex-col">
     <table class="w-full flex flex-row flex-no-wrap overflow-hidden my-5 border-b">
			<thead class="border-b border-t">
				<tr  class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
					<th class="p-3 pl-0 text-left">Title</th>
					<th class="p-3 pl-0 text-left">Publication</th>
					<th class="p-3 pl-0 text-left" width="110px">Date</th>
				</tr>
				<tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
					<th class="p-3 pl-0 text-left">Title</th>
					<th class="p-3 pl-0 text-left">Publication</th>
					<th class="p-3 pl-0 text-left" width="110px">Date</th>
				</tr>
        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
          <th class="p-3 pl-0 text-left">Title</th>
          <th class="p-3 pl-0 text-left">Publication</th>
          <th class="p-3 pl-0 text-left" width="110px">Date</th>
      </tr>
      <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
          <th class="p-3 pl-0 text-left">Title</th>
          <th class="p-3 pl-0 text-left">Publication</th>
          <th class="p-3 pl-0 text-left" width="110px">Date</th>
      </tr>
			</thead>
			<tbody class="flex-1 sm:flex-none">
				<tr v-for="editorial in $page.editorial.edges" :key="editorial.id" class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 border-b relative">
					<td><g-link class="block w-full h-full p-4 pl-0" :to="editorial.node.path">{{ editorial.node.title }}</g-link></td>
					<td><g-link class="block w-full h-full p-4 pl-0" :to="editorial.node.path">{{ editorial.node.publication }}</g-link></td>
					<td><g-link class="block w-full h-full p-4 pl-0" :to="editorial.node.path">{{ date }}</g-link></td>
				</tr>
			</tbody>
		</table>
    </div>
  </Layout>
</template>

<page-query>
  query Editorials {
    editorial: allEditorial {
      edges {
        node {
          id
          title
          path
          date
          publication
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Articles'
  },
  data() {
    return {
      date: ""
    }
  },
  created() {
    this.$page.editorial.edges.forEach(post => {
      const parsedDate = new Date(post.node.date).toDateString();
      post.node.date = parsedDate;
      this.date = parsedDate;
    });
  }
}
</script>

<style>
  @media (min-width: 640px) {
    table {
      display: inline-table !important;
    }
    thead tr:not(:first-child) {
      display: none;
    }
  }
</style>