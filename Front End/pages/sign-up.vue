<script setup>
definePageMeta({
  layout: "auth",
});

import { ref, computed } from "vue";

const email = ref("");
const password = ref("");
const name = ref("");
const username = ref("");

const isFormValid = computed(() => {
    return email.value.trim() !== "" && password.value.length >= 8 && name.value.trim() !== "" && username.value.trim() !== "";});

const showPassword = ref(false);
</script>

<template>
  <div class="h-full flex items-center w-full">
    <img
      src="../assets/authimage.png"
      class="h-[100vh] lg:w-1/3 lg:block hidden"
    />

    <div class="h-screen flex items-center m-auto">
      <div
        class="lg:w-[555px] w-full inline-flex flex-col lg:justify-start justify-center lg:items-start items-center gap-14"
      >
        <div classs="w-full flex lg:justify-start justify-center items-center">
          <div
            class="px-6 border-l-[6px] border-red-800 flex justify-center items-center"
          >
            <p
              class="text-red-800 lg:text-3xl text-2xl font-bold leading-loose lg:leading-[48px]"
            >
              Sign up
            </p>
          </div>
        </div>

        <form
          class="w-full inline-flex flex-col justify-start items-start gap-2  "
        >
          <!-- name & username -->
          <div class="lg:inline-flex lg:flex-row flex-col  justify-between items-center w-full lg:gap-4 gap-2">
            <div class="w-full flex flex-col justify-start items-start gap-0.5">
              <label
              for="name"
              class="px-2 jaustify-center items-start text-red-800 text-lg font-medium leading-relaxed"
              >Name</label
              >
              <input
                v-model="name"
                type="text"
                placeholder="'Nour'"
                id="name"
                class="w-full placeholder:text-red-800 placeholder:opacity-50 placeholder:text-m font-medium p-3 text-red-800 bg-yellow-50 rounded-2xl outline outline-offset-[-1px] outline-red-800 inline-flex justify-start items-center"
              />
            </div>
            
            <div class="w-full flex flex-col justify-start items-start gap-0.5">
              <label
              for="username"
              class="px-2 jaustify-center items-start text-red-800 text-lg font-medium leading-relaxed"
              >User Name</label
              >
              <input
                v-model="username"
                type="text"
                placeholder="'nour2002'"
                id="username"
                class="w-full placeholder:text-red-800 placeholder:opacity-50 placeholder:text-m font-medium p-3 text-red-800 bg-yellow-50 rounded-2xl outline outline-offset-[-1px] outline-red-800 inline-flex justify-start items-center"
              />
            </div>
          </div>
          <!-- email -->
          <div
            class="self-stretch flex flex-col justify-start items-start gap-0.5"
          >
            <label
              for="email"
              class="px-2 jaustify-center items-start text-red-800 text-lg font-medium leading-relaxed"
              >Email</label
            >
            <input
              v-model="email"
              type="email"
              placeholder="'example@gmail.com'"
              id="email"
              class="w-full placeholder:text-red-800 placeholder:opacity-50 placeholder:text-m font-medium p-3 text-red-800 bg-yellow-50 rounded-2xl outline outline-offset-[-1px] outline-red-800 inline-flex justify-start items-center"
            />
          </div>
          <!-- passwprd -->
          <div
            class="self-stretch flex flex-col justify-start items-start gap-0.5"
          >
            <label
              for="password"
              class="px-2 jaustify-center items-start text-red-800 text-lg font-medium leading-relaxed"
              >Password</label
            >
            <div class="relative w-full">
              <input
                 v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="+8 Characters"
                id="password"
                class="w-full placeholder:text-red-800 placeholder:opacity-50 placeholder:text-m font-medium p-3 text-red-800 bg-yellow-50 rounded-2xl outline outline-offset-[-1px] outline-red-800 inline-flex justify-start items-center"
              />

              <span
                class="absolute inset-y-0 right-4 flex items-center text-red-800 cursor-pointer"
                @click="showPassword = !showPassword"
              >
                <i
                  :class="
                    showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'
                  "
                ></i>
              </span>
            </div>
          </div>

          <div
            class="w-full flex flex-col justify-center items-center gap-2 mt-10 lg:p-0"
          >
            <button
              :class="isFormValid ? 'bg-red-800' : 'bg-gray-300 cursor-not-allowed'"
              class="w-80 h-13 py-3  rounded-2xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] inline-flex justify-center items-center text-yellow-50 text-lg font-bold cursor-pointer"
              :disabled="!isFormValid"
            >
              Create Account
            </button>
            <p class="text-black text-base font-medium">
              Have an Account ?
              <NuxtLink to="login" class="text-red-800 text-lg font-bold"
                >Log in</NuxtLink
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
