<template>
  <Layout class="min-h-screen home">
    <div class="layout container mx-auto">
      <flickity class="h-lg" ref="flickity" :options="flickityOptions">
        <div class="carousel-cell w-full items-center flex justify-between relative">
          <a href="#" class="absolute w-full h-full"></a>
          <div class="carousel__title">
            <h1 class="text-6xl">
              <i>Vogue, </i>
              <span>This is a test title</span>
            </h1>
          </div>
          <img class="w-1/2 h-auto" src="https://i.picsum.photos/id/237/200/300.jpg" alt="alternative text">
        </div>

        <div class="carousel-cell w-full items-center flex justify-between relative">
          <a href="#" class="absolute w-full h-full"></a>
          <div class="carousel__title">
            <h1 class="text-6xl">
              <i>Vogue, </i>
              <span>This is a test title</span>
            </h1>
          </div>
          <img class="w-1/2 h-auto" src="https://i.picsum.photos/id/237/200/300.jpg" alt="alternative text">
        </div>

        <div class="carousel-cell w-full items-center flex justify-between relative">
          <a href="#" class="absolute w-full h-full"></a>
          <div class="carousel__title">
            <h1 class="text-6xl">
              <i>Vogue, </i>
              <span>This is a test title</span>
            </h1>
          </div>
          <img class="w-1/2 h-auto" src="https://i.picsum.photos/id/237/200/300.jpg" alt="alternative text">
        </div>

        <div class="carousel-cell w-full items-center flex justify-between relative">
          <a href="#" class="absolute w-full h-full"></a>
          <div class="carousel__title">
            <h1 class="text-6xl">
              <i>Vogue, </i>
              <span>This is a test title</span>
            </h1>
          </div>
          <img class="w-1/2 h-auto" src="https://i.picsum.photos/id/237/200/300.jpg" alt="alternative text">
        </div>

        <div class="carousel-cell w-full items-center flex justify-between relative">
          <a href="#" class="absolute w-full h-full"></a>
          <div class="carousel__title">
            <h1 class="text-6xl">
              <i>Vogue, </i>
              <span>This is a test title</span>
            </h1>
          </div>
          <img class="w-1/2 h-auto" src="https://i.picsum.photos/id/237/200/300.jpg" alt="alternative text">
        </div>
      </flickity>
    </div>
  </Layout>
</template>



<script>
import Flickity from 'vue-flickity';
export default {
   components: { 
    Flickity
  },
  
  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: true,
        wrapAround: true,
        autoPlay: 1500,
        setGallerySize: false
        
        // any options from Flickity can be used
      }
    }
  },
  
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  },
  metaInfo: {
    title: 'Hello, world!'
  },
}
</script>

<style>
.home {
	background: linear-gradient(90deg, #F2D0C9 70%, #FCF4CF 30%);
}
</style>