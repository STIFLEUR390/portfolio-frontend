<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <ClientOnly>
        <slot />
      </ClientOnly>
    </SidebarInset>
  </SidebarProvider>
</template>


<script setup>
import "~/assets/css/tailwind.css";
</script>
