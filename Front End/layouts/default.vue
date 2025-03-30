<template>
  <div class="min-h-screen flex flex-col">
    <Header v-if="!isAuthPage" />
    <div v-else class="p-6 fixed">
      <NuxtLink to="/" class="flex items-center">
        <img src="../Logo.svg" />
      </NuxtLink>
    </div>
    <main
      :class="[isAuthPage ? 'flex-grow' : 'flex-grow container mx-auto px-4 py-8']"
    >
    <slot />
      <NuxtPage />
    </main>
    <Footer v-if="!isAuthPage" />
  </div>
</template>

<script setup>
import { useRoute } from '#imports';

const route = useRoute();

// Check if current route is login or signup page
const isAuthPage = computed(() => {
  return ['/login', '/signup'].includes(route.path);
});
</script>
