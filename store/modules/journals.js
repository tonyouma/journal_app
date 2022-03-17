import axios from '~/plugins/axios'

const initialState = () => ({
  journals: [],
  loading: false,
  journal: {},
  drafts: [],
  newJournal: {},
})

const state = () => ({
  ...initialState(),
})

const actions = {
  // Get all journals
  async fetchJournals({ commit }) {
    commit('SET_LOADING', true)

    await axios
      .get('/')
      .then((res) => {
        const journals = res.data
        commit('SET_JOURNALS', journals)
        commit('SET_LOADING', false)
      })
      .catch((err) => {
        console.log('error', err)
        commit('SET_LOADING', false)
      })
  },

  // Get a journal
  async fetchJournal({ commit }, id) {
    commit('SET_LOADING', true)

    await axios
      .get(`/${id}`)
      .then((res) => {
        commit('SET_JOURNAL', res.data)
        commit('SET_LOADING', false)
      })
      .catch((err) => {
        console.log('error', err)
        commit('SET_LOADING', false)
      })
  },

  // Get all drafts
  async fetchDrafts({ commit }) {
    commit('SET_LOADING', true)

    await axios
      .get('/drafts')
      .then((res) => {
        const drafts = res.data
        commit('SET_DRAFTS', drafts)
        commit('SET_LOADING', false)
      })
      .catch((err) => {
        console.log('error', err)
        commit('SET_LOADING', false)
      })
  },

  // Create a new journal

  async createJournal({ commit }, journal) {
    await axios
      .post('/', journal)
      .then((res) => {
        commit('CREATE_JOURNAL', res.data)
      })
      .catch((err) => {
        console.log('error', err)
      })
  },

  // Update a journal

  async updateJournal({ commit }, journal) {
    await axios
      .put(`/${journal.id}`, journal)
      .then((res) => {
        commit('UPDATE_JOURNAL', res.data)
      })
      .catch((err) => {
        console.log('error', err)
      })
  },

  // Delete a journal

  async deleteJournal({ commit }, id) {
    await axios
      .delete(`/${id}`)
      .then((res) => {
        commit('DELETE_JOURNAL', res.data.id)
      })
      .catch((err) => {
        console.log('error', err)
      })
  },
}

const getters = {
  journals: (state) => state.journals,
  journal: (state) => state.journal,
  loading: (state) => state.loading,
  drafts: (state) => state.drafts,

  newJournal: (state) => state.newJournal,
}

const mutations = {
  SET_JOURNALS: (state, journals) => {
    state.journals = journals
  },
  SET_JOURNAL: (state, journal) => {
    state.journal = journal
  },
  SET_LOADING: (state, loading) => {
    state.loading = loading
  },

  CREATE_JOURNAL: (state, journal) => {
    state.journals.push(journal)
    state.newJournal = journal
  },

  UPDATE_JOURNAL: (state, journal) => {
    state.journals.push(journal)
  },

  DELETE_JOURNAL: (state, journal) => {
    state.journals.filter((j) => j.id !== journal.id)
  },

  // Drafts
  SET_DRAFTS: (state, drafts) => {
    state.drafts = drafts
  },
}

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
