<template>
  <div>
    <div v-if="!loading">
      <div class="flex justify-between mb-4">
        <h4>{{ journal.id }}</h4>
        <h1 class="font-medium capitalize">{{ journal.title }}</h1>
        <p>{{ journal.createdAt }}</p>
      </div>

      <p>{{ journal.description }}</p>
      <ButtonComponent @click="to" class="button-link"
        >Previous Page</ButtonComponent
      >
      <ButtonComponent @click="deleteJournal(journal.id)"
        ><FilterIcon
      /></ButtonComponent>
    </div>
    <div v-if="loading">
      <Loader />
    </div>
  </div>
</template>

<script>
import ButtonComponent from '~/components/ButtonComponent/ButtonComponent.vue'
import Loader from '~/components/Loader/index.vue'

import { mapActions, mapGetters } from 'vuex'
import FilterIcon from '~/components/Icons/Filter/FilterIcon.vue'

export default {
  layout(context) {
    return 'journal'
  },
  components: { ButtonComponent, Loader, FilterIcon },

  created() {
    this.id = this.$route.params.id
    this.fetchJournal(this.id)
  },
  computed: {
    ...mapGetters(['journal', 'loading']),
  },
  methods: {
    ...mapActions(['fetchJournal', 'deleteJournal']),
    deleteJournal(id) {
      // console.log('This function is not yet implemented')
      this.deleteJournal(id)
      // this.$router.push('/journals')
    },
    // Go to previous page
    to() {
      this.$router.go(-1)
    },
  },
}
</script>

<style lang="postcss" scoped>
.button-link {
  @apply py-2 text-blue-900 font-medium text-right mt-8;
}
</style>
