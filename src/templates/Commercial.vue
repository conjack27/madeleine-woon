<template>
    <Layout>
        <div class="layout container mx-auto">
            <div class="max-w-screen-md mb-8 mt-8 container mx-auto font-body article">
                <h1 class="text-4xl text-center mb-8 font-bold">{{ $page.commercial.title }}</h1>
                <div class="text-xl" v-html="$page.commercial.content"></div>
            </div>
        </div>
    </Layout>
</template>

<page-query>
query Commercial ($path: String!) {
    commercial: commercial (path: $path) {
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
            title: this.$page.commercial.title
        }
    }    
}
</script>

<style>
    .article img{
        margin: 20px auto;
    }
</style>