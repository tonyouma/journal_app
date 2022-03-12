import journals from "~/utils/api/journals"

const initialState = () => ({
  journals: [
    {
      id: 1,
      title: 'title1',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat ipsum sunt tempora fuga quo, molestiae iste Eligendi veritatis earum porro.',
      createdAt: '01/02/2021',
    },
    {
      id: 2,
      title: 'title',
      description: 'description',
      createdAt: '01/02/2021',
    },
    {
      id: 3,
      title: 'title',
      description: 'description',
      createdAt: '01/02/2021',
    },
  ],
  loading: false,
  journal: {},
  selectedJournal: {},
})

const state = () => ({
  ...initialState(),
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
