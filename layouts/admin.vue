<template>
  <div>
    <ClientOnly>
      <slot />
    </ClientOnly>
  </div>
</template>

<script setup>
import "~/assets/css/tailwind.css";
</script>
