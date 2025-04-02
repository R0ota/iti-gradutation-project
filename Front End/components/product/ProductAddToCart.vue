<template>
  <div>
    <!-- Price display -->
    <div class="text-2xl font-bold text-blue-700 mb-4">
      ${{ price.toFixed(2) }}
    </div>

    <!-- Add to cart button -->
    <button
      @click="$emit('addToCart')"
      class="bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 transition-colors w-full flex items-center justify-center gap-2"
      :disabled="!inStock"
      :class="{ 'opacity-50 cursor-not-allowed': !inStock }"
    >
      <Icon
        name="mdi:cart-plus"
        class="h-5 w-5"
      />
      Add to Cart
    </button>

    <!-- Added to cart message -->
    <div
      v-if="showMessage"
      class="mt-4 p-2 bg-green-100 text-green-800 rounded-md text-center"
    >
      Added to cart successfully!
    </div>
  </div>
</template>

<script setup>
defineProps({
  price: {
    type: Number,
    required: true
  },
  inStock: {
    type: Boolean,
    default: true
  },
  showMessage: {
    type: Boolean,
    default: false
  }
});

defineEmits(['addToCart']);
</script>
