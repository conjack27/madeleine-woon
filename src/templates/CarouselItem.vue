<template>
    <Layout>
        <div>
            <h1>{{ $page.carouselItem.title }}</h1>
            <div ></div>
        </div>
    </Layout>
</template>

<page-query>
query CarouselItem ($path: String!) {
    carouselItem: carouselItem (path: $path) {
        title
        publication
        image
        link
    }
}
</page-query>

<script>
export default {
    metaInfo() {
        return {
            title: this.$page.carouselItem.title
        }
    }    
}
</script>

<style>

</style>