<template>
  <div class="flex flex-row-reverse gap-4">
    <!-- Main image -->
    <div class="bg-white rounded-lg shadow-md overflow-hidden h-96 flex-grow">
      <img
        :src="selectedImage"
        :alt="product.name"
        class="w-full h-full object-contain"
      />
    </div>

    <!-- Thumbnail gallery - vertical -->
    <div
      v-if="productImages.length > 0"
      class="flex flex-col space-y-2 overflow-y-auto py-2 max-h-96 w-20"
    >
      <button
        v-for="(image, index) in productImages"
        :key="index"
        @click="selectImage(index)"
        class="flex-shrink-0 w-16 h-16 border-2 rounded-md overflow-hidden transition-all duration-200 ease-in-out"
        :class="selectedImageIndex === index ? 'border-blue-500' : 'border-gray-200'"
      >
        <img
          :src="image"
          :alt="`${product.name} - Image ${index + 1}`"
          class="w-full h-full object-cover"
        >
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['imageSelected']);

const selectedImageIndex = ref(0);

// Computed property to handle nested product images
const productImages = computed(() => {
  if (!props.product) return [];

  // Check for images in product.colors structure
  if (props.product.colors?.[0]?.images?.length > 0) {
    return props.product.colors[0].images.map(img => img.url);
  }

  // Fallback to original image property
  if (props.product.images && props.product.images.length > 0) {
    return props.product.images;
  }

  // Fallback to single image if available
  if (props.product.image) {
    return [props.product.image];
  }

  return [];
});

// Get the selected image
const selectedImage = computed(() => {
  if (productImages.value.length > 0) {
    return productImages.value[selectedImageIndex.value];
  }
  return '';
});

// Reset selected image when product changes
watch(() => props.product, () => {
  selectedImageIndex.value = 0;
}, { immediate: true });

// Method to select an image
const selectImage = (index) => {
  selectedImageIndex.value = index;
  emit('imageSelected', productImages.value[index]);
};
</script>

<style scoped>
/* Added styles for vertical thumbnails */
.flex-row-reverse {
  display: flex;
  flex-direction: row-reverse;
}

@media (max-width: 768px) {
  .flex-row-reverse {
    flex-direction: column;
  }

  div[class^="flex flex-col space-y-2"] {
    flex-direction: row;
    max-height: none;
    width: 100%;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 2px 0;
  }

  div[class^="flex flex-col space-y-2"] button {
    margin-right: 0.5rem;
    margin-bottom: 0;
  }
}
</style>
