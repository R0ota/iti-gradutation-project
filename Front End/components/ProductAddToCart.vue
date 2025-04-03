
<script setup>
import { ref } from "vue";

const isAdded = ref(false);
const toggleState = () => {
  isAdded.value = !isAdded.value;
};
</script>

<template>
    <div class="lg:gap-4 gap-3 lg:pb-6 pb-5 inline-flex flex-col justify-start items-start w-full">
        <p
        class=" justify-start text-red-800 lg:text-3xl text-2xl font-semibold lg:leading-10 leading-9"
      >
        650 EGP
      </p>
      <button
        @click="toggleState"
        :class="
          isAdded ? 'bg-yellow-50 text-red-800' : 'bg-red-800 text-yellow-50'
        "
        class="lg:text-lg text-sm font-bold font-['Poppins'] leading-relaxed cursor-pointer inline-flex w-full items-center justify-center gap-4 h-14 py-3.5 rounded-2xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]"
      >
        <div class="relative overflow-hidden w-6 h-6">
          <img v-if="!isAdded" src="../assets/cart-shopping-stroke.svg" />
          <img v-else src="../assets/checked.svg" />
        </div>

        <span>Add to Cart</span>
      </button>

    </div>
</template>