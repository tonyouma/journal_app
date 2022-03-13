import VueX, { createLogger } from 'vuex'
import Vue from 'vue'
import journals from './modules/journals'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(VueX)

/**
 * create a store and export it is a default method
 * that returns the VueX store instance   */


export default () => new VueX.Store({
  modules: {
    journals
  },
  plugins: debug ? [createLogger()] : []
})
