<script setup>
    defineProps({
  name: String,
  type: String,
  price:Number,
  image : String,
});
</script>

<template>
    <div class="flex flex-col items-center lg:gap-[8px] gap-[5.039px] ">
        <div class="relative lg:w-[254px] lg:h-[254px] lg:rounded-[40px] cursor-pointer bg-[#D9D9D9] flex-shrink-0 aspect-square w-[160px] h-[160px] rounded-[25.197px]">
            <svg class="absolute top-4 right-4 " xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <g filter="url(#filter0_d_477_6191)" >
            <rect x="4" y="4" width="32" height="32" rx="16" fill="white"/>
            <path d="M18.8203 28.5758L18.7227 28.486L11.8789 22.1305C10.6797 21.0172 10 19.4547 10 17.818V17.6891C10 14.9391 11.9531 12.5797 14.6562 12.0641C16.1953 11.7672 17.7695 12.1227 19.0234 13.0055C19.375 13.2555 19.7031 13.5446 20 13.8766C20.1641 13.6891 20.3398 13.5172 20.5273 13.3571C20.6719 13.2321 20.8203 13.1149 20.9766 13.0055C22.2305 12.1227 23.8047 11.7672 25.3438 12.0602C28.0469 12.5758 30 14.9391 30 17.6891V17.818C30 19.4547 29.3203 21.0172 28.1211 22.1305L21.2773 28.486L21.1797 28.5758C20.8594 28.8727 20.4375 29.0407 20 29.0407C19.5625 29.0407 19.1406 28.8766 18.8203 28.5758ZM19.3398 15.9508C19.3242 15.9391 19.3125 15.9235 19.3008 15.9078L18.6055 15.1266L18.6016 15.1227C17.6992 14.111 16.3359 13.65 15.0078 13.9039C13.1875 14.2516 11.875 15.8375 11.875 17.6891V17.818C11.875 18.9313 12.3398 19.9977 13.1562 20.7555L20 27.111L26.8438 20.7555C27.6602 19.9977 28.125 18.9313 28.125 17.818V17.6891C28.125 15.8414 26.8125 14.2516 24.9961 13.9039C23.668 13.65 22.3008 14.1149 21.4023 15.1227C21.4023 15.1227 21.4023 15.1227 21.3984 15.1266C21.3945 15.1305 21.3984 15.1266 21.3945 15.1305L20.6992 15.9118C20.6875 15.9274 20.6719 15.9391 20.6602 15.9547C20.4844 16.1305 20.2461 16.2282 20 16.2282C19.7539 16.2282 19.5156 16.1305 19.3398 15.9547V15.9508Z" fill="black"/>
            </g>
            <defs>
            <filter id="filter0_d_477_6191" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_477_6191"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_477_6191" result="shape"/>
            </filter>
            </defs>
            </svg>

            <img :src="image" class="lg:w-[254px] lg:h-[254px] lg:rounded-[40px] w-[160px] h-[160px] rounded-[25.197px] hover:opacity-[0.5]">
        </div>
        
        <div class="flex flex-col items-start lg:gap-[2px] self-stretch">
            <p class="text-right font-poppins lg:text-[18px] lg:tracking-[-0.342px] font-bold leading-[150%] text-[11.339px] tracking-[-0.215px]">
                {{ name }}
            </p>
            <p class="text-right font-poppins lg:text-[14px] text-[10px] font-medium leading-[150%] lg:tracking-[-0.266px] tracking-[-0.191] text-[#646464] ">
                {{ type }}
            </p>
            <p class="text-right font-poppins lg:text-[18px] lg:tracking-[-0.342px] font-bold leading-[150%] text-[11.339px] tracking-[-0.215px]">
                {{ price }}
            </p>
        </div>    
    </div>
</template>

