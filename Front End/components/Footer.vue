<script setup>
import { computed, onMounted } from 'vue';
import { useProductsStore } from '~/stores/products';

const productsStore = useProductsStore();
const defaultCategories = [{ "name": "Home Décor" }, { "name": "Artboard" }, { "name": "Accessories" }, { "name": "Merch" }, { "name": "Apparel" }]

// Get categories from the store
const categories = computed(() => {
  const storeCategories = productsStore.getAllCategories;
  if (!storeCategories || storeCategories.length === 0) return defaultCategories;
  return storeCategories;
});

// Ensure categories are loaded
onMounted(async () => {
  if (categories.value.length === 0) {
    await productsStore.fetchCategories();
  }
});
</script>

<template>
  <div
    class="lg:w-full md:w-full w-full px-6 py-8 bg-red-800 flex lg:flex-row flex-col justify-start items-center gap-6 mt-16 "
  >
    <!-- logo -->
    <div class="w-80 px-4 py-1.5 flex justify-center items-center gap-2.5 w-full">
      <NuxtLink
        to="/"
        class="flex justify-center items-start"
      >
        <img
          src="../assets/Light_Logo.svg"
          alt="Logo"
          class="lg:w-32 w-20"
        />
      </NuxtLink>
    </div>


    <div class="inline-flex items-start lg:flex-row flex-col justify-start gap-6">
      <!-- marketPlace -->
      <div class="w-80 inline-flex flex-col justify-start items-start lg:gap-4 gap-2">
      <div class="lg:px-6 px-4 py-2 inline-flex flex-col justify-center items-center gap-2.5">
        <p class="justify-start text-red-100 text-xl font-semibold leading-loose font-['Poppins']">
          Marketplace
        </p>
      </div>
      <div class=" flex-col lg:px-6 px-4 inline-flex justify-start items-start">
        <NuxtLink
          v-for="category in categories"
          :key="category.name"
          :to="`/market-products?category=${encodeURIComponent(category.name)}`"
          class="text-center h-10 justify-start text-red-100 lg:text-base text-sm font-medium flex  hover:px-20 lg:py-2 py-1 gap-4 hover:bg-orange-200 hover:w-full hover:text-red-800 hover:rounded-[32px] transition-all duration-300 cursor-pointer font-['Poppins']"
        >
          {{ category.name }}
        </NuxtLink>
      </div>
    </div>
    <!-- social Media -->
    <div class="w-80 flex flex-col justify-start items-start lg:gap-4 gap-2">
      <div class="lg:px-6 px-4 py-2 inline-flex flex-col justify-center items-center gap-2.5">
        <p class="justify-start text-red-100 text-xl font-semibold leading-loose font-['Poppins']">
          Social Media
        </p>
      </div>
      <div class=" flex-col lg:px-6 px-4 inline-flex justify-start items-start lg:gap-0 gap-1">
        <div
          class=" lg:h-10 h-6 inline-flex justify-start items-start gap-4 group hover:px-20 lg:py-2 py-1 hover:bg-orange-200 hover:rounded-[32px] transition-all duration-300 cursor-pointer"
        >
          <div class="relative w-6 flex items-center justify-center">
            <i
              class="fa-brands fa-facebook text-red-100 group-hover:text-red-800 transition-all duration-300 text-xl"></i>
          </div>

          <p class="text-center justify-start text-red-100 lg:text-base text-sm font-medium group-hover:text-red-800 font-['Poppins']">
            FacebooK
          </p>
        </div>

        <div
          class="lg:h-10 h-6 inline-flex justify-start items-start gap-4 group hover:px-20 lg:py-2 py-1 hover:bg-orange-200 hover:rounded-[32px] transition-all duration-300 cursor-pointer"
        >
          <div class="relative w-6 flex items-center justify-center">
            <i
              class="fa-brands fa-instagram text-red-100 group-hover:text-red-800 transition-all duration-300 text-xl"></i>
          </div>

          <p class="text-center justify-start text-red-100 lg:text-base text-sm font-medium group-hover:text-red-800 font-['Poppins']">
            Instsgram
          </p>
        </div>

        <div
          class="lg:h-10 h-6 inline-flex justify-start items-start gap-4 group hover:px-20 lg:py-2 py-1 hover:bg-orange-200 hover:rounded-[32px] transition-all duration-300 cursor-pointer"
        >
          <div class="relative w-6 flex items-center justify-center">
            <i
              class="fa-brands fa-pinterest text-red-100 group-hover:text-red-800 transition-all duration-300 text-xl"></i>
          </div>

          <p class="text-center justify-start text-red-100 lg:text-base text-sm font-medium group-hover:text-red-800 font-['Poppins']">
            Pinterest
          </p>
        </div>

        <div
          class="lg:h-10 h-6 inline-flex justify-start items-start gap-4 group hover:px-20 lg:py-2 py-1 hover:bg-orange-200 hover:rounded-[32px] transition-all duration-300 cursor-pointer"
        >
          <div class="relative w-6 flex items-center justify-center">
            <i
              class="fa-brands fa-linkedin text-red-100 group-hover:text-red-800 transition-all duration-300 text-xl"></i>
          </div>
          <p class="text-center justify-start text-red-100 lg:text-base text-sm font-medium group-hover:text-red-800 font-['Poppins']">
            Linked in
          </p>
        </div>
      </div>
    </div>
    <!-- contact Us -->
    <div class="w-80 flex flex-col justify-start items-start lg:gap-4 gap-2">
      <div class="lg:px-6 px-4 inline-flex flex-col justify-center items-center gap-2.5">
        <p class="justify-start text-red-100 text-xl font-semibold leading-loose">
          Contact Us
        </p>
      </div>
      <div class="w-80 flex flex-col justify-start items-start lg:px-6 px-4 gap-4">
        <div class="self-stretch px-4 py-2.5 bg-white rounded-2xl inline-flex justify-end items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            class="py-[2.50px] flex-1 justify-start text-neutral-400 text-sm font-medium leading-tight focus:outline-none"
          />
        </div>
        <div
          class="self-stretch py-2.5 cursor-pointer bg-orange-200 rounded-2xl hover:bg-orange-300 group hover:rounded-full transition-all duration-300 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] inline-flex justify-center items-center gap-2.5"
        >
          <button
            class="text-right justify-start text-red-800 cursor-pointer text-lg font-bold leading-relaxed group-hover:text-red-100 group-transition-all group-duration-300"
          >
            Send
          </button>
        </div>
      </div>
    </div>
    </div>
  
  </div>
</template>
