<script setup lang="ts">
import { useLogtoUser } from "#imports";
const user = useLogtoUser();
console.log("user", user);
</script>

<template>
  <div>
    <nuxt-link :to="`/auth/sign-${user ? 'out' : 'in'}`">
      {{ user ? "Se déconnecter" : "Se connecter" }}
    </nuxt-link>
    <div v-if="user">
      <p>Bienvenue, {{ user.name }}</p>
      <p>Email : {{ user.email }}</p>
    </div>
  </div>
</template>