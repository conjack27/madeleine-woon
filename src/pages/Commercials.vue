<template>
  <Layout>
   <div class="layout container mx-auto flex flex-col">
     <table class="w-full flex flex-row flex-no-wrap overflow-hidden my-5">
			<thead class="sm:border-b sm:border-t">
				<tr v-for="commercial in $page.commercial.edges" :key="commercial.id" class="block border-b flex flex-col flex-no wrap sm:table-row sm:mb-0">
					<th class="p-4 pl-0 text-left">Title</th>
					<th class="p-4 pl-0 text-left">Publication</th>
					<th class="p-4 pl-0 text-left" width="110px">Date</th>
				</tr>
			</thead>
			<tbody class="flex-1 sm:flex-none">
				<tr v-for="commercial in $page.commercial.edges" :key="commercial.id" class="flex flex-col flex-no wrap sm:table-row  sm:mb-0 border-b relative">
					<td class="p-4 pl-0"><g-link class="block w-full h-full" :to="commercial.node.path">{{ commercial.node.title }}</g-link></td>
					<td class="p-4 pl-0"><g-link class="block w-full h-full" :to="commercial.node.path">{{ commercial.node.publication }}</g-link></td>
					<td class="p-4 pl-0"><g-link class="block w-full h-full" :to="commercial.node.path">{{ commercial.node.date }}</g-link></td>
				</tr>
			</tbody>
		</table>
    </div>
  </Layout>
</template>

<page-query>
  query Commercials {
    commercial: allCommercial {
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
    }
  },
  created() {
    this.$page.commercial.edges.forEach(post => {
      const parsedDate = new Date(post.node.date).toDateString();
      post.node.date = parsedDate;
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