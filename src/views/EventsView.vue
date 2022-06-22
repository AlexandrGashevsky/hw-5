<script setup>
  import EventCard from '../components/EventCard.vue'
  import Pagination from '../components/Pagination.vue'
  
</script>

<template>
  <div>
    <h1>These are events</h1>
  </div>
  <div class="events-list">
    <div class="events-list__element" v-for="(event, index) in allEvents" v-show="showPage(currentPage, index)" :key="event.id">
      <EventCard  :card="event"/>
    </div>
  </div>
  <Pagination @click="coutData" :n="$store.getters.allEvents.length"/>
</template>

<script>
      export default {
          data(){
            return{
              currentPage: 0
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
                    if(this.currentPage < 0) {
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
            }
          },
          computed: {
            allEvents(){
              return this.$store.getters.allEvents
          }
      }
      }
</script>

<style>
  .events-list{
    display: block;
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
