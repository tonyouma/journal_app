import axios from "~/plugins/axios"

const initialState = () => ({
  journals: [],
  loading: false,
  journal: {},
  drafts: [],
})

const state = () => ({
  ...initialState(),
})

const actions = {
  async fetchJournals({ commit }) {
    commit('SET_LOADING', true)

    await axios.get('/')
      .then(res => {
        const journals = res.data
        commit('SET_JOURNALS', journals)
        commit('SET_LOADING', false)
      }).catch(err => {
        console.log('error', err)
        commit('SET_LOADING', false)
      })
  },

  async fetchJournal({ commit }, id) {
    commit('SET_LOADING', true)

    await axios.get(`/${id}`)
      .then(res => {
        commit('SET_JOURNAL', res.data)
        commit('SET_LOADING', false)
      }).catch(err => {
        console.log('error', err)
        commit('SET_LOADING', false)
      })
  },

  async fetchDrafts({ commit }) {
    commit('SET_LOADING', true)

    await axios.get('/drafts')
      .then(res => {
        const drafts = res.data
        commit('SET_DRAFTS', drafts)
        commit('SET_LOADING', false)
      }).catch(err => {
        console.log('error', err)
        commit('SET_LOADING', false)
      })
  }
}

const getters = {
  journals: state => state.journals,
  journal: state => state.journal,
  loading: state => state.loading,
  drafts: state => state.drafts,
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

  // Drafts
  SET_DRAFTS: (state, drafts) => {
    state.drafts = drafts
  }
}

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
}
