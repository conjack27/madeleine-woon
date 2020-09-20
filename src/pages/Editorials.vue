<template>
  <Layout>
    <div class="layout container mx-auto pl-4 pr-4 md:pl-0 md:pr-0 flex flex-col">
      <h1 class="block font-bold text-3xl md:text-5xl text-center font-heading">Editorial</h1>
      <table class="w-full flex flex-row flex-no-wrap overflow-hidden my-5 pl-4 pr-4">
        <thead class="sm:border-b">
          <tr
            v-for="editorial in $page.editorial.edges"
            :key="editorial.id"
            class="flex flex-col flex-no wrap sm:table-row sm:mb-0 border-b sm:border-b-0"
          >
            <th class="p-2 md:p-4 pl-0 sm:pb-1 text-left text-md font-normal">Title</th>
            <th class="p-2 md:p-4 pl-0 sm:pb-1 text-left text-md font-normal">Publication</th>
            <th class="p-2 md:p-4 pl-0 sm:pb-1 text-left text-md font-normal">Date</th>
          </tr>
        </thead>
        <tbody class="flex-1 sm:flex-none">
          <tr
            v-for="editorial in $page.editorial.edges"
            :key="editorial.id"
            class="flex flex-col flex-no wrap sm:table-row sm:mb-0 relative border-b sm:border-b-0"
          >
            <td class="p-2 md:p-4 text-md md:pl-0 md:text-3xl">
              <g-link
                class="block w-full h-full"
                :to="editorial.node.path"
              >{{ editorial.node.title }}</g-link>
            </td>
            <td class="p-2 md:p-4 text-md md:pl-0 md:text-3xl">
              <g-link
                class="block w-full h-full italic"
                :to="editorial.node.path"
              >{{ editorial.node.publication }}</g-link>
            </td>
            <td class="p-2 md:p-4 text-md md:pl-0 md:text-3xl">
              <g-link
                class="block w-full h-full"
                :to="editorial.node.path"
              >{{ editorial.node.date }}</g-link>
            </td>
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
    title: "Editorial articles",
  },
  data() {
    return {};
  },
  created() {
    this.$page.editorial.edges.forEach((post) => {
      const parsedDate = new Date(post.node.date).toDateString();
      post.node.date = parsedDate;
    });
  },
};
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