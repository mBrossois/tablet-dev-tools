<template>
<div class="log-component">
    <div class="log-container">
        <div v-for="log, index in logs" :key="index" class="log-screen">
            <p v-for="messsage, messageIndex in log.message" :key="messageIndex" :class="log.type"><strong>Log:</strong> {{log.message[messageIndex]}}</p>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import {ref, onMounted, onBeforeUnmount, watch} from 'vue'
 const logs = ref([{}])
 const originalConsoleLog = console.log
 const originalConsoleWarn = console.warn
 const originalConsoleError = console.error

console.log = function() {
    logs.value.push({type: "log", message: [...arguments]})
    originalConsoleLog.apply(console, arguments)
}

console.warn = function() {
    logs.value.push({type: "warn", message: [...arguments]})
    originalConsoleWarn.apply(console, arguments)
}

console.error = function() {
    logs.value.push({type: "error", message: [...arguments]})
    originalConsoleError.apply(console, arguments)
}
 
</script>

<style scoped>
.log-component {
    width: 25rem;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
}
.log-container{
    height: 100%;
    width: 100%;
    background-color: black;
    overflow: scroll;
    padding: 1rem;
}
.log {
    color: white;
}
.warn {
    color: yellow;
}
.error {
    color: red;
}
</style>