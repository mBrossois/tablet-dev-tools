<template>
    <div>
    <div v-for="log, index in logs" :key="index">
        <p v-for="messsage, messageIndex in log.message" :key="messageIndex">Log: {{log.message[messageIndex]}}</p>
    </div>
    </div>
</template>

<script setup lang="ts">
import {ref, onMounted, onBeforeUnmount, watch} from 'vue'
 const logs = ref([{}])
 const originalConsoleLog = console.log
let isConsoleLogCalled = false

console.log = function() {
    logs.value.push({type: "log", message: [...arguments]})
    originalConsoleLog.apply(console, arguments)
}

 
</script>