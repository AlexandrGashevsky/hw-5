<script setup>
  import EventCard from '../components/EventCard.vue'
  import Pagination from '../components/Pagination.vue'
</script>

<template>
  <div>
    <h1>These are events</h1>
  </div>
  <div class="create-new-events__events">
    
    <div class="event" v-for="(event, index) in allEvents" v-show="showPage(currentPage, index)">
      <EventCard :card="event"/>
      <button @click="deleteEvent(index)">Delete</button>
      <button @click="editEvent(index)">Edit</button>
    </div>
    <div class="add-new-event">
      <h4>Add new event</h4>
      <input v-model="eventToAdd.title" placeholder="Title" type="text"/>
      <input v-model="eventToAdd.date" type="date"/>
      <input v-model="eventToAdd.time" type="time"/>
      <input v-model="eventToAdd.location" placeholder="Location" type="text"/>
      <input v-model="eventToAdd.description" placeholder="Description" type="text"/>
      <button @click="addEvent">Post</button>
    </div>
    <div class="add-new-event">
      <h4>Edit selected event</h4>
      <input v-model="eventToEdit.id" placeholder="Id" type="number"/>
      <input v-model="eventToEdit.title" placeholder="Title" type="text"/>
      <input v-model="eventToEdit.date" type="date"/>
      <input v-model="eventToEdit.time" type="time"/>
      <input v-model="eventToEdit.location" placeholder="Location" type="text"/>
      <input v-model="eventToEdit.description" placeholder="Description" type="text"/>
      <button @click="editEvent">Edit</button>
    </div>
    
  </div>
  <Pagination @click="coutData" :n="$store.getters.allEvents.length"/>
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
              currentPage: 0,
              eventToAdd: {
                id: 0,
                title: '',
                date:'',
                time: '',
                location: '',
                description: '',
                organizer: 'Current User'
              },
              eventToEdit: {
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
            showPage(currentPageNumber, index){
              if(currentPageNumber*3 > index || (currentPageNumber+1)*3 <= index){
                return false;
              } else {
                return true;
              }
            },
            coutData(event){
              const value = event.target.innerText
              if(!(value.includes("←") && value.includes("→"))){
                if(value == "←"){
                    this.currentPage -= 1;
                    if(this.currentPage < 0){
                      this.currentPage = 0;
                    }
                } else if(value == "→") {
                  
                  this.currentPage += 1;
                  if(this.currentPage >= Math.ceil(this.allEvents.length/3)){
                    this.currentPage = 0;
                  } 
                } else {
                  this.currentPage = parseInt(value) - 1;
                }
              }
            },
            addEvent(){
              const newEvent = {...this.eventToAdd}
              if(this.allEvents.length > 0)
              {
                newEvent.id = this.allEvents[this.allEvents.length - 1].id + 1
              } else {
                newEvent.id = 1;
              }
              this.$store.dispatch('addEvent', newEvent)
              
              console.log(this.$store.getters.allEvents);
            },
            deleteEvent(index){
              this.$store.dispatch('deleteEvent', index)
            },
            
            editEvent(){
              const eventToPut = {...this.eventToEdit}
              this.$store.dispatch('editEvent', eventToPut)
            }
          }
      }
</script>

<style>
  .create-new-events__events{
    display: block;
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
