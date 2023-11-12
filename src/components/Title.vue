<script setup>
import {ref} from 'vue';

const isMobile = ref(false);

window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768;
})
</script>
<template>
<div class="w-full bg-[#5BA4A4]  dark:bg-[#3F7373] overflow-hidden">
    <img v-if="isMobile" src="../assets/bg-header-mobile.svg" class="w-full object-cover overflow-hidden h-[10em]" />
    <img v-else src="../assets/bg-header-desktop.svg" class="w-full object-cover overflow-hidden h-[10em]" />
</div>
</template>
