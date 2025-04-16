<script setup>
import { AdminInputData } from "#components";
import { ref, computed } from "vue";
definePageMeta({
    layout: "admin",
});

const sizeInput = `<div class="flex flex-row gap-10 w-full"><div class="flex flex-col gap-0.5 w-full"><label for="input" class="px-2 text-red-900 text-xl font-[Poppins] font-medium"></label><input type="text" id="input" placeholder="e.g. S, M, L, XL" class="px-4 py-3 flex items-start text-stone-900 text-lg font-medium font-[Poppins] placeholder:text-stone-900/75 placeholder:text-lg placeholder:font-medium placholder:font-[Poppins] bg-yellow-50 rounded-2xl outline-1 outline-offset-[-1px] outline-red-900 self-stretch w-full"></div><img src="/_nuxt/assets/minus-solid.svg" alt="" onclick="this.parentNode.remove();"></div>`
const colorInput = `<div class="flex flex-row w-full items-center gap-5"><div class="flex flex-col gap-0.5 w-full"><label for="input" class="px-2 text-red-900 text-xl font-[Poppins] font-medium"></label><input type="text" id="input" placeholder="e.g. Red, Blue, Green" class="px-4 py-3 flex items-start text-stone-900 text-lg font-medium font-[Poppins] placeholder:text-stone-900/75 placeholder:text-lg placeholder:font-medium placholder:font-[Poppins] bg-yellow-50 rounded-2xl outline-1 outline-offset-[-1px] outline-red-900 self-stretch w-full"></div><span class="text-black w-full text-right"><div class="relative inline-block group"><!-- The text --><span class="text-black cursor-pointer">Image Link</span><!-- The image (hidden by default, shown on hover) --><img src="https://placehold.co/600x400/orange/white" alt="Preview" class="absolute left-0 mt-2 w-40 h-auto rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div></span><img src="/_nuxt/assets/minus-solid.svg" alt="" onclick="this.parentNode.remove();"></div>`
const addSize = () => {
    document.getElementById("size").innerHTML += sizeInput;
    console.log(document.getElementById("size"));

}
const addColor = () => {
    document.getElementById("color").innerHTML += colorInput;
    console.log(document.getElementById("color"));

}


// import { useProductStore } from "@/stores/products";
const inputClasses =
    "px-4 py-3 flex items-start text-stone-900 text-lg font-medium font-[Poppins] placeholder:text-stone-900/75 placeholder:text-lg placeholder:font-medium placholder:font-[Poppins] bg-yellow-50 rounded-2xl outline-1 outline-offset-[-1px] outline-red-800 self-stretch w-full";
const labelCasses = "px-2 text-red-900 text-xl font-[Poppins] font-medium";
</script>

<template>
    <div class="flex justify-between items-center m-[30px]  w-[77%]">
        <!-- form data -->
        <form class="flex flex-row items-start justify-start flex-1 gap-8">
            <div class="flex flex-col gap-4 items-start justify-start w-full">
                <!-- design title -->
                <AdminInputData label="Product Name" placeholder="e.g.Urban Explorer Bomber Jacket" v-model="title" />
                <!-- description -->
                <div class="flex flex-col gap-0.5 w-full">
                    <label for="description" :class="labelCasses">Description</label>
                    <textarea v-model="description" id="description"
                        placeholder="e.g. A digital artwork inspired by abstract painting" :class="inputClasses"
                        class="h-32"></textarea>
                </div>
                <!-- image upload -->
                <div class="flex flex-row justify-between gap-0.5 w-full">
                    <h2 class="text-black font-bold text-xl">Product Images</h2>
                    <button @click.prevent="saveDesign"
                        class="text-yellow-50 text-lg font-semibold font-['Poppins'] cursor-pointer px-4 py-1.5 bg-red-900 rounded-xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
                        Upload
                    </button>

                </div>
                
                <div class="flex items-center justify-between gap-0.5 w-full">
                    <div class="relative inline-block group">
                                    <!-- The text -->
                                    <span class="text-black cursor-pointer text-base font-medium font-['Poppins'] leading-normal">Image Link</span>

                                    <!-- The image (hidden by default, shown on hover) -->
                                    <img src="https://placehold.co/600x400/orange/white" alt="Preview"
                                        class="absolute left-0 mt-2 w-40 h-auto rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                </div>
                                <img src="../../../assets/remove.svg" alt="" class="cursor-pointer" onclick="this.parentNode.remove();">

                </div>
                <!-- category -->
                <div class="flex flex-col gap-0.5 w-full">
                    <label for="input" :class="labelCasses">Category</label>
                    <select v-model="category" placeholder="select product category" :class="inputClasses" class="">
                        <option value="" disabled selected hidden>
                            Select Design Category
                        </option>
                        <option value="Digital Art">Digital Art</option>
                        <option value="Typography & Calligraphy">
                            Typography & Calligraphy
                        </option>
                        <option value="Design Category">Design Category</option>
                    </select>
                </div>

                <!-- subcategory -->
                <div class="flex flex-col gap-0.5 w-full">
                    <label for="input" :class="labelCasses">Subcategory</label>
                    <select v-model="subcategory" placeholder="select product category" :class="inputClasses" class="">
                        <option value="" disabled selected hidden>
                            Select Design Category
                        </option>
                        <option value="Digital Art">Digital Art</option>
                        <option value="Typography & Calligraphy">
                            Typography & Calligraphy
                        </option>
                        <option value="Design Category">Design Category</option>
                    </select>
                </div>
                 <!-- price -->
                 <AdminInputData label="Price" placeholder="100.00 EGP" v-model="price" />
                <!-- <h2 class="text-black font-bold text-xl">Price Range</h2> -->
            <!-- design price range -->
             <label for="Price Range" class="text-black font-semibold font-['Poppins'] leading-relaxed">Design Price Range</label>
                <div class="flex flex-row  gap-1 w-full">
                    <AdminInputData label="Min Price" placeholder="100.00 EGP" v-model="minPrice" />

                    <AdminInputData label="Max Price" placeholder="300.00 EGP" v-model="maxPrice" />
                </div>

                <!-- action btns -->
                <div class="flex justify-end gap-4 w-full">
                    <button
                        class="text-red-900 text-lg font-semibold font-['Poppins'] cursor-pointer px-4 py-1.5 bg-white rounded-xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] outline-[1.50px] outline-offset-[-1.50px] outline-red-900">
                        Cancel
                    </button>
                    <button @click.prevent="saveDesign"
                        class="text-yellow-50 text-lg font-semibold font-['Poppins'] cursor-pointer px-4 py-1.5 bg-red-900 rounded-xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
                        Save
                    </button>
                </div>

            </div>

            <div class="flex flex-col gap-3 w-full">
               
                <!-- size -->
                <div class="flex flex-col gap-2 w-full">
                    <div class="flex flex-row justify-between w-full">
                        <label for="input" :class="labelCasses">Size</label>
                        <div class="flex flex-row gap-2 items-center">
                            <img src="../../../assets/CheckChoice.svg" class=" size-5" alt="">
                            <label for="size" class="text-black text-base font-medium font-['Poppins'] leading-normal" >Choice</label>
                        </div>
                    </div>
                   
                    <div id="size" class="flex flex-col gap-1 w-full justify-center">
                        
                    </div>
                    <div class="flex flex-row gap-2 w-full" @click="addSize">
                        <img src="../../../assets/add.svg" alt=""><span class=" text-black text-[16px]">Attribute</span>
                    </div>
                </div>
                <!-- color -->
                <div class="flex flex-col gap-0.5 w-full">
                   
                    <div class="flex flex-row justify-between w-full">
                        <label for="input" :class="labelCasses">Color</label>
                        <div class="flex flex-row gap-2 items-center">
                            <img src="../../../assets/image.svg" class=" size-5" alt="">
                            <label for="size" class="text-black text-base font-medium font-['Poppins'] leading-normal" >Image</label>
                        </div>
                    </div>
                    
                    <div id="color" class="flex flex-col gap-2 w-full justify-center">
                        
                    </div>
                    <div class="flex flex-row gap-2 w-full" @click="addColor">
                        <img src="../../../assets/add.svg" alt=""><span class=" text-black text-[16px]">Attribute</span>
                    </div>
                </div>

                <!-- image -->
                <!-- <input 
    type="file" 
    name="image" 
    accept="image/*" 
    class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
    multiple
  > -->
                

            </div>
        </form>
    </div>
</template>



