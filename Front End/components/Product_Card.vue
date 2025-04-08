<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "Unknown",
  },
  description: {
    type: String,
    default: "No description available.",
  },
  price: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    default: "/placeholder-image.png", // Provide a default placeholder image
  },
  currency: {
    type: String,
    default: "EGP",
  },
});

import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isFavorite = ref(false);

const toggleFavorite = (event) => {
  // Stop event propagation to prevent navigating when clicking the favorite button
  event.stopPropagation();
  isFavorite.value = !isFavorite.value;
  console.log("Favorite status:", isFavorite.value);
};

const navigateToProduct = (productId) => {
  router.push(`/market-products/${productId}`);
};
</script>

<template>
  <div
    class="flex flex-col items-center justify-center lg:gap-2 gap-1.5 cursor-pointer"
    @click="navigateToProduct(id)"
  >
    <div
      class="relative lg:w-64 w-44 lg:h-64 h-40 lg:rounded-[42.35px] bg-[#D9D9D9] flex-shrink-0 aspect-square rounded-3xl"
    >
      <div class="group">
        <div
          v-if="isFavorite"
          @click="toggleFavorite($event)"
          class="lg:w-8 w-6 lg:h-8 h-6 bg-orange-100 group-hover:bg-red-800 group-hover:rounded-[50px] rounded-[9.53px] flex items-center justify-center z-10 absolute pointer-events-auto lg:top-4 lg:right-3.5 top-2 right-2 cursor-pointer outline-1 outline-offset-[-1px] outline-red-800 transition-all duration-300"
        >
          <i
            class="fa-solid fa-heart fill text-[#A31D1D] group-hover:text-orange-100"
          />
        </div>

        <div
          v-else
          @click="toggleFavorite($event)"
          class="lg:w-8 w-6 lg:h-8 h-6 bg-white rounded-[9.53px] flex items-center justify-center group-hover:rounded-[50px] group-hover:bg-red-800 z-10 absolute pointer-events-auto lg:top-4 lg:right-3.5 top-2 right-2 cursor-pointer transition-all duration-300"
        >
          <i
            class="fa-regular fa-heart fill text-red-800 group-hover:text-orange-100"
          />
        </div>
      </div>

      <img
        :src="image"
        class="lg:w-64 w-44 lg:h-64 h-40 lg:rounded-[40px] rounded-[25.197px]"
      />
    </div>

    <div
      class="flex flex-col items-start lg:gap-2 gap-1.5 self-stretch px-1 lg:w-64 w-44"
    >
      <div class="flex flex-col gap-0.5 justify-start items-start">
        <p
          class="lg:text-xl lg:tracking-[-0.342px] font-bold leading-7 text-xs font-['Poppins'] text-red-800"
        >
          {{ name }}
        </p>
        <p
          class="lg:text-sm text-[9.53px] text-black font-medium leading-[150%] lg:tracking-[-0.266px] tracking-[-0.191] font-['Poppins']"
        >
          {{ description }}
        </p>
      </div>

      <div class="flex gap-2 items-center justify-between w-full">
        <p
          class="lg:min-w-2.5 lg:text-xl lg:tracking-[-0.342px] text-black font-semibold leading-7 text-xs tracking-[-0.215px] mt-auto font-['Poppins']"
        >
          {{ price }} {{ currency }}
        </p>

        <div class="relative group ">
          <!-- cart strock -->
          <div
            class="group-hover:hidden lg:w-8 w-6 lg:h-8 w-6 lg:rounded-xl rounded-lg bg-red-800 p-[3.29px] flex items-center justify-center transition-all duration-300"
          >
            <img
              src="../assets/cart-shopping-stroke.svg"
              class="w-4 h-4 lg:w-6 lg:h-5"
            />
          </div>
          <!-- add to cart -->
          <div
            class="hidden group-hover:flex px-2 flex items-center justify-start gap-1 rounded-[50px] bg-red-800 transition-all duration-300"
          >
            <div
              class="lg:w-8 w-6 lg:h-8 w-6 lg:rounded-xl rounded-lg bg-red-800 flex items-center justify-center"
            >
              <img
                src="../assets/cart-shopping-white.svg"
                class="w-4 h-4 lg:w-6 lg:h-5"
              />
            </div>
            <p class="text-orange-100 text-base font-medium font-['Poppins']">
              Add to Cart
            </p>
          </div>
          <!-- added -->
          <div
            class="group-focus:block hidden lg:w-8 w-6 lg:h-8 w-6 lg:rounded-xl rounded-lg bg-orang-100 p-[3.29px] flex items-center justify-center transition-all duration-300 outline-1 outline-offset-[-1px] outline-red-800"
          >
            <img
              src="../assets/store-fill.svg"
              class="w-4 h-4 lg:w-6 lg:h-5"
            />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
