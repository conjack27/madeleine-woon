<template>
  <Layout class="min-h-screen" :style="{ 'background-color': $page.editorial.color }">
    <div class="layout container mx-auto pl-4 pr-4 md:pl-0 md:pr-0">
      <div class="max-w-screen-md pb-8 container mx-auto mt-8 font-body article">
        <h1 class="text-2xl md:text-4xl text-center mb-8 font-bold">{{ $page.editorial.title }}</h1>
        <div class="text-lg" v-html="$page.editorial.content"></div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Editorial ($path: String!) {
    editorial: editorial (path: $path) {
        title
        content
        date
        publication
        color
    }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.editorial.title,
    };
  },
  data() {
    return {};
  },
};
</script>

<style>
.article img {
  margin: 20px auto;
}
</style>