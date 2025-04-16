<script setup>
definePageMeta({
    layout: "admin",
});
import { AdminInputData } from "#components";
import { ref,computed } from "vue";
const inputClasses =
    "px-4 py-3 flex items-start text-stone-900 text-lg font-medium font-[Poppins] placeholder:text-stone-900/75 placeholder:text-lg placeholder:font-medium placholder:font-[Poppins] bg-yellow-50 rounded-2xl outline-1 outline-offset-[-1px] outline-red-800 self-stretch w-full";
const labelCasses = "px-2 text-red-900 text-xl font-[Poppins] font-medium";

const statusClass = (status) => {
    switch (status) {
        case "Active":
            return "bg-[#CCFFCC] text-[#01D001]";
        case "Suspended":
            return "bg-[#FFBFBC] text-[#D60000] py-1";
    }
};



let subcategory = ref("");
const Property = `<div
                    class="self-stretch px-4 py-2 border-l-8 border-red-800 inline-flex justify-start items-center gap-2">
                    <div class="flex-1 flex justify-center items-center gap-2.5">
                        <div
                            class="flex-1 justify-start text-black text-base font-medium font-['Poppins'] leading-normal">
                            Size</div>
                    </div>
                    <div class="flex justify-start items-center gap-1">
                        <div data-property-1="Choice"
                            class="p-2 bg-stone-300 rounded-lg  outline-[0.50px] outline-offset-[-0.50px] outline-red-800 flex justify-start items-center gap-2">
                            <div class="flex justify-start items-center gap-1">
                                <div class="w-5 h-5 relative">
                                    <div data-outline="Solid" data-status="dot"
                                        class="w-3.5 h-3.5 left-[2.50px] top-[2.50px] absolute overflow-hidden">
                                        <img src="/_nuxt/assets/CheckChoice.svg" alt="">
                                    </div>
                                </div>
                                <div
                                    class="justify-start text-red-800 text-base font-medium font-['Poppins'] leading-normal">
                                    Choice</div>
                            </div>
                            <div class="w-5 h-5 relative">
                                <div data-property-1="angle-down"
                                    class="w-3.5 h-3.5 left-[2.50px] top-[2.50px] absolute overflow-hidden">
                                    <div
                                        class="w-0 h-3 left-[13.13px] top-[5px] absolute origin-top-left rotate-90 bg-red-800">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-property-1="Default" class="w-6 h-6 relative">
                            <div class="w-4 h-4 left-[3px] top-[3px] absolute overflow-hidden" onclick="this.parentNode.parentNode.parentNode.remove()">
                                <img src="/_nuxt/assets/red-remove.svg" alt="" class="cursor-pointer">
                            </div>
                        </div>
                    </div>
                </div>`;


const addProperty = () => {
    document.getElementById("propetylist").innerHTML += Property;
    console.log(document.getElementById("propetylist"));
    
}


</script>


<template>

    <div class="flex justify-between m-[30px] ml-[250px] fixed w-[77%] gap-5">
        <form class="flex flex-col items-start justify-start flex-1 gap-8">
            <!-- Header -->
            <div class="flex items-center justify-between w-full">
                <AdminTitle route="Category" />
                <div class="w-[50%] flex gap-4">
                </div>
            </div>
            <div class="flex flex-col gap-4 items-start justify-start w-full">
                <!-- Category Name -->
                <AdminInputData label="Category Name" placeholder="Home Decor" v-model="input" />
                <!-- upload design -->
                <div class="flex flex-row justify-between gap-0.5 w-full">
                    <h2 class="text-black font-bold text-xl">Category Cover</h2>
                    <button @click.prevent="saveDesign"
                        class="text-yellow-50 text-lg font-semibold font-['Poppins'] cursor-pointer px-4 py-1.5 bg-red-900 rounded-xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
                        Upload
                    </button>

                </div>

                <div class="flex items-center justify-between gap-0.5 w-full">
                    <div class="relative inline-block group">
                        <!-- The text -->
                        <span
                            class="text-black cursor-pointer text-base font-medium font-['Poppins'] leading-normal">Image
                            Link</span>

                        <!-- The image (hidden by default, shown on hover) -->
                        <img src="https://placehold.co/600x400/orange/white" alt="Preview"
                            class="absolute left-0 mt-2 w-40 h-auto hidden rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:inline-block transition-opacity duration-300 z-10">
                    </div>
                    <img src="../../../assets/remove.svg" alt="" class="cursor-pointer"
                        onclick="this.parentNode.remove();">

                </div>
                <!-- Wallpaper -->
                <div data-show-remove="true" data-status="Hover"
                    class="self-stretch p-2 bg-red-800 rounded-xl inline-flex justify-between items-center">
                    <div class="flex justify-start items-center gap-1">
                        <div data-property-1="Default" class="w-8 h-8 relative">
                            <div data-property-1="angle-right"
                                class="w-6 h-6 left-[4px] top-[4px] absolute overflow-hidden">
                                <img src="../../../assets/rightarrow.svg" alt="">
                            </div>
                        </div>
                        <div class="justify-start text-white text-xl font-bold font-['Poppins'] leading-loose">{{ subcategory }}</div>
                    </div>
                    <div data-property-1="Clicked" class="w-8 h-8 relative">
                        <div class="w-6 h-6 left-[4px] top-[4px] absolute overflow-hidden">
                            <img src="../../../assets/minus.svg" alt="">
                        </div>
                    </div>
                </div>

                <div data-show-remove="true" data-status="Default"
                    class="self-stretch p-2 inline-flex justify-between items-center">
                    <div class="flex justify-start items-center gap-1">
                        <div data-property-1="Default" class="w-8 h-8 relative">
                            <div data-property-1="angle-right"
                                class="w-6 h-6 left-[4px] top-[4px] absolute overflow-hidden">
                                <img src="../../../assets/redrightarrow.svg" alt="">
                            </div>
                        </div>
                        <div class="justify-start text-black text-xl font-medium font-['Poppins'] leading-loose">Hoodie
                        </div>
                    </div>
                    <div data-property-1="Default" class="w-8 h-8 relative">
                        <div class="w-6 h-6 left-[4px] top-[4px] absolute overflow-hidden">
                            <img src="../../../assets/minus-solid.svg" alt="">
                        </div>
                    </div>
                </div>

                <!-- add Subcategory -->
                <div data-show-remove="false" data-status="Default"
                    class="p-2 inline-flex justify-start items-center gap-1">
                    <div class="flex justify-start items-center gap-1">
                        <div data-property-1="Default" class="w-8 h-8 relative">
                            <div class="w-6 h-6 left-[4px] top-[4px] absolute overflow-hidden">
                                <img src="../../../assets/plus-solid.svg" alt="">
                            </div>
                        </div>
                        <div class="justify-start text-black text-xl font-medium font-['Poppins'] leading-loose">
                            Subcategory</div>
                    </div>
                </div>


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
        </form>
        <div class="flex flex-col items-start justify-start flex-1 gap-8">
            <!-- Header -->
            <div class="flex items-center justify-between w-full">
                <AdminTitle route="" class=" invisible"/>
            </div>
            <AdminInputData label="Subcategory Name" placeholder="e.g Shirt,Hodie" class="w-full" v-model="subcategory" />

            
            <!-- Property -->
            <div id="propetylist" class="self-stretch rounded-lg inline-flex flex-col justify-start items-start overflow-hidden gap-2">
                <div
                    class="self-stretch px-4 py-2 border-l-8 border-red-800 inline-flex justify-start items-center gap-2">
                    <div class="flex-1 flex justify-center items-center gap-2.5">
                        <div
                            class="flex-1 justify-start text-black text-base font-medium font-['Poppins'] leading-normal">
                            Size</div>
                    </div>
                    <div class="flex justify-start items-center gap-1">
                        <div data-property-1="Choice"
                            class="p-2 bg-stone-300 rounded-lg  outline-[0.50px] outline-offset-[-0.50px] outline-red-800 flex justify-start items-center gap-2">
                            <div class="flex justify-start items-center gap-1">
                                <div class="w-5 h-5 relative">
                                    <div data-outline="Solid" data-status="dot"
                                        class="w-3.5 h-3.5 left-[2.50px] top-[2.50px] absolute overflow-hidden">
                                        <img src="../../../assets/CheckChoice.svg" alt="">
                                    </div>
                                </div>
                                <div
                                    class="justify-start text-red-800 text-base font-medium font-['Poppins'] leading-normal">
                                    Choice</div>
                            </div>
                            <div class="w-5 h-5 relative">
                                <div data-property-1="angle-down"
                                    class="w-3.5 h-3.5 left-[2.50px] top-[2.50px] absolute overflow-hidden">
                                    <div
                                        class="w-0 h-3 left-[13.13px] top-[5px] absolute origin-top-left rotate-90 bg-red-800">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-property-1="Default" class="w-6 h-6 relative">
                            <div class="w-4 h-4 left-[3px] top-[3px] absolute overflow-hidden" onclick="this.parentNode.parentNode.parentNode.remove()">
                                <img src="/_nuxt/assets/red-remove.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- add Subcategory -->
            <div data-show-remove="false" data-status="Default"
                class="p-2 inline-flex justify-start items-center gap-1">
                <div class="flex justify-start items-center gap-1">
                    <div data-property-1="Default" class="w-8 h-8 relative">
                        <div class="w-6 h-6 left-[4px] top-[4px] absolute overflow-hidden" @click="addProperty">
                            <img src="../../../assets/plus-solid.svg" alt="">
                        </div>
                    </div>
                    <div class="justify-start text-black text-xl font-medium font-['Poppins'] leading-loose">
                        Property</div>
                </div>
            </div>

        </div>

    </div>

</template>