<script setup>
definePageMeta({
  layout: "market",
});

import { ref } from "vue";

const isAdded = ref(false);
const toggleState = () => {
  isAdded.value = !isAdded.value;
};

const { data } = await useAsyncFetch("get", "/products");
</script>

<template>
  <div
    class=" inline-flex flex-col justify-start items-start lg:ml-[115px] lg:mr-[115px] ml-[50px] mr-[50px] md:ml-50 md:mr-50" 
  >
    <!-- hero section -->
    <div
      class="w-full flex lg:flex-row flex-col lg:justify-between justify-start lg:gap-10 gap-6 items-start pt-10 pb-10"
    >
      <!-- product photo -->
      <div
        class="inline-flex lg:flex-row flex-col-reverse justify-start  items-start gap-6"
      >
        <div class="w-20 inline-flex lg:flex-col flex-row gap-5">
          <img
            src="../public/images/image.png"
            class="h-20 w-20 lg:rounded-3xl rounded-2xl"
          />
          <img
            src="../public/images/image.png"
            class="h-20 w-20 lg:rounded-3xl rounded-2xl"
          />
          <img
            src="../public/images/image.png"
            class="self-stretch h-20 w-20 lg:rounded-3xl rounded-2xl"
          />
        </div>
        <img
          src="../public/images/image.png"
          class="lg:w-96 w-80 bg-gray-300 self-stretch rounded-[40px]"
        />
      </div>
      <!-- product info -->
      <div class="lg:w-100 w-80 inline-flex flex-col justify-start items-start gap-4">
        <div
          class="w-full lg:border-b-2 border-b-1 border-red-800 lg:gap-4 gap-3 lg:pb-6 pb-5 inline-flex flex-col justify-start items-start"
        >
          <!-- title -->
          <p
            class="self-stretch justify-start text-red-800 lg:text-3xl text-2xl font-bold lg:leading-[48px] leading-10"
          >
            Eclipse Vision
          </p>
          <!-- model selection -->
          <select
            placeholder="Choose the model you want"
            class="w-full cursor-pointer text-red-800 lg:px-6 px-5 lg:py-3.5 py-3 bg-yellow-50 lg:rounded-2xl rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-red-800 inline-flex justify-between items-center"
          >
            <option value="" disabled selected hidden>
              Choose the model you want
            </option>
            <option value="1">text-1</option>
            <option value="2">text-2</option>
            <option value="3">text-3</option>
          </select>
          <!-- type -->
          <ProductInfo title="Type"
            ><InfoButton info="type1" />
            <InfoButton info="type2" />
            <InfoButton info="type3" />
            <InfoButton info="type4" />
          </ProductInfo>
          <!-- size -->
          <ProductInfo title="Size"
            ><InfoButton info="small" />
            <InfoButton info="large" />
            <InfoButton info="small" />
            <InfoButton info="large" />
          </ProductInfo>
          <!-- color -->
          <ProductInfo title="Color">
            <ProductColor color="red-800" />
            <ProductColor color="yellow-50" />
            <ProductColor color="red-200" />
          </ProductInfo>
        </div>
        <!-- price -->
        <p
          class="self-stretch justify-start text-red-800 lg:text-3xl text-2xl font-semibold lg:leading-10 leading-9"
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
    </div>

    <!-- product features -->
    <div
      class="py-8 lg:w-full w-80  lg:flex-wrap flex-wrap border-b-[2.50px] border-red-800 inline-flex flex-col justify-start items-start gap-4"
    >
      <div
        class="lg:px-6 px-4 border-l-[6px] border-red-800 inline-flex justify-center items-center gap-2.5"
      >
        <p
          class=" justify-start text-red-800 text-2xl font-semibold lg:leading-9 leading-normal"
        >
          Product Features
        </p>
      </div>
      <div class="flex flex-col lg:flex-wrap flex-wrap gap-2">
        <p
          class="self-stretch flex  justify-start text-black lg:text-xl text-base font-medium font-['Tajawal'] lg:leading-loose leading-normal"
        >
          Details: A modern and futuristic artboard design featuring a blend of
          dark and neon elements. It incorporates abstract geometric patterns
          with a dynamic light and shadow effect.
        </p>
        <p
          class="self-stretch flex justify-start text-black lg:text-xl text-base font-medium font-['Tajawal'] lg:leading-loose leading-normal"
        >
          Style: Minimalist meets cyberpunk, perfect for branding, posters, and
          apparel printing.
        </p>
        <p
          class="self-stretch flex justify-start text-black lg:text-xl text-base font-medium font-['Tajawal'] lg:leading-loose leading-normal"
        >
          Dimensions: 60x40 cm (customizable based on use case).
        </p>
        <p
          class="self-stretch flex justify-start text-black lg:text-xl text-base font-medium font-['Tajawal'] lg:leading-loose leading-normal"
        >
          Color Scheme: Deep blacks, electric blues, and vibrant purples.
        </p>
        <p
          class="self-stretch flex justify-start text-black lg:text-xl text-base font-medium font-['Tajawal'] lg:leading-loose leading-normal"
        >
          Application: Can be used for hoodie prints, T-shirt graphics,
          packaging, or digital wallpapers.
        </p>
      </div>
    </div>

    <!-- availible in this design -->
    <div
      class="py-8 lg:w-full w-80  lg:flex-wrap flex-wrap border-b-[2.50px] border-red-800 inline-flex flex-col justify-start items-start gap-4 "
    >
      <div class="w-full flex flex-row justify-between lg:mt-4 m-2">
        <div
          class="px-6 border-l-[6px] border-red-800 inline-flex justify-center items-center gap-2.5"
        >
          <p
            class=" justify-start text-red-800 text-2xl font-semibold lg:leading-9 leading-normal"
          >
            Available in this design
          </p>
        </div>
        <NuxtLink
          to="/market-products"
          class="flex flex-row items-center gap-1"
        >
          <p
            class="lg:text-[16px] text-black tracking-[-0.304px] font-semibold cursor-pointer"
          >
            more
          </p>
          <svg
            class="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.3261 8.74989C17.7871 9.21087 17.7871 9.95949 17.3261 10.4205L11.4257 16.3209C10.9647 
          16.7819 10.2161 16.7819 9.7551 16.3209C9.29413 15.86 9.29413 15.1113 9.7551 14.6504L14.8221 9.58333L9.75879 
          4.5163C9.29781 4.05533 9.29781 3.30671 9.75879 2.84573C10.2198 2.38476 10.9684 2.38476 11.4294 2.84573L17.3298 
          8.7462L17.3261 8.74989ZM4.34511 2.84942L10.2456 8.74989C10.7066 9.21087 10.7066 9.95949 10.2456 10.4205L4.34511 
          16.3209C3.88413 16.7819 3.13551 16.7819 2.67453 16.3209C2.21356 15.86 2.21356 15.1113 2.67453 14.6504L7.74156 
          9.58333L2.67822 4.5163C2.21725 4.05533 2.21725 3.30671 2.67822 2.84573C3.1392 2.38476 3.88782 2.38476 4.34879 
          2.84573L4.34511 2.84942Z"
              fill="black"
            />
          </svg>
        </NuxtLink>
      </div>
      <!-- items -->
      <div
        class="flex flex-row lg:w-full w-80 lg:flex-wrap lg:justify-center  overflow-x-auto gap-4"
      >
        <div v-for="product in data.products.slice(0, 4)" class="flex">
          <ProductCard
            :name="product.title"
            :type="product.title"
            :price="product.id"
            :image="product.thumbnail"
            currency="EGP"
          />
        </div>
      </div>
    </div>

    <!-- Other Designs -->
    <div
      class="py-8 lg:w-full w-80  lg:flex-wrap flex-wrap border-b-[2.50px] border-red-800 inline-flex flex-col justify-start items-start gap-4 "
    >
      <div class="w-full flex flex-row justify-between lg:mt-4 m-2">
        <div
          class="px-6 border-l-[6px] border-red-800 inline-flex justify-center items-center gap-2.5"
        >
          <p
            class=" justify-start text-red-800 text-2xl font-semibold lg:leading-9 leading-normal"
          >
           Other designe
          </p>
        </div>
        <NuxtLink
          to="/market-products"
          class="flex flex-row items-center gap-1"
        >
          <p
            class="lg:text-[16px] text-black tracking-[-0.304px] font-semibold cursor-pointer"
          >
            more
          </p>
          <svg
            class="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.3261 8.74989C17.7871 9.21087 17.7871 9.95949 17.3261 10.4205L11.4257 16.3209C10.9647 
          16.7819 10.2161 16.7819 9.7551 16.3209C9.29413 15.86 9.29413 15.1113 9.7551 14.6504L14.8221 9.58333L9.75879 
          4.5163C9.29781 4.05533 9.29781 3.30671 9.75879 2.84573C10.2198 2.38476 10.9684 2.38476 11.4294 2.84573L17.3298 
          8.7462L17.3261 8.74989ZM4.34511 2.84942L10.2456 8.74989C10.7066 9.21087 10.7066 9.95949 10.2456 10.4205L4.34511 
          16.3209C3.88413 16.7819 3.13551 16.7819 2.67453 16.3209C2.21356 15.86 2.21356 15.1113 2.67453 14.6504L7.74156 
          9.58333L2.67822 4.5163C2.21725 4.05533 2.21725 3.30671 2.67822 2.84573C3.1392 2.38476 3.88782 2.38476 4.34879 
          2.84573L4.34511 2.84942Z"
              fill="black"
            />
          </svg>
        </NuxtLink>
      </div>
      <!-- items -->
      <div
        class="flex flex-row lg:w-full w-80 lg:flex-wrap lg:justify-center  overflow-x-auto gap-4"
      >
        <div v-for="product in data.products.slice(0, 4)" class="flex">
          <ProductCard
            :name="product.title"
            :type="product.title"
            :price="product.id"
            :image="product.thumbnail"
            currency="EGP"
          />
        </div>
      </div>
    </div>
  </div>
</template>
