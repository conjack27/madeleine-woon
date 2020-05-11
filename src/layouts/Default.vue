<template>
  <div class="layout container mx-auto">
    <header class="">
      <nav class="flex items-center justify-between flex-wrap p-6 pl-0">
        <div class="flex items-center flex-shrink-0">
          <g-link to="/" class="font-semibold text-xl tracking-tight">Madeleine Woon</g-link>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:w-auto text-sm lg:justify-end">
          <g-link to="/articles/" class="block mr-8 mt-4 lg:inline-block lg:mt-0 hover:text-white">
            Editorial
          </g-link>
          <g-link to="/articles/" class="block mr-8 mt-4 lg:inline-block lg:mt-0 hover:text-white">
            Commercial
          </g-link>
          <g-link to="/about/" class="block mr-8 mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
            About
          </g-link>
        </div>
    </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>