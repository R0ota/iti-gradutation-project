<script setup>
     definePageMeta({
  layout: "auth",
});

const show = ref(false)
const password = ref('')
</script>

<template>
    <div class="h-full flex items-center  w-full">
        <div class="bg-red-200 w-1/3 h-[100vh]">
        </div>
        <div class="h-screen flex items-center m-auto ">
            <div class="w-full inline-flex flex-col justify-start items-start gap-8">
                <div class="px-6 border-l-[6px] border-red-800 inline-flex items-center ">
                    <p class="justify-start text-red-800 lg:text-3xl text-xl font-bold  leading-loose lg:leading-[48px]">
                    Log in</p>
                </div>
                    <div class="h-[70px] w-full bg-amber-100 rounded">
                        <UFormField label="Email" class="text-red-800">
                            <UInput type="email" placeholder="'example@gmail.com'"/>
                        </UFormField>
                    </div>

                    <div class="h-[70px] bg-amber-100 rounded">
                        <UFormField label="Password" class="text-red-800">
                            <UInput
                            v-model="password"
                            placeholder="+6 characters"
                            :type="show ? 'text' : 'password'"
                            :ui="{ trailing: 'pe-1' }">
                                <template #trailing>
                            <UButton
                                color="neutral"
                                variant="link"
                                size="sm"
                                :icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                                :aria-label="show ? 'Hide password' : 'Show password'"
                                :aria-pressed="show"
                                aria-controls="password"
                                @click="show = !show"/>
                                </template>
                            </UInput>
                        </UFormField>
                    </div>
                    <div class="flex justify-center items-center w-full ">
                        <UButton class="bg-red-800 text-yellow-50 cursor-pointer">Log in</UButton>
                    </div>
            </div>
        </div>
        
    </div>
</template>