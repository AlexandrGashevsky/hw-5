<template>
  <div>
    <h4>{{ currentEvent.title }}</h4>
    <h5>Id: {{ currentEvent.id }}</h5>
    <p>Date: {{ currentEvent.date }}</p>
    <p>Time: {{ currentEvent.time }}</p>
    <p>Location: {{ currentEvent.location }}</p>
    <p>Description: {{ currentEvent.description }}</p>
    <p>Organizer: {{ getName(currentEvent.organizer) }}</p>
  </div>
</template>

<script>
import json from "../events.json";

export default {
  data() {
    return {
      currentEvent: json.events[this.$route.params.id - 1],
    };
  },
  methods: {
    getName(org) {
      if (typeof org === "string") {
        return org;
      } else {
        return org.name;
      }
    },
  },
};
</script>
