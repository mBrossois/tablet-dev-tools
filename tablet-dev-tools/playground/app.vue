<template>
  <div>
    Nuxt module playground!
    <TabletDevToolsMainComponent />
    <button @click="send">second</button>
  </div>
</template>

<script setup lang="ts">
  
  function send() {
    console.error("nee medsag")
  }
</script>
