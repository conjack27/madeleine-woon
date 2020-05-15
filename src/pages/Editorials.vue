<template>
  <Layout>
    <div class="layout container mx-auto flex flex-col">
      <h1 class="font-bold text-5xl">Editorial</h1>
      <table class="w-full flex flex-row flex-no-wrap overflow-hidden my-5 border-b">
        <thead class="sm:border-b">
          <tr v-for="editorial in $page.editorial.edges" :key="editorial.id" class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
            <th class="p-3 pl-0 pb-1 text-left">Title</th>
            <th class="p-3 pl-0 pb-1 text-left">Publication</th>
            <th class="p-3 pl-0 pb-1 text-left">Date</th>
          </tr>
        </thead>
        <tbody class="flex-1 sm:flex-none">
          <tr v-for="editorial in $page.editorial.edges" :key="editorial.id" class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 border-b relative">
            <td class="p-4 pl-0 md:text-3xl"><g-link class="block w-full h-full" :to="editorial.node.path">{{ editorial.node.title }}</g-link></td>
            <td class="p-4 pl-0 md:text-3xl"><g-link class="block w-full h-full italic" :to="editorial.node.path">{{ editorial.node.publication }}</g-link></td>
            <td class="p-4 pl-0 md:text-3xl"><g-link class="block w-full h-full" :to="editorial.node.path">{{ editorial.node.date }}</g-link></td>
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
    }
  },
  created() {
    this.$page.editorial.edges.forEach(post => {
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