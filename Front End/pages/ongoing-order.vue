<script setup>
import { NuxtLink } from '#components';

    definePageMeta({
  layout: "order",
});
</script>

<template>
    <div class="ml-[120px] mr-[120px] pt-10 pb-20 flex flex-col gap-10">
        <div class="border-b-2 border-red-800 gap-6 flex w-full">
            <!-- <NuxtLink class="px-4 py-2 flex justify-center items-center gap-2.5 cursor-pointer focus:bg-red-800 focus:rounded-tl-3xl focus:rounded-tr-3xl group">
                <p class="text-red-800 text-xl font-medium group-focus:font-bold group-focus:text-yellow-50">Ongoing Orders</p>
            </NuxtLink>
            <NuxtLink class="px-4 py-2 flex justify-center items-center gap-2.5">
                <p class="text-red-800 text-xl font-medium">Ongoing Orders</p>
            </NuxtLink> -->
            <NuxtLink  tabindex="0" class="px-4 py-2 flex justify-center items-center gap-2.5 cursor-pointer focus:bg-red-800 focus:rounded-tl-3xl focus:rounded-tr-3xl group">
    <p class="text-red-800 text-xl font-medium group-focus:font-bold group-focus:text-yellow-50">Ongoing Orders</p>
</NuxtLink>

        </div>
    </div>
</template>