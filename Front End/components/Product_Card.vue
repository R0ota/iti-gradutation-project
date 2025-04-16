<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "Unknown",
  },
  description: {
    type: String,
    default: "No description available.",
  },
  price: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    default: "/placeholder-image.png", // Provide a default placeholder image
  },
  currency: {
    type: String,
    default: "EGP",
  },
});

import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCartStore } from '~/stores/cart';
import { useWishlistStore } from '~/stores/wishlist';

const router = useRouter();
const wishlistStore = useWishlistStore();
const cartStore = useCartStore();

const isFavorite = computed(() => wishlistStore.isInWishlist(props.id));
const isInCart = computed(() => cartStore.isInCart(props.id));
const showAddedMessage = ref(false);

const toggleFavorite = (e) => {
  e.stopPropagation();

  if (isFavorite.value) {
    wishlistStore.removeFromWishlist(props.id);
  } else {
    const product = {
      id: props.id,
      name: props.name,
      type: props.type,
      price: props.price,
      image: props.image,
      description: props.description,
      currency: props.currency
    };

    wishlistStore.addToWishlist(product);
  }
};

const addToCart = (e) => {
  e.stopPropagation();
  cartStore.addItem({ ...props, quantity: 1, SKU: props.id }, 1);
  showAddedMessage.value = true;
  setTimeout(() => (showAddedMessage.value = false), 2000);
};

const navigateToProduct = (productId) => {
  router.push(`/market-products/${productId}`);
  router.push(`/market-products/${productId}`);
};

const removeFromCart = (e) => {
  e.stopPropagation();
  cartStore.removeItem(props.id);
  showAddedMessage.value = true;
  setTimeout(() => (showAddedMessage.value = false), 2000);
};
</script>

<template>
  <div
    class="flex flex-col items-center justify-center lg:gap-2 gap-1.5 cursor-pointer group"
    @click="navigateToProduct(id)"
  >
    <div
      class="relative lg:w-64 w-42 lg:h-64 h-40 lg:rounded-[42.35px] bg-[#D9D9D9] flex-shrink-0 aspect-square 
         rounded-3xl"
    >
      <!-- Favorite Icon -->
      <div class="group">
        <!-- ❤️ Filled -->
        <div
          v-if="isFavorite"
          @click="toggleFavorite($event)"
          class="lg:w-8 w-6 lg:h-8 h-6 bg-orange-100 group-hover:bg-red-900 group-hover:rounded-[50px] rounded-[9.53px] flex items-center justify-center z-10 absolute pointer-events-auto lg:top-3 lg:right-3 top-2 right-2 cursor-pointer outline-1 outline-offset-[-1px] outline-red-800 transition-all duration-300"
        >
          <i
            class="fa-solid fa-heart fill text-[#A31D1D] group-hover:text-orange-100"
          />
        </div>

        <!-- 🤍 Empty -->
        <div
          v-else
          @click="toggleFavorite($event)"
          class="lg:w-8 w-6 lg:h-8 h-6 bg-white rounded-[9.53px] flex items-center justify-center group-hover:rounded-[50px] group-hover:bg-red-800 z-10 absolute pointer-events-auto lg:top-4 lg:right-3.5 top-2 right-2 cursor-pointer transition-all duration-300"
        >
          <i
            class="fa-regular fa-heart fill text-red-900 group-hover:text-orange-100"
          />
        </div>
      </div>

      <img
        :src="image"
        class="lg:w-64 w-42 lg:h-64 h-40 lg:rounded-[40px] rounded-[25.197px] "
      />

      <!-- message notification -->
      <div
        v-if="showAddedMessage"
        class="message-notification absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-2 py-1 rounded-full text-xs lg:text-sm animate-fade-in-out"
      >
        {{ isInCart ? 'Added to cart!' : 'Removed from cart!' }}
      </div>
    </div>

    <div
      class="flex flex-col items-start lg:gap-2 gap-1.5 self-stretch px-1 lg:w-64 w-44"
    >
      <div class="flex flex-col  gap-0.5 justify-start items-start">
        <p
          class="lg:text-xl lg:tracking-[-0.342px] font-bold leading-7 text-xs  text-red-900 "
        >
          {{ name }}
        </p>
        <p
          class="lg:text-sm text-[9.53px] text-black font-medium leading-[150%] lg:tracking-[-0.266px] tracking-[-0.191] "
        >
          {{ description }}
        </p>
      </div>

      <div class="flex gap-2 items-center justify-between w-full">
        <p
          class="lg:min-w-2.5 lg:text-xl lg:tracking-[-0.342px] text-black font-semibold leading-7 text-xs tracking-[-0.215px] mt-auto font-['Poppins']"
        >
          {{ price }} {{ currency }}
        </p>

        <div class="relative">
          <div
            v-if="isInCart"
            @click="removeFromCart($event)"
            class="lg:w-8 w-6 lg:h-8 h-6 lg:rounded-xl rounded-lg bg-red-900 p-[3.29px] flex items-center justify-center transition-all duration-300 cursor-pointer"
          >
            <img
              src="../assets/cart-shopping-white.svg"
              class="w-4 h-4 lg:w-6 lg:h-5"
            />
          </div>
          <div
            v-else
            @click="addToCart($event)"
            class="lg:w-8 w-6 lg:h-8 h-6 lg:rounded-xl rounded-lg bg-red-900 p-[3.29px] flex items-center justify-center transition-all duration-300 cursor-pointer"
          >
            <img
              src="../assets/cart-shopping-stroke.svg"
              class="w-4 h-4 lg:w-6 lg:h-5"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.animate-fade-in-out {
  animation: fadeInOut 2s ease-in-out;
}

@keyframes fadeInOut {

  0%,
  100% {
    opacity: 0;
  }

  10%,
  90% {
    opacity: 1;
  }
}

.message-notification {
  width: max-content;
}
</style>
