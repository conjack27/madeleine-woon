<template>
  <div class="">
      <header class="layout container mx-auto pl-4 pr-4 md:pl-0 md:pr-0">
        <nav class="relative flex items-center justify-between flex-wrap p-6 md:pl-0">
          <div class="flex items-center flex-shrink-0">
            <g-link to="/" class="font-semibold font-body text-xl tracking-tight">Madeleine Woon</g-link>
          </div>
          <div class="block md:hidden">
            <button id="menuBtn" v-on:click="menuHidden = !menuHidden"  class="flex items-center px-3 py-2 border rounded border-teal-400 hover:text-white hover:border-white">
              <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div 
            id="mobMenu" 
            v-bind:class="{hidden: menuHidden}" 
            class="absolute z-10 top-50 left-0 bg-pink pl-6 mt-4 border-black lg:hidden w-full block flex-grow lg:flex lg:w-auto text-sm lg:justify-end pb-4 border-b">
            <g-link to="/editorials/" class="block text-lg font-body mr-8 lg:inline-block lg:mt-0 hover:underline">
              Editorial
            </g-link>
            <g-link to="/commercials/" class="block text-lg font-body mr-8 mt-4 lg:inline-block lg:mt-0 hover:underline">
              Commercial
            </g-link>
            <g-link to="/about/" class="block text-lg font-body mr-8 mt-4 lg:inline-block lg:mt-0 hover:underline mr-4">
              About
            </g-link>
          </div>
          <div class="w-full hidden md:block flex-grow md:flex md:w-auto text-sm md:justify-end">
            <g-link to="/editorials/" class="block text-lg font-body mr-8 mt-4 lg:inline-block lg:mt-0 hover:underline">
              Editorial
            </g-link>
            <g-link to="/commercials/" class="block text-lg font-body mr-8 mt-4 lg:inline-block lg:mt-0 hover:underline">
              Commercial
            </g-link>
            <g-link to="/about/" class="block text-lg font-body mr-8 mt-4 lg:inline-block lg:mt-0 hover:underline mr-4">
              About
            </g-link>
          </div>
        </nav>
      </header>
    <transition name="fade" appear>
      <slot/>
    </transition>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      menuHidden: true
    }
  },
  methods: {
   
  },
}
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>