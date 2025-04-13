<script setup>
    definePageMeta({
        layout : 'admin'
    })
</script>
<template>
     <div class="flex justify-between items-center m-[30px] ml-[250px] fixed w-[77%]">
        <div class="flex items-center justify-center flex-1">
            <div class="flex flex-col items-center justify-center gap-4 h-screen">
                <img src="/admin/upload.png">
                <p class="text-black text-base font-semibold font-['Poppins']">Image Link</p>
            </div>
        </div>
        <div class="flex flex-col items-start justify-start flex-1 gap-8">
            <div class="flex flex-col gap-4 items-start justify-start w-full">
                <div class="flex flex-col gap-0.5 w-full">
                    <label for="input" class="px-2 text-red-900 text-xl font-['Poppins'] font-medium ">Design Title</label>
                    <input type="text" id="input" placeholder="e.g.Abstract watercolor poster" class="px-4 py-3 placeholder:text-stone-900/75 placeholder:text-lg placeholder:font-medium placholder:font-['Poppins'] bg-yellow-50 rounded-2xl outline-1 outline-offset-[-1px] outline-red-900 self-stretch w-full">
                </div>
            </div>
        </div>
     </div>
</template>