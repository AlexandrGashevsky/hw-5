import { createStore } from 'vuex'
import json from '../data/events.json'

let randomEvent = {
  "id": 1,
        "title": "randomEvent",
        "date": "Aug 28 2018",
        "time": "10:00",
        "location": "Daytona Beach",
        "description": "Let's clean up this beach.",
        "organizer": "Adam Jahr",
        "category": "sustainability",
        "attendees": [
          {
            "id": "abc123",
            "name": "Adam Jahr"
          },
          {
            "id": "def456",
            "name": "Gregg Pollack"
          },
          {
            "id": "ghi789",
            "name": "Beth Swanson"
          },
          {
            "id": "jkl101",
            "name": "Mary Gordon"
          }
        ]
}

export default createStore({
  state: {
    events: json.events
  },
  getters: {
    allEvents(state){
      return state.events;
    }
  },
})
