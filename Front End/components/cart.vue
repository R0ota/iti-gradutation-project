<script setup>

import { ref } from "vue";
const { data } = await useAsyncFetch("get", "/products");
const props = defineProps(["img", "id"]);

const count = ref(1);

const decrement = () => {
    count.value--;
}
const increment = () => {
    count.value++;
}

</script>

<template>
  <div class="flex gap-4 lg:w-full w-93">
    <div class="flex lg:gap-4 gap-2 w-full">
      <!-- product details -->
      <div class="flex lg:gap-6 gap-3 w-full">
        <img :src="img" class="lg:w-32 w-25 lg:h-32 h-25 rounded-2xl" />
        <div class="flex flex-col justify-between lg:h-32 h-25 py-1">
          <div class="flex flex-col lg:gap-1 gap-0.5">
            <p class="text-red-800 lg:text-lg text-sm font-bold leading-relaxed">
              Product name
            </p>
            <p class="text-black lg:text-sm font-xs font-medium lg:leading-tight">Type</p>
            <p class="text-black lg:text-sm font-xs font-medium lg:leading-tight">Size</p>
          </div>
          <p class="text-black lg:text-lg text-sm font-semibold leading-relaxed">
            Price EGP
          </p>
        </div>
      </div>
      <!-- icrement & decrement -->
      <div class="flex lg:flex-row flex-col md:flex-col sm:flex-col justify-start items-center gap-1">
        <button class="w-10 h-10 flex items-center justify-center">
          <img @click="decrement" src="../assets/minus-solid.svg" class="lg:w-6 lg:h-6 w-5 h-5 cursor-pointer" />
        </button>
        <p class="text-center text-black lg:text-xl text-l font-medium">{{ count }}</p>
        <button class="w-10 h-10 flex items-center justify-center">
          <img @click="increment" src="../assets/plus-solid.svg" class="lg:w-6 lg:h-6 w-5 h-5 cursor-pointer" />
        </button>
      </div>
    </div>
    <!-- button remove -->
    <div class="flex justify-center items-start">
      <button class="w-8 h-8 flex justify-center items-center">
        <img  src="../assets/circle-xmark.svg" class="w-6 h-6 cursor-pointer" />
      </button>
    </div>
  </div>
</template>
