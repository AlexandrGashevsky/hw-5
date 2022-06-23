

<template>
    <div>
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
</style>