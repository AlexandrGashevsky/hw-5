import { resolveComponents } from 'uri-js';
import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    events: []
  },
  getters: {
    allEvents(state){
      return state.events;
    }
  },
  actions:{
    addEvent({commit}, event){
      commit('ADD_EVENT', event)
    },
    deleteEvent({commit}, index){
      commit('DELETE_EVENT', index)
    },
    setEvents({commit}, events){
      commit('SET_EVENTS', events)
    },
    editEvent({commit}, event, index){
      commit('EDIT_EVENT', event, index)
    }
  },
  mutations: {
    ADD_EVENT(state, event) {
     // state.events.push(event);
     axios.post('http://localhost:3000/events', event).then(
      state.events.push(event)
     );
      
    },
    DELETE_EVENT(state, index){
      
      axios.delete(`http://localhost:3000/events/${state.events[index].id}`).then(
      state.events.splice(index, 1)
     )
    },
    SET_EVENTS(state, events){
      state.events = events
    },
    EDIT_EVENT(state, event){
      axios.put(`http://localhost:3000/events/${event.id}`, event).catch(
        (error) => {
          alert("Try another ID \n" + error);
        }
      ).then(
        ()=>{
          const id = state.events.findIndex(x => x.id === event.id);
          state.events[id] = event;
        }
      );
    }
  }
})
