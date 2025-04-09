
 <script setup>
import { defineProps } from "vue";

const props = defineProps({
  currentStatus : String,
  finalStatus : String,
  img : String,
  isActive : Boolean,
  isDisabled : Boolean,
  isDone : Boolean,
  isFinalClicked : Boolean,
  currentImg: String,
  finalImg: String,
});

const imgSrc = computed(() => {
  return props.isDisabled ? props.currentImg : props.finalImg;
});
</script>

<template>
  <div
    class="flex flex-col items-center justify-start gap-2 w-28"
    :class="{ 'opacity-50': isDisabled && !isFinalClicked }"
  >
    <img :src="imgSrc" class="w-14 h-14" />

    <div class="flex py-[1.5px] gap-2 items-center">
      <!-- حالة الأيقونة -->
      <i
        v-if="isDone"
        class="fa-solid fa-circle-check text-red-800 "
      ></i>

      <i
        v-else-if="!isActive"
        
       class="fa-regular fa-circle text-red-800 ">
      </i>

      <i
        v-else
        class="fa-regular fa-circle-dot text-red-800 cursor-pointer"
      ></i>

      <!-- النص حسب الحالة -->
      <p class="text-red-800 text-base font-bold font-['Poppins']">
        {{ isDone ? finalStatus : currentStatus }}
      </p>
    </div>
  </div>
</template>

  