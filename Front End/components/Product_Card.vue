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
import { useRouter } from 'vue-router';

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
        class="flex flex-col items-center justify-center w-[254px] lg:gap-[8px] gap-[5.039px] cursor-pointer"
        @click="navigateToProduct(id)"
    >
        <div class="relative lg:w-full lg:h-[250px] lg:rounded-[40px] bg-[#D9D9D9] flex-shrink-0 aspect-square 
        w-full h-[150px] rounded-[25.197px]">

            <div class="group">
                <div
                    v-if="isFavorite"
                    @click="toggleFavorite($event)"
                    class="w-[32px] h-[32px] rounded-full bg-white flex items-center justify-center hover:bg-[#ECDCBF] z-10 absolute pointer-events-auto lg:top-3 lg:right-3 top-2 right-2 cursor-pointer transition-all duration-300"
                >
                    <i class="fa-solid fa-heart fill text-[#A31D1D]" />
                </div>

                <div
                    v-else
                    @click="toggleFavorite($event)"
                    class="w-[32px] h-[32px] rounded-full bg-white flex items-center justify-center hover:bg-[#ECDCBF] z-10 absolute pointer-events-auto lg:top-3 lg:right-3 top-2 right-2 cursor-pointer transition-all duration-300"
                >
                    <i class="fa-regular fa-heart fill text-[#A31D1D]" />
                </div>
            </div>

            <img
                :src="image"
                class="lg:w-full lg:h-[254px] lg:rounded-[40px] w-full h-[160px] rounded-[25.197px] object-cover"
            >
        </div>

        <div class="flex flex-col items-start lg:gap-[2px] self-stretch h-[100px]">
            <p
                class="lg:text-[18px] lg:tracking-[-0.342px] font-bold leading-[150%] text-[11.339px] tracking-[-0.215px] text-red-800">
                {{ name }}
            </p>
            <p
                class="lg:text-[14px] text-[10px] text-black font-medium leading-[150%] lg:tracking-[-0.266px] tracking-[-0.191]">
                {{ description }}
            </p>
            <p
                class="lg:text-[18px] lg:tracking-[-0.342px] font-bold leading-[150%] text-[11.339px] tracking-[-0.215px] mt-auto">
                {{ price }} {{ currency }}
            </p>
        </div>
    </div>
</template>
