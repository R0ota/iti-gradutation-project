<template>
  <div>
    <div class="flex justify-between items-start">
      <h1 class="text-3xl font-bold mb-2">{{ product.name }}</h1>
      <button
        @click.stop="toggleWishlist"
        class="wishlist-btn"
        :class="{ 'wishlist-active': isWishlisted }"
        aria-label="Add to wishlist"
      >
        <span class="heart-icon text-2xl">
          {{ isWishlisted ? '❤️' : '🤍' }}
        </span>
      </button>
    </div>

    <p class="text-gray-700 mb-6">{{ product.description }}</p>

    <!-- Stock status -->
    <div class="mb-6">
      <span
        :class="inStock ? 'text-green-600' : 'text-red-600'"
        class="font-semibold"
      >
        {{ inStock ? 'In Stock' : 'Out of Stock' }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { useWishlistStore } from '~/stores/wishlist';

const props = defineProps({
  product: {
    type: Object,
    required: true
  },
  inStock: {
    type: Boolean,
    default: true
  }
});

const wishlistStore = useWishlistStore();

const isWishlisted = computed(() => wishlistStore.isInWishlist(props.product.id));


const toggleWishlist = () => {
  if (isWishlisted.value) {
    wishlistStore.removeFromWishlist(props.product.id);
  } else {
    wishlistStore.addToWishlist(props.product);
  }
};
</script>

<style scoped>
.wishlist-btn {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.wishlist-btn:hover {
  transform: scale(1.1);
  background-color: rgba(255, 255, 255, 0.9);
}

.wishlist-active {
  background-color: rgba(255, 229, 229, 0.9);
}

.heart-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}
</style>
