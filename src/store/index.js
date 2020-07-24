import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedDie: 'd20',
    dieRolls: ['No rolls yet - pick a die and add any bonuses!'],
    dieMod: 0,
    lastRoll: 0
  },
  mutations: {
    setSelectedDie (state, die = '') {
      state.selectedDie = die
    },
    updateDieRolls (state, roll = '') {
      state.dieRolls = [...state.dieRolls, roll]
    },
    setDieMod (state, mod = 0) {
      state.dieMod = mod
    },
    setLastRoll (state, roll = 0) {
      state.lastRoll = roll
    }
  },
  actions: {
    rollDice ({ commit, state }) {
      const die = Number(state.selectedDie.substring(1))
      const newRoll = Math.floor(Math.random() * die) + 1
      const mod = state.dieMod
        ? `plus ${state.dieMod}`
        : ''
      commit('setLastRoll', newRoll + state.dieMod)
      commit('updateDieRolls', `Rolled a ${state.selectedDie} ${mod} for ${newRoll} total`)
      commit('setDieMod', 0)
    }
  }
})
