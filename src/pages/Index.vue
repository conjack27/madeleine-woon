<template>
  <Layout class="min-h-screen home">
    <div class="layout container mx-auto pl-4 pr-4 md:pl-0 md:pr-0">
      <flickity class="h-md md:h-lg" ref="flickity" :options="flickityOptions">
        <div
          v-for="carouselItem in $page.carouselItem.edges"
          :key="carouselItem.id"
          class="carousel-cell w-full items-center flex justify-between relative flex-col md:flex-row"
        >
          <a :href="carouselItem.node.link" class="absolute w-full h-full"></a>
          <div class="carousel__title mb-8 md:mb-0">
            <h1 class="text-2xl md:text-4xl lg:text-6xl">
              <span>{{ carouselItem.node.title }}&nbsp;-</span>&nbsp;
              <i class="text-xl md:text-3xl lg:text-5xl">{{ carouselItem.node.publication }}</i>
            </h1>
          </div>
          <img
            class="w-3/4 md:w-1/2 lg:w-5/12 h-auto"
            :src="carouselItem.node.image"
            alt="alternative text"
          />
        </div>
      </flickity>
    </div>
  </Layout>
</template>

<page-query>
  query CarouselItems {
    carouselItem: allCarouselItem {
      edges {
        node {
          id
          title
          path
          image
          publication
          link
        }
      }
    }
  }
</page-query>

<script>
import Flickity from "vue-flickity";
export default {
  components: {
    Flickity,
  },
  created() {},
  data() {
    return {
      flickityOptions: {
        prevNextButtons: false,
        pageDots: true,
        wrapAround: true,
        autoPlay: 5000,
        setGallerySize: false,
      },
    };
  },

  methods: {
    next() {
      this.$refs.flickity.next();
    },

    previous() {
      this.$refs.flickity.previous();
    },
  },
  metaInfo: {},
};
</script>

<style>
.home {
  background: linear-gradient(90deg, #f2d0c9 70%, #fcf4cf 30%);
}
</style>