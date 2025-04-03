<template>
  <nav
    class="flex h-[43px] justify-center items-end gap-6 self-stretch bg-[#A31D1D] border-b-2 border-[#A31D1D]"
  >
    <NuxtLink
      to="profilePage"
      class="text-[#FFEFD1] text-center font-poppins text-[18px] font-bold leading-[27px] tracking-[-0.342px]
         px-6 py-2 rounded-none 
         hover:bg-[#FFEFD1] hover:text-[#A31D1D] hover:rounded-t-[24px] 
         hover:px-6 hover:py-2 hover:gap-[10px] 
         flex justify-center items-center
         transition-none transform-none"
    >
      Profile
    </NuxtLink>

    <NuxtLink
      to="/orderPage"
      class="text-[#FFEFD1] text-center font-poppins text-[18px] font-bold leading-[27px] tracking-[-0.342px]
         px-6 py-2 rounded-none 
         hover:bg-[#FFEFD1] hover:text-[#A31D1D] hover:rounded-t-[24px] 
         hover:px-6 hover:py-2 hover:gap-[10px] 
         flex justify-center items-center
         transition-none transform-none"
    >
      Orders
    </NuxtLink>
    <NuxtLink
      to="/security"
      class="text-[#FFEFD1] text-center font-poppins text-[18px] font-bold leading-[27px] tracking-[-0.342px]
         px-6 py-2 rounded-none 
         hover:bg-[#FFEFD1] hover:text-[#A31D1D] hover:rounded-t-[24px] 
         hover:px-6 hover:py-2 hover:gap-[10px] 
         flex justify-center items-center
         transition-none transform-none"
    >
      Security
    </NuxtLink>
  </nav>

  <div class="h-full flex items-center w-full">
    <div class="h-screen flex items-center m-auto">
      <div
        class="lg:w-[555px] w-full inline-flex flex-col lg:justify-start justify-center items-start gap-14"
      >
        <div class="w-full flex lg:justify-start justify-center items-center">
          <div
            class="px-6 border-l-[6px] border-red-800 flex justify-center items-center"
          >
            <p
              class="text-red-800 lg:text-3xl text-2xl font-bold leading-loose lg:leading-[48px]"
            >
              Profile Info
            </p>
          </div>
        </div>

        <form
          @submit.prevent="handleSubmit"
          class="w-full inline-flex flex-col justify-start items-start gap-2"
        >
          <!-- Name -->
          <div
            class="relative w-full flex flex-col justify-start items-start gap-0.5"
          >
            <label
              for="name"
              class="px-2 text-red-800 text-lg font-medium leading-relaxed"
            >
              Name
            </label>
            <div class="relative w-full">
              <div
                class="flex items-center justify-between w-full bg-yellow-50 text-red-800 rounded-2xl p-3 outline outline-[1px] outline-red-800"
              >
                <input
                  v-model="name"
                  @blur="validateField('name')"
                  @input="validateField('name')"
                  @focus="clearValidation('name')"
                  type="text"
                  placeholder="e.g. Nour"
                  id="name"
                  class="w-full bg-yellow-50 text-red-800 placeholder:text-red-800 placeholder:opacity-50 placeholder:font-medium font-medium focus:outline-none"
                  :class="errors.name ? 'border-red-500 focus:ring-red-500' : 'focus:ring-[#A31D1D]'"
                />
                <i class="fa-solid fa-gear text-[#A31D1D] ml-3"></i>
              </div>

              <div
                v-if="validationStatus.name"
                class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full"
                :class="errors.name ? 'bg-red-500 text-white' : 'bg-[#A31D1D] text-white'"
              >
                <!-- <component :is="errors.name ? 'ErrorIcon' : 'SuccessIcon'" /> -->
                <i
                  :class="errors.name ? 'fa-solid fa-exclamation' : 'fa-solid fa-check'"
                ></i>
              </div>
            </div>
            <p v-if="errors.name" class="mt-1 text-sm text-red-500">
              {{ errors.name }}
            </p>
          </div>

          <!-- Username -->
          <div
            class="relative w-full flex flex-col justify-start items-start gap-0.5"
          >
            <label
              for="username"
              class="px-2 text-red-800 text-lg font-medium leading-relaxed"
            >
              User Name
            </label>
            <div class="relative w-full">
              <div
                class="flex items-center justify-between w-full bg-yellow-50 text-red-800 rounded-2xl p-3 outline outline-[1px] outline-red-800 mb-4"
              >
                <input
                  v-model="email"
                  @blur="validateField('email')"
                  @input="validateField('email')"
                  @focus="clearValidation('email')"
                  type="email"
                  placeholder="e.g. nour2002"
                  id="email"
                  class="w-full bg-yellow-50 text-red-800 placeholder:text-red-800 placeholder:opacity-50 placeholder:font-medium font-medium focus:outline-none"
                  :class="errors.email ? 'border-red-500 focus:ring-red-500' : 'focus:ring-[#A31D1D]'"
                />
                <i class="fa-solid fa-gear text-[#A31D1D] ml-3"></i>
              </div>

              <div
                v-if="validationStatus.username"
                class="absolute  right-3 top-1/2 -translate-y-1/2  flex items-center justify-center w-6 h-6 rounded-full"
                :class="errors.username ? 'bg-red-500 text-white' : 'bg-[#A31D1D] text-white'"
              >
                <i
                  :class="errors.name ? 'fa-solid fa-exclamation' : 'fa-solid fa-check'"
                ></i>
              </div>
            </div>
            <p v-if="errors.username" class="mt-1 text-sm text-red-500">
              {{ errors.username }}
            </p>
          </div>
          <!-- Email -->
          <div
            class="relative w-full flex flex-col justify-start items-start gap-0.5"
          >
            <label
              for="email"
              class="px-2 text-red-800 text-lg font-medium leading-relaxed"
            >
              Email
            </label>
            <div class="relative w-full">
              <div
                class="flex items-center justify-between w-full bg-yellow-50 rounded-2xl outline outline-offset-[-1px] outline-red-800 p-3"
              >
                <input
                  v-model="email"
                  @blur="validateField('email')"
                  @input="validateField('email')"
                  @focus="clearValidation('email')"
                  type="email"
                  placeholder="example@gmail.com"
                  id="email"
                  class="w-full bg-yellow-50 text-red-800 font-medium placeholder:text-red-800 placeholder:opacity-50 placeholder:text-m focus:outline-none"
                  :class="errors.email ? 'border-red-500 focus:ring-red-500' : 'focus:ring-[#A31D1D]'"
                />
                <i class="fa-solid fa-gear text-[#A31D1D] ml-3"></i>
              </div>

              <div
                v-if="validationStatus.email"
                class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full"
                :class="errors.email ? 'bg-red-500 text-white' : 'bg-[#A31D1D] text-white'"
              >
                <i
                  :class="errors.email ? 'fa-solid fa-exclamation' : 'fa-solid fa-check'"
                ></i>
              </div>
            </div>
            <p v-if="errors.email" class="mt-1 text-sm text-red-500">
              {{ errors.email }}
            </p>
          </div>
          <!-- Location -->
          <div
            class="relative w-full flex flex-col justify-start items-start gap-0.5"
          >
            <label
              for="location"
              class="px-2 text-red-800 text-lg font-medium leading-relaxed"
            >
              Location
            </label>
            <div class="relative w-full">
              <div
                class="flex items-center justify-between w-full bg-yellow-50 text-red-800 rounded-2xl p-3 outline outline-[1px] outline-red-800"
              >
                <input
                  v-model="location"
                  @blur="validateField('location')"
                  @input="validateField('location')"
                  @focus="clearValidation('location')"
                  type="text"
                  placeholder="e.g. Cairo, Egypt"
                  id="location"
                  class="w-full bg-yellow-50 text-red-800 placeholder:text-red-800 placeholder:opacity-50 placeholder:font-medium font-medium focus:outline-none"
                  :class="errors.location ? 'border-red-500 focus:ring-red-500' : 'focus:ring-[#A31D1D]'"
                />
                <i class="fa-solid fa-gear text-[#A31D1D] ml-3"></i>
              </div>

              <div
                v-if="validationStatus.location"
                class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full"
                :class="errors.location ? 'bg-red-500 text-white' : 'bg-[#A31D1D] text-white'"
              >
                <i
                  :class="errors.location ? 'fa-solid fa-exclamation' : 'fa-solid fa-check'"
                ></i>
              </div>
            </div>
            <p v-if="errors.location" class="mt-1 text-sm text-red-500">
              {{ errors.location }}
            </p>
          </div>

          <!-- Phone Number -->
          <div
            class="relative w-full flex flex-col justify-start items-start gap-0.5"
          >
            <label
              for="phone"
              class="px-2 text-red-800 text-lg font-medium leading-relaxed"
            >
              Phone Number
            </label>
            <div class="relative w-full">
              <div
                class="flex items-center justify-between w-full bg-yellow-50 text-red-800 rounded-2xl p-3 outline outline-[1px] outline-red-800"
              >
                <input
                  v-model="phone"
                  @blur="validateField('phone')"
                  @input="validateField('phone')"
                  @focus="clearValidation('phone')"
                  type="text"
                  placeholder="e.g. +20 123 456 7890"
                  id="phone"
                  class="w-full bg-yellow-50 text-red-800 placeholder:text-red-800 placeholder:opacity-50 placeholder:font-medium font-medium focus:outline-none"
                  :class="errors.phone ? 'border-red-500 focus:ring-red-500' : 'focus:ring-[#A31D1D]'"
                />
                <i class="fa-solid fa-gear text-[#A31D1D] ml-3"></i>
              </div>

              <div
                v-if="validationStatus.phone"
                class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full"
                :class="errors.phone ? 'bg-red-500 text-white' : 'bg-[#A31D1D] text-white'"
              >
                <i
                  :class="errors.phone ? 'fa-solid fa-exclamation' : 'fa-solid fa-check'"
                ></i>
              </div>
            </div>
            <p v-if="errors.phone" class="mt-1 text-sm text-red-500">
              {{ errors.phone }}
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<!-- <script setup>
definePageMeta({
  layout: "profile",
});

import { ref, computed } from "vue";
import { z } from 'zod';
import { useAuth } from '../composables/useAuth';
import { useAuthMiddleware } from '../composables/useAuthMiddleware';

const { signup } = useAuth();
const { loading, error: authError } = useAuthStore();

const { guestOnly } = useAuthMiddleware();

// Redirects authenticated users away from the login page
onMounted(() => {
  guestOnly();
});


const name = ref('');
const username = ref('');
const email = ref('');
const errors = ref({});
const validationStatus = ref({
  name: false,
  username: false,
  email: false,
  location: false,
  phone: false
});
const showPassword = ref(false);

const signupSchema = z.object({
  name: z.string()
    .min(4, 'Name must be at least 4 characters')
    .max(50, 'Name is too long')
    .regex(/^[a-zA-Z\s]+$/, 'Name must contain only letters'),

  username: z.string()
    .min(4, 'Username must be at least 4 characters')
    .max(20, 'Username is too long')
    .regex(/^(?!\d+$)[a-zA-Z0-9_]+$/, 'Username must contain at least one letter'),
    email: z.string()
    .email('Please enter a valid email address')
    .min(5, 'Email must be at least 5 characters')
    .max(50, 'Email must be at most 50 characters'),
    location: z.string()
    .min(2, 'Location must be at least 2 characters')
    .max(100, 'Location is too long'),

  phone: z.string()
    .regex(/^\+?\d{10,15}$/, 'Phone number is invalid')

});




const validateField = (field) => {
  const value = eval(field).value;
  if (!value || value.trim() === '') {
    // Field is empty → reset validation
    errors.value[field] = null;
    validationStatus.value[field] = false;
    return;
  }
  try {
    signupSchema.pick({ [field]: true }).parse({ [field]: eval(field).value });
    errors.value[field] = null;
    validationStatus.value[field] = true;
  } catch (error) {
    if (error instanceof z.ZodError) {
      errors.value[field] = error.errors[0].message;
      validationStatus.value[field] = true;
    }
  }
};

const clearValidation = (field) => {
  errors.value[field] = null;
  validationStatus.value[field] = false;
};

// const isFormValid = computed(() => {
//   return (
//     validationStatus.value.name &&
//     validationStatus.value.username &&
//     validationStatus.value.email &&
//     validationStatus.value.password
//   );
// });
const isFormValid = computed(() => {
  const allFieldsFilled =
    name.value.trim().length > 0 &&
    username.value.trim().length > 0 &&
    email.value.trim().length > 0 &&
    location.value.trim().length > 0 &&
    phone.value.trim().length > 0;


  const noErrorsExist = Object.values(errors.value).every((error) => !error);

  return allFieldsFilled && noErrorsExist;
});

const handleSubmit = async () => {
  errors.value = {};

  try {
    const validatedData = signupSchema.parse({
      name: name.value,
      username: username.value,
      email: email.value,
      location: location.value
      phone: phone.value
    });

    // Use the composable for signup
    await signup({
      name: validatedData.name,
      username: validatedData.username,
      email: validatedData.email,
      password: validatedData.password
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      error.errors.forEach((err) => {
        errors.value[err.path[0]] = err.message;
      });
    }
  }
};
</script> -->
<script setup>
definePageMeta({
  layout: "order",

});
import { ref, computed, onMounted } from 'vue';
import { z } from 'zod';
import { useAuth } from '../composables/useAuth';
import { useAuthMiddleware } from '../composables/useAuthMiddleware';

const { signup } = useAuth();
const { loading, error: authError } = useAuthStore();
const { guestOnly } = useAuthMiddleware();

onMounted(() => {
  guestOnly();
});

const name = ref('');
const username = ref('');
const email = ref('');
const location = ref('');
const phone = ref('');

const errors = ref({
  name: null,
  username: null,
  email: null,
  location: null,
  phone: null
});

const validationStatus = ref({
  name: false,
  username: false,
  email: false,
  location: false,
  phone: false
});

const signupSchema = z.object({
  name: z.string()
    .min(4, 'Name must be at least 4 characters')
    .max(50, 'Name is too long')
    .regex(/^[a-zA-Z\s]+$/, 'Name must contain only letters'),

  username: z.string()
    .min(4, 'Username must be at least 4 characters')
    .max(20, 'Username is too long')
    .regex(/^(?!\d+$)[a-zA-Z0-9_]+$/, 'Username must contain at least one letter'),

  email: z.string()
    .email('Please enter a valid email address')
    .min(5, 'Email must be at least 5 characters')
    .max(50, 'Email must be at most 50 characters'),

  location: z.string()
    .min(2, 'Location must be at least 2 characters')
    .max(100, 'Location is too long'),

  phone: z.string()
    .regex(/^\+?\d{10,15}$/, 'Phone number is invalid')
});

const validateField = (field) => {
  const value = eval(field).value;
  if (!value || value.trim() === '') {
    errors.value[field] = null;
    validationStatus.value[field] = false;
    return;
  }
  try {
    signupSchema.pick({ [field]: true }).parse({ [field]: value });
    errors.value[field] = null;
    validationStatus.value[field] = true;
  } catch (error) {
    if (error instanceof z.ZodError) {
      errors.value[field] = error.errors[0].message;
      validationStatus.value[field] = true;
    }
  }
};

const clearValidation = (field) => {
  errors.value[field] = null;
  validationStatus.value[field] = false;
};

const isFormValid = computed(() => {
  const allFieldsFilled =
    name.value.trim().length > 0 &&
    username.value.trim().length > 0 &&
    email.value.trim().length > 0 &&
    location.value.trim().length > 0 &&
    phone.value.trim().length > 0;

  const noErrorsExist = Object.values(errors.value).every((error) => !error);

  return allFieldsFilled && noErrorsExist;
});

const handleSubmit = async () => {
  errors.value = {};

  try {
    const validatedData = signupSchema.parse({
      name: name.value,
      username: username.value,
      email: email.value,
      location: location.value,
      phone: phone.value
    });

    await signup(validatedData);
  } catch (error) {
    if (error instanceof z.ZodError) {
      error.errors.forEach((err) => {
        errors.value[err.path[0]] = err.message;
      });
    }
  }
};
</script>
