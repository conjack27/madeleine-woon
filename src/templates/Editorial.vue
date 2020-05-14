<template>
    <Layout class="min-h-screen" :style="{ 'background-color': $page.editorial.color }">
        <div  class="layout container mx-auto">
            <div class="max-w-screen-md pb-8 mt-8 container mx-auto font-body article">
                <h1 class="text-4xl text-center mb-8 font-bold">{{ $page.editorial.title }}</h1>
                <div class="text-xl" v-html="$page.editorial.content"></div>
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
            title: this.$page.editorial.title
        }
    },
    data() {
        return {
        }
    }
}
</script>

<style>
    .article img{
        margin: 20px auto;
    }
</style>