<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <!-- Product Gallery -->
      <ProductGallery
        :product="currentProduct"
        :selected-color="selectedColor"
        @image-selected="onImageSelected"
      />

      <!-- Product info container -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <!-- Basic product info -->
        <ProductInfo
          :product="currentProduct"
          :is-in-wishlist="isInWishlist"
          :in-stock="currentItemInStock"
          @toggle-wishlist="toggleWishlist"
        />

        <!-- Product options -->
        <div class="mb-6">
          <h3 class="text-lg font-medium mb-2">Colors</h3>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="color in currentProduct.colors"
              :key="color.color"
              @click="selectedColor = color"
              :class="[
                'border rounded-md p-2 transition',
                selectedColor && selectedColor.color === color.color
                  ? 'border-blue-500 ring-2 ring-blue-200'
                  : 'border-gray-300 hover:border-gray-500'
              ]"
              :disabled="color.stock <= 0"
            >
              <div class="flex items-center">
                <div
                  class="w-5 h-5 rounded-full mr-2"
                  :style="{ backgroundColor: color.color }"
                ></div>
                <span>{{ color.color }}</span>
                <span
                  v-if="color.stock <= 0"
                  class="text-xs text-red-500 ml-1"
                >(Out of stock)</span>
              </div>
            </button>
          </div>
        </div>

        <!-- Quantity selector -->
        <ProductQuantity
          v-model="quantity"
          :in-stock="currentItemInStock"
          :max-quantity="selectedColor ? selectedColor.stock : 0"
        />

        <!-- Add to cart -->
        <ProductAddToCart
          :price="currentProduct.price"
          :in-stock="currentItemInStock"
          :show-message="showAddedMessage"
          @add-to-cart="addToCart"
        />
      </div>
    </div>

    <!-- Product features -->
    <ProductFeatures :features="currentProduct.features || [currentProduct.description, currentProduct.category]" />
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useCartStore } from '~/stores/cart';
import { useWishlistStore } from '~/stores/wishlist';

const props = defineProps({
  product: {
    type: Object,
    required: true
  },
  isInWishlist: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['toggle-wishlist']);

const wishlistStore = useWishlistStore();
const cartStore = useCartStore();

// States
const quantity = ref(1);
const showAddedMessage = ref(false);
const selectedColor = ref(null);
const selectedImage = ref('');

// Computed property for current product with fallback to dummy object
const currentProduct = computed(() => {
  return props.product || {
    name: '',
    price: 0,
    SKU: '',
    category: '',
    description: '',
    colors: []
  };
});

// Check if the current configuration is in stock
const currentItemInStock = computed(() => {
  if (!currentProduct.value) return false;

  // Check if there's a selected color and it has stock
  if (selectedColor.value) {
    return selectedColor.value.stock > 0;
  }

  // If no color is selected, check if any color has stock
  return currentProduct.value.colors.some(color => color.stock > 0);
});

// Get available images based on selected color
const availableImages = computed(() => {
  if (selectedColor.value && selectedColor.value.images && selectedColor.value.images.length > 0) {
    return selectedColor.value.images;
  }

  // Default: try to get featured image from first color with images
  for (const color of currentProduct.value.colors) {
    if (color.images && color.images.length > 0) {
      return color.images;
    }
  }

  return [];
});

// Handle image selection from gallery
const onImageSelected = (image) => {
  selectedImage.value = image;
};

// Toggle product in wishlist
const toggleWishlist = () => {
  emit('toggle-wishlist');
};

// Add to cart function
const addToCart = () => {
  if (!currentProduct.value || !currentItemInStock.value) return;

  const selectedOptions = {};
  if (selectedColor.value) selectedOptions.color = selectedColor.value.color;

  const cartItem = {
    id: currentProduct.value._id, // MongoDB uses _id
    name: currentProduct.value.name,
    price: currentProduct.value.price,
    image: selectedImage.value ||
      (availableImages.value.length > 0 ? availableImages.value[0].url : ''),
    quantity: quantity.value,
    options: selectedOptions,
    SKU: currentProduct.value.SKU
  };

  cartStore.addItem(cartItem, quantity.value);

  showAddedMessage.value = true;

  setTimeout(() => {
    showAddedMessage.value = false;
  }, 3000);
};

// Initialize default selected color when product changes
watch(() => currentProduct.value, () => {
  if (currentProduct.value && currentProduct.value.colors?.length > 0) {
    // Find first color with stock
    const firstAvailableColor = currentProduct.value.colors.find(color => color.stock > 0);
    selectedColor.value = firstAvailableColor || currentProduct.value.colors[0];
  } else {
    selectedColor.value = null;
  }

  quantity.value = 1;
  showAddedMessage.value = false;
}, { immediate: true });
</script>
