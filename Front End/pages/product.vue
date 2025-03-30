<script setup>
definePageMeta({
  layout: "market",
});
</script>

<template>
  <div
    class="inline-flex flex-col justify-start items-center lg:ml-[115px] lg:mr-[115px]"
  >
    <div class="flex flex-row justify-between items-start pt-10 pb-20 gap-32">
      <div class="inline-flex justify-start items-start gap-6">
        <div class="w-20 inline-flex flex-col gap-5">
          <img src="../public/images/image.png" class="h-20 w-20 rounded-3xl" />
          <img src="../public/images/image.png" class="h-20 w-20 rounded-3xl" />
          <img
            src="../public/images/image.png"
            class="self-stretch h-20 w-20 rounded-3xl"
          />
        </div>
        <img
          src="../public/images/image.png"
          class="w-96 bg-gray-300 self-stretch rounded-[40px]"
        />
      </div>
      <div class="w-96 inline-flex flex-col justify-start items-start gap-8">
        <p
          class="self-stretch justify-start text-red-800 text-3xl font-bold leading-[48px]"
        >
          Eclipse Vision
        </p>
        <select
          placeholder="Choose the model you want"
          class="w-full cursor-pointer text-red-800 px-6 py-3.5 bg-yellow-50 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-red-800 inline-flex justify-between items-center"
        >
          <option value="" disabled selected hidden>
            Choose the model you want
          </option>
          <option value="1">text-1</option>
          <option value="2">text-2</option>
          <option value="3">text-3</option>
        </select>
        <ProductInfo title="Type"
          ><InfoButton info="type1" />
          <InfoButton info="type2" />
          <InfoButton info="type3" />
          <InfoButton info="type4"/>
        </ProductInfo>

        <ProductInfo title="Size"
          ><InfoButton info="size1" />
          <InfoButton info="size2" />
          <InfoButton info="size3" />
          <InfoButton info="size4"/>
        </ProductInfo>

        <ProductInfo title="Color">
            <ProductColor color="red-800"/>
            <ProductColor color="blue-800"/>
        </ProductInfo>
      </div>
    </div>
  </div>
</template>
