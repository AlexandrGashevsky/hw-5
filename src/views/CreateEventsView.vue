<script setup>
  import EventCard from '../components/EventCard.vue'
  import json from '../data/events.json'
  
</script>

<template>
  <div>
    <h1>These are events</h1>
  </div>
  <div class="create-new-events__events">
    <div class="event" v-for="(event, index) in allEvents">
      <EventCard :card="event"/>
      <button @click="deleteEvent(index)">Delete</button>
    </div>
    <div class="add-new-event">
      <input v-model="eventToAdd.title" placeholder="Title" type="text"/>
      <input v-model="eventToAdd.date" type="date"/>
      <input v-model="eventToAdd.time" type="time"/>
      <input v-model="eventToAdd.location" placeholder="Location" type="text"/>
      <input v-model="eventToAdd.description" placeholder="Description" type="text"/>
      <button @click="addEvent">Add Event</button>
    </div>
  </div>
</template>

<script>
      export default {       
          computed: {
            allEvents(){
              return this.$store.getters.allEvents
            },
            
          },
          data(){
            return {
              eventToAdd: {
                id: 0,
                title: '',
                date:'',
                time: '',
                location: '',
                description: '',
                organizer: 'Current User'
              }
            }
          },
          methods: {
            addEvent(){
              const newEvent = {...this.eventToAdd}
              newEvent.id = this.allEvents[this.allEvents.length - 1].id + 1
              this.$store.dispatch('addEvent', newEvent)
              
              console.log(this.$store.getters.allEvents);
            },
            deleteEvent(index){
              this.$store.dispatch('deleteEvent', index)
            }
          }
      }
</script>

<style>
  .create-new-events__events{
    display: grid;
    grid-template-columns: 400px 400px;
    width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .create-new-events__events > *{
    width: 350px;
    margin-left: auto;
    margin-right: auto;
    border: solid 3px rgb(0, 0, 0);
    padding: 10px;
    border-radius: 3%;
    margin-top: 10px;
  }

  .add-new-event > input {
    width: 250px;
    margin-bottom: 10px;
  }

  .add-new-event > button{
    margin-left: 10px;
  }

  .event > button {
    margin-top: 10px;
  }
</style>
