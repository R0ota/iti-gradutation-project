<script setup>
    defineProps({
  name: String,
  type: String,
  price:Number,
  image : String,
  currency : String,
});

import { ref , nextTick} from "vue";

const isFavorite = ref(false);

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
  console.log("Favorite status:", isFavorite.value);
};
</script>

<template>
    <div class="flex flex-col items-center justify-center lg:gap-[8px] gap-[5.039px] cursor-pointer">
        <div class="relative lg:w-[250px] lg:h-[250px] lg:rounded-[40px] bg-[#D9D9D9] flex-shrink-0 aspect-square 
        w-[150px] h-[150px] rounded-[25.197px]">

            <div class="group">
                <svg  v-if="isFavorite"
                    @click="toggleFavorite" 
                    xmlns="http://www.w3.org/2000/svg" class="z-10 absolute lg:top-3 pointer-events-auto lg:right-3 top-2 right-2 
                    cursor-pointer transition-all duration-300" width="33" height="32" viewBox="0 0 33 32" fill="none">
                    <rect x="0.333008" width="32" height="32" rx="16" fill="white" class="transition-all duration-300 group-hover:fill-[#ECDCBF]"/>
                    <path d="M7.44826 19.0098L15.152 26.202C15.4717 26.5004 15.8938 26.6667 16.3329 26.6667C16.772 26.6667 17.1941 26.5004 
                    17.5138 26.202L25.2175 19.0098C26.5136 17.8033 27.2469 16.1108 27.2469 14.3416V14.0943C27.2469 11.1143 25.0939 8.57337 
                    22.1565 8.0831C20.2125 7.75909 18.2343 8.39431 16.8445 9.78414L16.3329 10.2957L15.8213 9.78414C14.4315 8.39431 12.4533 
                    7.75909 10.5093 8.0831C7.57189 8.57337 5.41895 11.1143 5.41895 14.0943V14.3416C5.41895 16.1108 6.15223 17.8033 7.44826 
                    19.0098Z" fill="#A31D1D"/>
                </svg>

                <svg  v-else
                    @click="toggleFavorite" 
                    xmlns="http://www.w3.org/2000/svg" class="z-10 absolute pointer-events-auto lg:top-3 lg:right-3 top-2 right-2 
                    cursor-pointer transition-all duration-300 " width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect width="32" height="32" rx="16" fill="white" class="transition-all duration-300 group-hover:fill-[#ECDCBF]"/>
                    <path d="M14.7113 26.1587L14.6046 26.0605L7.12557 19.1151C5.81504 17.8985 5.07227 16.191 5.07227 
                    14.4023V14.2614C5.07227 11.2562 7.20668 8.67782 10.1607 8.11433C11.8426 7.7899 13.563 8.17837 14.9333 
                    9.14312C15.3175 9.41633 15.676 9.73222 16.0005 10.0951C16.1798 9.89017 16.3719 9.70234 16.5768 9.52732C16.7347 
                    9.39071 16.8969 9.26265 17.0677 9.14312C18.438 8.17837 20.1583 7.7899 21.8402 8.11006C24.7943 8.67355 26.9287 
                    11.2562 26.9287 14.2614V14.4023C26.9287 16.191 26.1859 17.8985 24.8754 19.1151L17.3964 26.0605L17.2897 26.1587C16.9396 
                    26.4831 16.4786 26.6667 16.0005 26.6667C15.5224 26.6667 15.0613 26.4874 14.7113 26.1587ZM15.279 12.3618C15.262 12.349 
                    15.2492 12.3319 15.2363 12.3149L14.4765 11.4611L14.4722 11.4568C13.4861 10.3512 11.9963 9.84748 10.5449 10.125C8.55563 
                    10.5049 7.1213 12.238 7.1213 14.2614V14.4023C7.1213 15.6189 7.62929 16.7843 8.52148 17.6125L16.0005 24.5579L23.4795 
                    17.6125C24.3716 16.7843 24.8796 15.6189 24.8796 14.4023V14.2614C24.8796 12.2423 23.4453 10.5049 21.4603 10.125C20.0089 
                    9.84748 18.5148 10.3555 17.533 11.4568C17.533 11.4568 17.533 11.4568 17.5287 11.4611C17.5244 11.4654 17.5287 11.4611 
                    17.5244 11.4654L16.7646 12.3191C16.7518 12.3362 16.7347 12.349 16.7219 12.3661C16.5298 12.5582 16.2694 12.6649 16.0005 
                    12.6649C15.7315 12.6649 15.4711 12.5582 15.279 12.3661V12.3618Z" fill="#A31D1D"/>
                </svg>
            </div>


            <NuxtLink to="/product"> 
                <img :src="image" class="lg:w-[254px] lg:h-[254px] lg:rounded-[40px] w-[160px] h-[160px] rounded-[25.197px] ">
            </NuxtLink>
        </div>
        
        <div class="flex flex-col items-start lg:gap-[2px] self-stretch">
            <p class="text-right lg:text-[18px] lg:tracking-[-0.342px] font-bold leading-[150%] text-[11.339px] tracking-[-0.215px] text-red-800">
                {{ name }}
            </p>
            <p class="text-right lg:text-[14px] text-[10px] text-black font-medium leading-[150%] lg:tracking-[-0.266px] tracking-[-0.191]">
                {{ type }}
            </p>
            <p class="text-right lg:text-[18px] lg:tracking-[-0.342px] font-bold leading-[150%] text-[11.339px] tracking-[-0.215px]">
                {{ price }} {{ currency }}
            </p>
        </div>    
    </div>
</template>

