<template>
<div class="log-component">
    <div :class="{open: isOpen}" class="log-inner-component">
        <div class="log-container">
            <div v-for="log, index in logs" :key="index" class="log-screen">
                <p v-for="messsage, messageIndex in log.message" :key="messageIndex" :class="log.type"><strong>Log:</strong> {{log.message[messageIndex]}}</p>
            </div>
        </div>
    </div>
    <button @click="toggle">C</button>
</div>
</template>

<script setup lang="ts">
import {ref, onMounted, onBeforeUnmount, watch} from 'vue'
 const isOpen = ref(false)
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

function toggle() {
    isOpen.value = !isOpen.value
}
 
</script>

<style scoped>
.log-component{
    position: absolute;
    right: 0;
    bottom: 5rem;

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