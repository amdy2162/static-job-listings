<script setup>
import { ref } from 'vue'
import data from '../data.json';


const jobList = ref(data)
const secachJob = ref('')

</script>

<template>
<div class="w-full py-[8px] m-auto  bg-[#effafa] ">
    <!-- <div class="bg-white rounded-md w-full h-20 sticky z-10 p-4 -mt-[3.3em] mb-16 shadow-xl flex justify-between items-center px-12 font-mono  max-w-[1110px] m-auto shadow-[#d2ecec]">
        <div class="text-[#5ba4a4] underline underline-offset-1 font-bold opacity-50">Clear</div>
    </div> -->
    <div class="my-8 bg-white h-36 rounded-md shadow-xl shadow-[#d2ecec] max-w-[1110px] m-auto font-Spartan" v-for="item in jobList"> 
        <div class="grid grid-cols-7 place-content-center h-full">
            <div class="flex justify-center items-center ">
                <img :src="item.logo" alt="" class=""> 
            </div>
        <div class="font-Spartan grid grid-rows-3 place-items-start  col-span-2">
           <div class="text-[#5ba4a4] font-bold text-md"> {{ item.company }}</div>
           <h1 class="text-black hover:text-[#5ba4a4] font-normal text-xl"> {{ item.position }}</h1>
            <div class=" text-md text-[#7b8e8e] text-md">{{ item.postedAt }}．{{ item.contract }}．{{ item.location }}</div>
        </div>
        <div class="flex flex-wrap col-span-3 justify-center items-center col-start-5 place-items-center">
            <div class="bg-[#eef6f6] text-[#5ba4a4] hover:bg-[#5ba4a4] hover:text-[#eef6f6] font-bold px-3 py-1 h-8 rounded mr-2 ">{{ item.role }}</div> 
            <div class="bg-[#eef6f6] text-[#5ba4a4] hover:bg-[#5ba4a4] hover:text-[#eef6f6] font-bold px-3 py-1 h-8 rounded mr-2 ">{{ item.level }}</div> 
            <div v-for="coruse in  item.languages" class="bg-[#eef6f6] text-[#5ba4a4] hover:bg-[#5ba4a4] hover:text-[#eef6f6] font-bold px-3 py-1 h-8 rounded mr-2">{{coruse }}</div>
            <div v-for="coruse in  item.tools"  class="bg-[#eef6f6] text-[#5ba4a4] hover:bg-[#5ba4a4] hover:text-[#eef6f6] font-bold px-3 py-1 h-8 rounded mr-2"> {{ coruse }}</div>
        </div>
        </div>
    </div>
</div>
</template>
<style>
    /* --primary-dark-cyan: #5ba4a4;
    --bg-light-cyan: #effafa;
    --filter-tablets: #eef6f6;
    --dark-gray-cyan: #7b8e8e;
    --vdark-gray-cyan: #2c3a3a; */
</style>