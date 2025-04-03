

<template>
  <div
    class="w-full flex lg:flex-row flex-col lg:justify-between justify-start lg:gap-10 gap-6 items-start pt-10 pb-10"
  >
    <!-- product photo -->
    <ProductGalllery />
    
    <!-- product info -->
    <div
      class="lg:w-100 w-80 inline-flex flex-col justify-start items-start gap-4"
    >
      <div
        class="w-full lg:border-b-2 border-b-1 border-red-800 lg:gap-4 gap-3 lg:pb-6 pb-5 inline-flex flex-col justify-start items-start"
      >
        <!-- title -->
        <p
          class="self-stretch justify-start text-red-800 lg:text-3xl text-2xl font-bold lg:leading-[48px] leading-10"
        >
          Eclipse Vision
        </p>
        <!-- model selection -->
        <select
          placeholder="Choose the model you want"
          class="w-full cursor-pointer text-red-800 lg:px-6 px-5 lg:py-3.5 py-3 bg-yellow-50 lg:rounded-2xl rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-red-800 inline-flex justify-between items-center"
        >
          <option value="" disabled selected hidden>
            Choose the model you want
          </option>
          <option value="1">text-1</option>
          <option value="2">text-2</option>
          <option value="3">text-3</option>
        </select>
        <!-- type -->
        <ProductInfo title="Type"
          ><InfoButton info="type1" />
          <InfoButton info="type2" />
          <InfoButton info="type3" />
          <InfoButton info="type4" />
        </ProductInfo>
        <!-- size -->
        <ProductInfo title="Size"
          ><InfoButton info="small" />
          <InfoButton info="large" />
          <InfoButton info="small" />
          <InfoButton info="large" />
        </ProductInfo>
        <!-- color -->
        <ProductInfo title="Color">
          <ProductColor color="red-800" />
          <ProductColor color="yellow-50" />
          <ProductColor color="red-200" />
        </ProductInfo>
      </div>
      <!-- price / button -->
      <ProductAddToCart/>
      
    </div>
  </div>
</template>
