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
    class="inline-flex flex-col justify-start items-center lg:ml-[115px] lg:mr-[115px]"
  >
    <div class="w-full flex flex-row justify-between items-start pt-10 pb-20">
      <!-- product photo -->
      <div class="inline-flex justify-start items-start gap-6">
        <div class="w-20 inline-flex flex-col gap-5">
          <img src="../public/images/image.png" class="h-20 w-20 rounded-3xl" />
          <img src="../public/images/image.png" class="h-20 w-20 rounded-3xl" />
          <img
            src="../public/images/image.png"
            class="self-stretch h-20 w-20 rounded-3xl"
          />
        </div>
        <img
          src="../public/images/image.png"
          class="w-96 bg-gray-300 self-stretch rounded-[40px]"
        />
      </div>
      <!-- product info -->
      <div class="w-100 inline-flex flex-col justify-start items-start gap-4">
        <div
          class="w-full border-b-2 border-red-800 gap-4 pb-6 inline-flex flex-col justify-start items-start"
        >
          <!-- title -->
          <p
            class="self-stretch justify-start text-red-800 text-3xl font-bold leading-[48px]"
          >
            Eclipse Vision
          </p>
          <!-- model selection -->
          <select
            placeholder="Choose the model you want"
            class="w-full cursor-pointer text-red-800 px-6 py-3.5 bg-yellow-50 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-red-800 inline-flex justify-between items-center"
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
          class="self-stretch justify-start text-red-800 text-3xl font-semibold leading-10"
        >
          650 EGP
        </p>
        <button
          @click="toggleState"
          :class="
            isAdded ? 'bg-yellow-50 text-red-800' : 'bg-red-800 text-yellow-50'
          "
          class="text-lg font-bold font-['Poppins'] leading-relaxed cursor-pointer inline-flex w-full items-center justify-center gap-4 h-14 py-3.5 rounded-2xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]"
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
      class="w-full py-8 border-b-[2.50px] border-red-800 inline-flex flex-col justify-start items-start gap-4"
    >
      <div
        class="px-6 border-l-[6px] border-red-800 inline-flex justify-center items-center gap-2.5"
      >
        <p
          class="text-right justify-start text-red-800 text-2xl font-semibold font-['Poppins'] leading-9"
        >
          Product Features
        </p>
      </div>
      <p
        class="self-stretch justify-start text-black text-xl font-medium font-['Tajawal'] leading-loose"
      >
        Details: A modern and futuristic artboard design featuring a blend of
        dark and neon elements. It incorporates abstract geometric patterns with
        a dynamic light and shadow effect.<br />Style: Minimalist meets
        cyberpunk, perfect for branding, posters, and apparel printing.<br />Dimensions:
        60x40 cm (customizable based on use case).<br />Color Scheme: Deep
        blacks, electric blues, and vibrant purples.<br />Application: Can be
        used for hoodie prints, T-shirt graphics, packaging, or digital
        wallpapers.
      </p>
    </div>

    <!-- availible in this design -->
    <div
      class="py-8 border-b-[2.50px] border-red-800 inline-flex flex-col justify-start items-start gap-4 w-full"
    >
      <div class="w-full flex flex-row justify-between lg:mt-4 m-2">
        <div
          class="px-6 border-l-[6px] border-red-800 inline-flex justify-center items-center gap-2.5"
        >
          <p
            class="text-right justify-start text-red-800 text-2xl font-semibold leading-9"
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
        class="flex flex-row lg:flex-wrap justify-center items-center overflow-x-auto gap-4"
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
      class="py-8 inline-flex flex-col justify-start items-start gap-4 w-full"
    >
      <div class="w-full flex flex-row justify-between lg:mt-4 m-2">
        <div
          class="px-6 border-l-[6px] border-red-800 inline-flex justify-center items-center gap-2.5"
        >
          <p
            class="text-right justify-start text-red-800 text-2xl font-semibold leading-9"
          >
            Other Designs
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
        class="flex flex-row lg:flex-wrap justify-center items-center overflow-x-auto gap-4"
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
