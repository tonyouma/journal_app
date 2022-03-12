<template>
  <div>
    <div v-if="!journals.length" class="content-wrapper">
      <p class="">No Journals Available</p>
      <ButtonComponent to="/new" class="link-text"
        >Create New Journal</ButtonComponent
      >
    </div>
    <div v-else>
      <JournalCard :journals="journals" />
    </div>
  </div>
</template>

<script>
import JournalCard from '~/components/Card/JournalCard.vue'
import { mapState } from 'vuex'
import ButtonComponent from '~/components/ButtonComponent/ButtonComponent.vue'

export default {
  layout(context) {
    return 'journal'
  },
  components: {
    JournalCard,
    ButtonComponent,
  },

  computed: {
    ...mapState('journals', ['journals']),
  },
  // async created() {
  //   try {
  //     this.$store.dispatch('FETCH_JOURNAS')
  //   } catch (e) {
  //     console.error(e)
  //   }
  // },
  methods: {
    addPost() {
      //
    },
  },
}
</script>

<style lang="postcss">
.link-text {
  @apply my-5 text-blue-600 underline;
}
.content-wrapper {
  @apply flex justify-center items-center flex-col md:my-10 cursor-pointer;
}
</style>
