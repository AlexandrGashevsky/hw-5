

<template>
    <div class="event">
        <h4>{{card.title}}</h4>
        <h5>Id: {{card.id}}</h5>
        <p>Date: {{card.date}}</p>
        <p>Time: {{card.time}}</p>
        <RouterLink :to="{name: 'eventPage', params:{id:card.id}}">More</RouterLink>
    </div>
</template>

<script>
    export default {
        props: {
            card: Object
        }
    }
</script>

<style>
    .event{
    width: 350px;
    margin-left: auto;
    margin-right: auto;
    border: solid 3px rgb(0, 0, 0);
    padding: 10px;
    border-radius: 3%;
    margin-top: 10px;
  }
</style>