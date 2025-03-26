<script setup>
definePageMeta({
  layout: "auth",
});

import { ref, computed } from "vue";

const email = ref("");
const password = ref("");

const isFormValid = computed(() => {
    return email.value.trim() !== "" && password.value.length >= 6;});

const showPassword = ref(false);
</script>
<template></template>