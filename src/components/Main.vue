<script setup>
import { ref } from 'vue'
import data from '../data.json';

const jobList = ref(data)
const secachJob = ref('')
</script>

<template>
<div class="w-full  py-[90px] px-[180px] bg-[#effafa] ">
    <div class="bg-white rounded w-full h-16 sticky z-10 p-4 -mt-[8.3em] shadow-md flex justify-between items-center px-12 font-mono">
        <input type="text" v-model="secachJob " placeholder="Search you dream job..." class="w-[43%] h-10 border-2 border-none rounded px-4 outline-none focus:border-[#5ba4a4]  text-[#5ba4a4]  placeholder:text-[#5ba4a4]">
        <div class="text-[#5ba4a4] underline underline-offset-1 font-bold opacity-50">Clear</div>
    </div>

    <div class="my-8 bg-white h-36 rounded-md shadow-lg" v-for="item in jobList"> 
        <img :src="item.logo" alt="" class="w-full h-full">
    </div>
</div>
</template>
