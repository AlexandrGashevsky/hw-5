<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div>
      <nav class="navigation">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/events">Events</RouterLink>
        
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
  .navigation > *{
    margin: 10px;
  }
</style>
