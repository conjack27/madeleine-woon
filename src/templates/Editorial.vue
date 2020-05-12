<template>
    <ClientOnly>
        <Layout>
            <div class="markdown-body">
                <!-- <h1>{{ $page.editorial.title }}</h1>
                <div v-html="$page.editorial.content"></div> -->
            </div>
        </Layout>
    </ClientOnly>
</template>

<page-query>
query Editorial ($path: String!) {
    editorial: editorial (path: $path) {
        title
        content
        date
        publication
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

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css");
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}
@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>