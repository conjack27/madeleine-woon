<template>
  <Layout>
   <div class="flex flex-col">
     <table class="w-full flex flex-row flex-no-wrap overflow-hidden my-5 border-b">
			<thead class="border-b border-t">
				<tr  class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
					<th class="p-3 text-left">Title</th>
					<th class="p-3 text-left">Publication</th>
					<th class="p-3 text-left" width="110px">Date</th>
				</tr>
				<tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
					<th class="p-3 text-left">Title</th>
					<th class="p-3 text-left">Publication</th>
					<th class="p-3 text-left" width="110px">Date</th>
				</tr>
                <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                  <th class="p-3 text-left">Title</th>
                  <th class="p-3 text-left">Publication</th>
                  <th class="p-3 text-left" width="110px">Date</th>
              </tr>
                <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                  <th class="p-3 text-left">Title</th>
                  <th class="p-3 text-left">Publication</th>
                  <th class="p-3 text-left" width="110px">Date</th>
              </tr>
			</thead>
			<tbody class="flex-1 sm:flex-none">
				<tr v-for="post in $page.posts.edges" :key="post.id" class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 border-b relative">
					<td class="p-4"><g-link class="block w-full h-full" :to="post.node.path">{{ post.node.title }}</g-link></td>
					<td class="p-4"><g-link class="block w-full h-full" :to="post.node.path">{{ post.node.publication }}</g-link></td>
					<td class="p-4"><g-link class="block w-full h-full" :to="post.node.path">{{ post.node.date }}</g-link></td>
				</tr>
			</tbody>
		</table>
    </div>

    <ul>
      <li v-for="post in $page.posts.edges" :key="post.id">
        <g-link :to="post.node.path"> {{ post.node.title }} </g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost {
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