<template>
  <div
    class="landing-page space-y-16 px-4 py-8 lg:ml=[125px] ml-[50px] lg:mr=[125px] mr-[50px]"
  >
    <!-- Tabi Section -->
    <section class="tabi-section text-center space-y-4">
      <h1 class="text-4xl font-bold">Tabi</h1>
      <p class="text-lg leading-relaxed">
        Turn your ideas into unique products with us! We offer printing services
        on a wide range of products with exceptional quality and custom designs
        that suit your taste.
      </p>
      <div class="tabi-image-container">
        <img
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
          alt="Tabi Shirt"
          class="mx-auto rounded-lg shadow-lg"
        />
      </div>
    </section>

    <!-- Market Section -->
    <section class="market-section text-center space-y-4">
      <h2 class="text-3xl font-semibold">Market</h2>
      <p class="text-lg leading-relaxed">
        Welcome to the market, the place where creativity and quality come
        together in one spot! Here, you can explore a diverse range of unique
        products designed and printed with the highest quality. Whether you're
        looking for a special gift, a piece that reflects your personality, or a
        customized product for your brand, we've got you covered.
      </p>
      <NuxtLink
        to="/market"
        class="inline-block mt-4 px-6 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800"
      >
        Go to Market
      </NuxtLink>
      <div class="market-images grid grid-cols-2 md:grid-cols-4 gap-4">
        <img
          src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
          alt="Market Item 1"
          class="rounded-lg shadow-md"
        />
        <img
          src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
          alt="Market Item 2"
          class="rounded-lg shadow-md"
        />
        <img
          src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
          alt="Market Item 3"
          class="rounded-lg shadow-md"
        />
        <img
          src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
          alt="Market Item 4"
          class="rounded-lg shadow-md"
        />
      </div>
    </section>

    <!-- Our Products Section -->
    <section class="products-section text-center space-y-4">
      <h2 class="text-3xl font-semibold">Our Products</h2>
      <p class="text-lg leading-relaxed">
        On our website, we offer you a unique collection of high-quality printed
        products with exceptional designs that reflect your personal taste.
        Whether you're looking for stylish clothing, unique mugs, artistic
        prints, or trendy accessories, we provide products made with love,
        featuring long-lasting prints and vibrant colors.
      </p>
      <NuxtLink
        to="/market-products"
        class="inline-block mt-4 px-6 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800"
      >
        Go to products
      </NuxtLink>
      <div class="products-images grid grid-cols-1 md:grid-cols-3 gap-4">
        <img
          src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
          alt="Product 1"
          class="rounded-lg shadow-md"
        />
        <img
          src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
          alt="Product 2"
          class="rounded-lg shadow-md"
        />
        <img
          src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
          alt="Product 3"
          class="rounded-lg shadow-md"
        />
      </div>
    </section>
  </div>
</template>
