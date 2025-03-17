<script setup>
    defineProps({
        catigory : String,
        img : String,
    });
</script>

<template>
    <div class=" mobile-style flex flex-col justify-end items-center 
    lg:gap-2.5 lg:w-[341px] lg:h-[450px] lg:p-[24px_27px] 
    rounded-[40px] bg-[#D9D9D9] w-[247.935px] 
    h-[349px] p-[17.45px_19.631px] ">
        <img :src="img" class="lg:w-[341px] lg:h-[480px]  w-[247.935px] h-[349px] hover:opacity-[0.5]">
        <button class="flex justify-center items-center 
        lg:gap-[10px] lg:p-[8px_24px] lg:rounded-[16px] 
    bg-red-200 text-red-800 cursor-pointer p-[5.817px_17.45px] 
        md:p-[8px_22px] rounded-[11.633px] hover:text-red-200 hover:bg-red-800
        lg:text-[18px] font-semibold leading-[150%] lg:tracking-[-0.304px] tracking-[-0.276px] text-[14.542px]">
        {{catigory}}</button>
    </div>
</template>
