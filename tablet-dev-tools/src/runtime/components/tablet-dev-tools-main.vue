<template>
    <div class="log-component">
        <button @click="toggle">C</button>

        <div :class="{open: isOpen}" class="log-inner-component">
            <div class="log-container">
                <div v-for="log, index in logs" :key="index" class="log-screen">
                    <p v-for="messsage, messageIndex in log.message" :key="messageIndex" :class="log.type">
                        <strong v-if="log.type==='log'">Log:</strong> 
                        <strong v-else-if="log.type==='warn'">Warning:</strong> 
                        <strong v-else-if="log.type==='error'">Error:</strong> 
                        {{log.message[messageIndex]}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const isOpen = ref(false)
const logs = ref([{}])
const originalConsoleLog = console.log
const originalConsoleWarn = console.warn
const originalConsoleError = console.error

console.log = function(...args) {
    logs.value.push({type: "log", message: [...args]})
    originalConsoleLog.apply(console, args)
}

console.warn = function(...args) {
    logs.value.push({type: "warn", message: [...args]})
    originalConsoleWarn.apply(console, args)
}

console.error = function(...args) {
    logs.value.push({type: "error", message: [...args]})
    originalConsoleError.apply(console, args)
}

function toggle() {
    isOpen.value = !isOpen.value
}
 
</script>

<style scoped>
.log-component {
    position: absolute;
    right: 0;
    bottom: 5rem;
    display: flex;
    align-items: center;

}
button {
    background-color: #f87400;
    color:white;
    width: 3rem;
    height: 3rem;
    transform: translateX(1rem);
    border: 5px solid black;
    border-radius: 100%;
}
.log-inner-component {
    transition: width 200ms ease-in-out;
    width: 0rem;
    height: 25rem;
}
.log-inner-component.open {
    width: 25rem;
}
.log-container{
    height: 100%;
    width: 100%;
    border-top: 5px solid #f87400;
    border-bottom: 5px solid #f87400;
    border-left: 5px solid #f87400;
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