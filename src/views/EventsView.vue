<script setup>
  import EventCard from '../components/EventCard.vue'
  import json from '../data/events.json'
  
</script>

<template>
  <div>
    <h1>These are events</h1>
  </div>
  <EventCard @click="alertEvents" v-for="event in events" :card="event"/>
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

</style>
