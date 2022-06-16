<script setup>
// You don't need to import these components, they're globally available
// import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/events">Events</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style></style>
