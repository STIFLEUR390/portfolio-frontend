<template>
  <div
    class="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10"
  >
    <div class="w-full max-w-sm md:max-w-3xl text-center">
      <button
        class="shadcn-btn shadcn-btn-primary w-full py-3 rounded-lg font-semibold"
        @click="navigateTo('/sign-in')"
      >
        Se connecter avec Logto
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLogtoUser } from "#imports"; // Add this line if auto-import is disabled
const user = useLogtoUser();
const navigateTo = (url: string) => (window.location.href = url);
console.log("user", user);
</script>
