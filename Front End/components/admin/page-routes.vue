<script setup>
const route = useRoute();
const props = defineProps({
  path: String,
  baseIcon : String,
  activeIcon : String,
  title : String,
  collapsed : Boolean
});
const activeClasses = "bg-orange-100 rounded-[50px] ";
</script>

<template>
  <NuxtLink
    :to="path"
    :class="[
      '   py-3 px-3 cursor-pointer',
      collapsed ? 'flex items-center justify-center' : 'flex items-center justify-start gap-2',
      route.path === path ? activeClasses : '',
    ]"
  >
    <img :src="route.path === path ? activeIcon : baseIcon" class="w-6 h-6" />
    <p
      
      :class="[
        ' font-[Poppins] font-semibold text-lg  transition-all duration-300',
        route.path === path ? 'text-red-900' : 'text-orange-100',
        collapsed ? 'opacity-0 w-0' : 'opacity-100'
      ]"
    >
      {{ title }}
    </p>
  </NuxtLink>
</template>
