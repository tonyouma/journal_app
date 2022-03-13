<template>
  <div>
    <h1>{{ journal.title }}</h1>
    <p>{{ journal.description }}</p>
    <ButtonComponent @click="to" class="button-link"
      >Previous Page</ButtonComponent
    >
  </div>
</template>

<script>
import ButtonComponent from '~/components/ButtonComponent/ButtonComponent.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  layout(context) {
    return 'journal'
  },
  components: { ButtonComponent },

  created() {
    this.id = this.$route.params.id
    this.fetchJournal(this.id)
  },
  computed: {
    ...mapGetters(['journal', 'loading']),
  },
  methods: {
    ...mapActions(['fetchJournal']),
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
