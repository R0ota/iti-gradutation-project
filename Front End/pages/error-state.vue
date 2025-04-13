
<template>
    <div class="h-screen w-full flex items-center justify-center">
        <div class="flex flex-col gp-4 items-center justify-center">
            <img src="/images/404.png" class="w-55 h-55">
            <div class="flex flex-col items-center justify-center gap-1">
                <p class="text-black text-xl font-medium font-['Poppins']">Oops! Page Not Found</p>
                <NuxtLink 
                to="/market"
                class="text-red-900 text-xl font-bold font-['Poppins'] cursor-pointer">Back to Marketplace</NuxtLink>
            </div>
        </div>

    </div>
</template>