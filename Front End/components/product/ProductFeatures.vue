<template>
  <div class="mt-16">
    <div class="border-b border-gray-200 mb-8">
      <div class="flex flex-wrap gap-8">
        <div
          class="text-lg font-medium pb-4 border-b-2 border-blue-600 text-blue-600"
          aria-current="true"
        >
          Product Features
        </div>
      </div>
    </div>

    <div>
      <ul class="space-y-3">
        <li
          v-for="(feature, index) in features"
          :key="index"
          class="flex items-start"
        >
          <svg
            class="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="text-gray-700">{{ feature }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  features: {
    type: Array,
    required: true
  }
});
</script>
