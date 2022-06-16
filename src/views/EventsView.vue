<script setup>
  import EventCard from '../components/EventCard.vue'
 
  
</script>

<template>
  <div>
    <h1>These are events</h1>
  </div>
  <div class="events-list">
    <div class="events-list__element" v-for="event in allEvents">
      <EventCard :card="event"/>
    </div>
  </div>
</template>

<script>
      export default {    
          
          methods: {
            
          },
          computed: {
            allEvents(){
              return this.$store.getters.allEvents
            },
            
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

  .events-list__element{
    width: 350px;
    margin-left: auto;
    margin-right: auto;
    border: solid 3px rgb(0, 0, 0);
    padding: 10px;
    border-radius: 3%;
    margin-top: 10px;
  }
</style>
