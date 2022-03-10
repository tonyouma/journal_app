import journals from "~/utils/api/journals"

const state = () => ({
  journals: [
  ],
  journal: {},
  selectedJournal: {},
})

const actions = {
  async createJournal({ commit }, journal) {
    const { data } = await this.$axios.post('/api/journals', journal)
    commit('CREATE_JOURNAL', data)
  },

  async fetchJournals({ commit }) {
    const data = await journals.getJournals()
    commit('FETCH_JOURNALS', data)
  },

  // async updateJournal({ commit }, journal) {
  //   const { data } = await this.$axios.put(`/api/journals/${journal.id}`, journal)
  //   commit('UPDATE_JOURNAL', data)
  // },

  // async deleteJournal({ commit }, journal) {
  //   await this.$axios.delete(`/api/journals/${journal.id}`)
  //   commit('DELETE_JOURNAL', journal)
  // }
}

const getters = {
  journals: state => state.journals,
  journal: state => id => state.journals.find(journal => journal.id === id),
  selectedJournal: state => state.selectedJournal
}

const mutations = {
  CREATE_JOURNAL(state, journal) {
    state.journals.push(journal)
  },
  GET_JOURNALS(state, journals) {
    state.journals = journals
  },
  // UPDATE_JOURNAL(state, journal) {
  //   const index = state.journals.findIndex(j => j.id === journal.id)
  //   state.journals.splice(index, 1, journal)
  // },
  // DELETE_JOURNAL(state, journal) {
  //   const index = state.journals.findIndex(j => j.id === journal.id)
  //   state.journals.splice(index, 1)
  // }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
