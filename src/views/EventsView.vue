<template>
  <div>
    <h1>These are events</h1>
  </div>

  <EventCard v-for="event in events" :card="event" :key="event.id" />
</template>

<script>
import EventCard from "../components/EventCard.vue";
import json from "../events.json";

export default {
  components: {
    EventCard,
  },
  data() {
    return {
      events: json.events,
    };
  },
};
</script>
