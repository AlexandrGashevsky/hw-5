import { createStore } from 'vuex'
import json from '../data/events.json'

export default createStore({
  state: {
    events: json.events
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
    }
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    DELETE_EVENT(state, index){
      state.events.splice(index, 1)
    }
  }
})
