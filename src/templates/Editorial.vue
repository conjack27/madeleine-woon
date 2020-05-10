<template>
  <Layout>
    <div class="markdown-body">
      <h1>{{ $page.editorial.title }}</h1>
      <div v-html="$page.editorial.content" />
    </div>
  </Layout>
</template>

<page-query>
query Editorial ($path: String!) {
  editorial: editorial (path: $path) {
    title
    content
    featuredImage
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.editorial.title
    }
  }
}
</script>