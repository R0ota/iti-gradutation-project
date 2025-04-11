<script setup>
const route = useRoute();
const props = defineProps(["path", "baseIcon", "activeIcon", "title"]);
const activeClasses = "bg-orange-100 rounded-[50px] ";
</script>

<template>
  <NuxtLink
    :to="path"
    :class="[
      'flex items-center gap-2 py-3 px-4 cursor-pointer',
      route.path === path ? activeClasses : '',
    ]"
  >
    <img :src="route.path === path ? activeIcon : baseIcon" class="w-6 h-5" />
    <p
      :class="[
        ' font-[Poppins] font-semibold text-lg  ',
        route.path === path ? 'text-red-900' : 'text-orange-100',
      ]"
    >
      {{ title }}
    </p>
  </NuxtLink>
</template>
