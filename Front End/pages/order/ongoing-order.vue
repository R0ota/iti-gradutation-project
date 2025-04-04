<script setup>
import { NuxtLink } from "#components";

definePageMeta({
  layout: "order",
});
// const { data } = await useAsyncFetch("get", "/products");
</script>

<template>
  <div class="ml-[120px] mr-[120px] pt-10 pb-20 flex flex-col gap-10">
    <OrderNvegation/>
    <div class="w-[533px] p-6 bg-orange-200 rounded-[48px] flex flex-col justify-center items-start gap-2.5">
        <div class="h-44 inline-flex justify-start items-center gap-4 w-full">
            <img src="" class="w-44 h-44 bg-yellow-50 rounded-[40px] "/>
            <div class=" py-2 h-44 flex flex-col justify-between items-center w-full">
                <div class="flex flex-col gap-2 jutify-start items-start w-full">
                    <div class="flex justify-between items-center w-full">
                        <p class="text-neutral-800 text-lg font-semibold font-['Poppins'] leading-relaxed">Order Status</p>
                        <p class="text-neutral-800 text-lg font-semibold font-['Poppins'] leading-relaxed">Processing</p>
                    </div>
                    <div class="flex justify-between items-center w-full">
                        <p class="text-neutral-800 text-lg font-semibold font-['Poppins'] leading-relaxed">Quantity</p>
                        <p class="text-neutral-800 text-lg font-semibold font-['Poppins'] leading-relaxed">15 items</p>
                    </div>
                    <div class="flex justify-between items-center w-full">
                        <p class="text-neutral-800 text-lg font-semibold font-['Poppins'] leading-relaxed">Order Date</p>
                        <p class="text-neutral-800 text-lg font-semibold font-['Poppins'] leading-relaxed">25 / 01 / 2025</p>
                    </div>
                </div>
                <div class="flex justify-between items-center w-full">
                    <p class="text-red-800 text-xl font-semibold font-['Poppins']">Total Price</p>
                        <p class="text-red-800 text-xl font-semibold font-['Poppins']">900 EGP</p>
                    </div>
                
            </div>
        </div>
        

    </div>
  </div>
</template>
