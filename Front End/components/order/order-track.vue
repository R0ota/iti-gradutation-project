<script setup>
    import { ref, defineProps } from "vue";

const checked = ref(false);

const prop = defineProps(["currentStatus", "finalStatus", "img"]);
</script>

<!-- <template>
    <div class="flex flex-col items-center justify-start gap-2 w-28">
        <div class="w-14 h-14 bg-zinc-300"></div>
        <div class="flex py-[1.5px] gap-2 items-center">
          <i
            v-if="!checked"
            @click="checked = true"
            class="fa-regular fa-circle text-red-800 cursor-pointer"
          >
          </i>
          <i
            v-else
            class="fa-solid fa-circle-check text-red-800 cursor-pointer"
          ></i>
          <p class="text-red-800 text-base font-bold font-['Poppins'">
           {{ status }}
          </p>
        </div>
      </div>
</template> -->

<template>
    <div
      class="flex flex-col items-center justify-start gap-2 w-28"
      :class="{ 'opacity-50': checked }"
    >
      <img :src="img" class="w-14 h-14 "/>
      
      <div class="flex py-[1.5px] gap-2 items-center">
        <i
          v-if="!checked"
          @click="checked = true"
          class="fa-regular fa-circle text-red-800 cursor-pointer"
        ></i>
        
        <i
          v-else
          class="fa-solid fa-circle-check text-red-800 cursor-pointer"
        ></i>
  
        <p class="text-red-800 text-base font-bold font-['Poppins']">
          {{ checked ? finalStatus : currentStatus }}
        </p>
      </div>
    </div>
  </template>

  