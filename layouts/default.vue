<template>
  <div>
    <ClientOnly>
      <slot />
    </ClientOnly>
  </div>
</template>

<script setup>
import "~/assets/css/main.css";
</script>
