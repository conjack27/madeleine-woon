<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1 class="text-4xl text-gray-900 leading-tight">Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <flickity ref="flickity" :options="flickityOptions">
      <div class="carousel-cell">1</div>
      <div class="carousel-cell">2</div>
      <div class="carousel-cell">3</div>
      <div class="carousel-cell">4</div>
      <div class="carousel-cell">5</div>
    </flickity>

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
        pageDots: false,
        wrapAround: false
        
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
  }
}
</script>

<style>
</style>