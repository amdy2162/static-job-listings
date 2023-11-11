<script setup>
import { ref } from 'vue';
import data from '../data.json';

const jobList = ref(data)
const secachJob = ref([])
const filterjobList = (item) => {
    if(secachJob.value.includes(item))return
    secachJob.value.push(item)
    jobList.value = jobList.value.filter((job) => {
        if(job.role.includes(item) || job.level.includes(item) || job.languages.includes(item) || job.tools.includes(item)){
            return job
        }
    })
}
const clearFilter = () => {
    jobList.value = data
    secachJob.value = []
}
</script>
<template>
<div class="w-full py-[8px] m-auto" :class="{'h-[80vh]' : jobList.length <= 3 }">
    <div v-if="secachJob.length !== 0" class="bg-white rounded-md w-full h-20 sticky z-10 p-4 -mt-[3.3em] mb-8 shadow-xl flex justify-between items-center px-12 font-mono  max-w-[1110px] m-auto shadow-[#d2ecec]">
        <div class="flex">
            <div v-for="item in secachJob" class="bg-[#eef6f6] text-[#5ba4a4] hover:bg-[#5ba4a4] hover:text-[#eef6f6] font-bold px-3 py-1 h-8 rounded mr-2" >
                {{item}}
            </div>
        </div>
        <button @click="clearFilter()" class="text-md text-gray-900 hover:text-[#5ba4a4] hover:underline underline-offset-1 font-bold opacity-50">
            Clear
        </button>
    </div>
    <div v-for="(item, index) in jobList" class="my-8 bg-white h-36 rounded-md shadow-xl shadow-[#d2ecec] max-w-[1110px] m-auto font-Spartan" > 
        <div class="grid grid-cols-7 place-content-center h-full">
            <div class="flex justify-center items-center ">
                <img :src="item.logo" alt="" class=""> 
            </div>
            <div class="font-Spartan grid grid-rows-3 place-items-start  col-span-2">
                <div class="text-[#5ba4a4] font-bold text-md"> {{ item.company }} 
                    <span v-if=" index === 0 || index === 1 || index === 2 "
                        class=" font-normal text-xs text-center bg-[#5ba4a4] text-white rounded-full py-1 px-2" >
                        NEW!
                    </span> 
                    <span v-if=" index === 0 || index === 1" 
                        class="font-normal text-white bg-black rounded-full px-2 py-1  text-xs ml-1">
                        FEATURED
                    </span>
                </div>
                <h1 class="text-black hover:text-[#5ba4a4] font-normal text-xl"> {{ item.position }}</h1>
                <div class=" text-md text-[#7b8e8e] text-md">{{ item.postedAt }} ． {{ item.contract }} ． {{ item.location }}</div>
            </div>
            <div class="flex flex-wrap col-span-3 justify-center items-center col-start-5 place-items-center">
                <div class="bg-[#eef6f6] text-[#5ba4a4] hover:bg-[#5ba4a4] hover:text-[#eef6f6] font-bold px-3 py-1 h-8 rounded mr-2 cursor-pointer" @click="filterjobList(item.role)">
                    {{item.role}}
                </div> 
                <div class="bg-[#eef6f6] text-[#5ba4a4] hover:bg-[#5ba4a4] hover:text-[#eef6f6] font-bold px-3 py-1 h-8 rounded mr-2 cursor-pointer" @click="filterjobList(item.level)">
                    {{item.level}}
                </div> 
                <div v-for="coruse in item.languages" class="bg-[#eef6f6] text-[#5ba4a4] hover:bg-[#5ba4a4] hover:text-[#eef6f6] font-bold px-3 py-1 h-8 rounded mr-2 cursor-pointer" @click="filterjobList(coruse)">
                    {{coruse}}
                </div>
                <div v-for="coruse in item.tools"  class="bg-[#eef6f6] text-[#5ba4a4] hover:bg-[#5ba4a4] hover:text-[#eef6f6] font-bold px-3 py-1 h-8 rounded mr-2 cursor-pointer" @click="filterjobList(coruse)">
                    {{coruse}}
                </div>
            </div>
        </div>
    </div>
</div>
</template>
