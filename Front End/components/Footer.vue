
<template>
    <footer class="w-full px-6 py-14 bg-red-800 flex justify-center gap-6 mt-16 ">
        <div class="w-80 px-4 py-16  flex justify-center items-center gap-2.5">
            <NuxtLink to="/"  class="flex justify-center items-center">
                <img src="../assets/Light_Logo.svg" alt="Logo" class="lg:w-32 w-16" />
            </NuxtLink>
        </div>
        <div class="w-80 flex flex-col justify-start items-start gap-4">
            <div class="px-6 inline-flex flex-col justify-center items-center gap-2.5">
                <p class="justify-start text-red-100 text-xl font-semibold leading-loose">
                    Marketplace
                </p>
            </div>
            <div class="self-stretch flex-col h-12 px-6 py-2 inline-flex justify-start items-start">
                <p class="text-center justify-start text-red-100 text-base font-medium flex hover:h-12 hover:px-2 py-2 
                hover:bg-orange-200 hover:w-full hover:text-red-800 hover:rounded-[32px] transition-all duration-300 cursor-pointer">Mug</p>
                <p class="text-center justify-start text-red-100 text-base font-medium flex hover:h-12 hover:px-2 py-2 
                hover:bg-orange-200 hover:w-full hover:text-red-800 hover:rounded-[32px] transition-all duration-300 cursor-pointer">Home Decoration</p>
                <p class="text-center justify-start text-red-100 text-base font-medium flex hover:h-12 hover:px-2 py-2 
                hover:bg-orange-200 hover:w-full hover:text-red-800 hover:rounded-[32px] transition-all duration-300 cursor-pointer">Clothes</p>
                <p class="text-center justify-start text-red-100 text-base font-medium flex hover:h-12 hover:px-2 py-2 
                hover:bg-orange-200 hover:w-full hover:text-red-800 hover:rounded-[32px] transition-all duration-300 cursor-pointer">Stationery</p>
                <p class="text-center justify-start text-red-100 text-base font-medium flex hover:h-12 hover:px-2 py-2 
                hover:bg-orange-200 hover:w-full hover:text-red-800 hover:rounded-[32px] transition-all duration-300 cursor-pointer">Accessories</p>
                <p class="text-center justify-start text-red-100 text-base font-medium flex hover:h-12 hover:px-2 py-2 
                hover:bg-orange-200 hover:w-full hover:text-red-800 hover:rounded-[32px] transition-all duration-300 cursor-pointer">Art & Design</p>
            </div>  
        </div>

        <div class="w-80 flex flex-col justify-start items-start gap-4">
            <div class="px-6 inline-flex flex-col justify-center items-center ">
                <p class="justify-start text-red-100 text-xl font-semibold leading-loose">
                    Social Media
                </p>
            </div>
            <div class="self-stretch flex-col h-12 px-6 py-2 inline-flex justify-start items-start gap-4">
                <div class="self-stretch h-10 inline-flex justify-start items-start gap-4 group hover:px-2 py-2 hover:bg-orange-200 hover:rounded-[32px] transition-all duration-300 cursor-pointer">
                    <div class="relative w-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="absolute group-hover:opacity-100">
                            <g clip-path="url(#clip0_629_11687)">
                                <path d="M24 12C24 5.37188 18.6281 0 12 0C5.37188 0 0 5.37188 0 12C0 17.625 3.87656 22.35 9.10312 
                                23.6484V15.6656H6.62812V12H9.10312V10.4203C9.10312 6.3375 10.95 4.44375 14.9625 4.44375C15.7219 4.44375 
                                17.0344 4.59375 17.5734 4.74375V8.0625C17.2922 8.03438 16.8 8.01562 16.1859 8.01562C14.2172 8.01562 13.4578 
                                8.76094 13.4578 10.6969V12H17.3766L16.7016 15.6656H13.4531V23.9109C19.3969 23.1938 24 18.1359 24 12Z" 
                                fill="#991b1b"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_629_11687">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <img src="../assets/facebook 1.svg" class="absolute group-hover:opacity-0">
                    </div>
                    <p class="text-center justify-start text-red-100 text-base font-medium group-hover:text-red-800">FacebooK</p>
                </div>
                
                <div class="self-stretch h-10 inline-flex justify-start items-start gap-4 group hover:px-2 py-2 hover:bg-orange-200 hover:rounded-[32px] transition-all duration-300 cursor-pointer">
                    <div class="relative w-6">
                        <img src="../assets/instagram.svg" class="absolute group-hover:opacity-100">
                        <img src="../assets/instagram 1.svg" class="absolute group-hover:opacity-0">
                    </div>
                    <p class="text-center justify-start text-red-100 text-base font-medium group-hover:text-red-800">Instsgram</p>
                </div>

                <div class="self-stretch h-10  inline-flex justify-start items-start gap-4 group hover:px-2 py-2 hover:bg-orange-200 hover:rounded-[32px] transition-all duration-300 cursor-pointer">
                    <div class="relative w-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="absolute group-hover:opacity-100">
                            <g clip-path="url(#clip0_629_11695)">
                                <path d="M24 12C24 18.629 18.629 24 12 24C10.7613 24 9.57097 23.8113 8.44839 23.4629C8.9371 22.6645 9.66774 21.3581 9.93871 
                                20.3177C10.0839 19.7565 10.6839 17.4629 10.6839 17.4629C11.0758 18.2081 12.2177 18.8419 13.4323 18.8419C17.0516 18.8419 19.6597 
                                15.5129 19.6597 11.3758C19.6597 7.4129 16.4226 4.44677 12.2613 4.44677C7.08387 4.44677 4.33065 7.92097 4.33065 11.7097C4.33065 
                                13.471 5.26935 15.6629 6.76452 16.3597C6.99194 16.4661 7.1129 16.4177 7.16613 16.2C7.20484 16.0355 7.40806 15.2177 7.5 14.8403C7.52903 
                                14.7194 7.51452 14.6129 7.41774 14.4968C6.92903 13.8919 6.53226 12.7887 6.53226 11.7581C6.53226 9.11129 8.53548 6.55161 11.9516 
                                6.55161C14.8984 6.55161 16.9645 8.55968 16.9645 11.4339C16.9645 14.6806 15.3242 16.9306 13.1903 16.9306C12.0145 16.9306 11.129 
                                15.9581 11.4145 14.7629C11.7532 13.3355 12.4065 11.7968 12.4065 10.7661C12.4065 9.84677 11.9129 9.07742 10.8871 9.07742C9.68226 9.07742 
                                8.71452 10.321 8.71452 11.9903C8.71452 13.0548 9.07258 13.771 9.07258 13.771C9.07258 13.771 7.8871 18.7935 7.66935 19.7323C7.42742 20.7677 
                                7.52419 22.229 7.62581 23.1774C3.16452 21.4306 0 17.0855 0 12C0 5.37097 5.37097 0 12 0C18.629 0 24 5.37097 24 12Z" fill="#991b1b"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_629_11695">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <img src="../assets/pinterest 1.svg" class="absolute group-hover:opacity-0">
                    </div>
                    <p class="text-center justify-start text-red-100 text-base font-medium group-hover:text-red-800">Pinterest</p>
                </div>
                 
                <div class="self-stretch h-10 inline-flex justify-start items-start gap-4 group hover:px-2 py-2 hover:bg-orange-200 hover:rounded-[32px] transition-all duration-300 cursor-pointer">
                    <div class="relative w-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28" fill="none" class="absolute group-hover:opacity-100" >
                        <path d="M22.2857 2H1.70893C0.766071 2 0 2.77679 0 3.73036V24.2696C0 25.2232 0.766071 26 1.70893 26H22.2857C23.2286 26 24 25.2232 24 24.2696V3.73036C24 
                        2.77679 23.2286 2 22.2857 2ZM7.25357 22.5714H3.69643V11.1179H7.25893V22.5714H7.25357ZM5.475 9.55357C4.33393 9.55357 3.4125 8.62679 3.4125 7.49107C3.4125 
                        6.35536 4.33393 5.42857 5.475 5.42857C6.61071 5.42857 7.5375 6.35536 7.5375 7.49107C7.5375 8.63214 6.61607 9.55357 5.475 9.55357ZM20.5875 22.5714H17.0304V17C17.0304 
                        15.6714 17.0036 13.9625 15.1821 13.9625C13.3286 13.9625 13.0446 15.4089 13.0446 16.9036V22.5714H9.4875V11.1179H12.9V12.6821H12.9482C13.425 11.7821 14.5875 10.8339 
                        16.3179 10.8339C19.9179 10.8339 20.5875 13.2071 20.5875 16.2929V22.5714Z" fill="#991b1b"/>
                        </svg>
                        <img src="../assets/linkedin 1.svg" class="absolute group-hover:opacity-0">
                    </div>
                    <p class="text-center justify-start text-red-100 text-base font-medium group-hover:text-red-800">Linked in</p>
                </div>    
            </div>  
        </div>

        <div class="w-80 flex flex-col justify-start items-start gap-4">
            <div class="px-6 inline-flex flex-col justify-center items-center gap-2.5">
                <p class="justify-start text-red-100 text-xl font-semibold leading-loose">
                    Contact Us
                </p>
            </div>
            <div class="w-80 flex flex-col justify-start items-start px-6 gap-4">
                <div class="self-stretch px-4 py-2.5 bg-white rounded-2xl  inline-flex justify-end items-center gap-4">
                    <input type="email" placeholder="Enter your email"  class="py-[2.50px] flex-1 justify-start text-neutral-400 text-sm font-medium leading-tight focus:outline-none"/>
                </div>
                <div class="self-stretch py-2.5 cursor-pointer bg-orange-200 rounded-2xl hover:bg-orange-300 group hover:rounded-full transition-all duration-300 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] inline-flex justify-center items-center gap-2.5">
                    <button class="text-right justify-start text-red-800 cursor-pointer text-lg font-bold leading-relaxed group-hover:text-red-100 group-transition-all group-duration-300">Send</button>
                </div>
            </div>    
        </div>
    </footer>
</template>


