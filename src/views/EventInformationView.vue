<script setup>
</script>

<template>
    <div class="event-information__card">
        <h4>{{currentEvent.title}}</h4>
        <h5>Id: {{currentEvent.id}}</h5>
        <p>Date: {{currentEvent.date}}</p>
        <p>Time: {{currentEvent.time}}</p>
        <p>Location: {{currentEvent.location}}</p>
        <p>Description: {{currentEvent.description}}</p>
        <p>Organizer: {{getName(currentEvent.organizer)}}</p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                currentEvent: this.$store.getters.allEvents[this.getIndex(this.$store.getters.allEvents, this.$route.params.id)]
               
            }
        },
        methods: {
            getName(org){
                if(typeof(org)==='string'){
                    return org
                } else {
                    return org.name;
                }
            },
            getIndex(myArray, i){
              const index = myArray.findIndex(item => item.id == i);
                return index;
            }
        },

}
</script>

<style>
  .event-information__card{
    width: 350px;
    margin-left: auto;
    margin-right: auto;
    border: solid 3px rgb(0, 0, 0);
    padding: 10px;
    border-radius: 3%;
    margin-top: 10px;
  }
</style>