<script setup>
  import EventCard from '../components/EventCard.vue'
  import json from '../data/events.json'
  
</script>

<template>
  <div>
    <h1>These are events</h1>
  </div>
  <div class="events-list">
  <EventCard @click="alertEvents" v-for="event in events" :card="event"/>
  </div>
</template>

<script>
      export default {    
          data(){
              return{
                  events: json.events
              }
          },
          methods: {
            alertEvents(){
              console.log(this.events)
            }
          }
      }
</script>

<style>
  .events-list{
    display: grid;
    grid-template-columns: 400px 400px;
    width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
