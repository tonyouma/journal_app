<template>
  <div class="w-full">
    <h1>Create New Journal</h1>
    <!-- <NewJournalForm /> -->
    <!-- <form @submit.stop.prevent="onSubmit">
      <div class="flex flex-col">
        <label>Title</label>
        <input
          class="textAreaStyles"
          type="text"
          id="title"
          v-model="journal.title"
        />
      </div>
      <ButtonComponent type="submit" class="button-style"
        >Publish</ButtonComponent
      >
    </form> -->
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
  computed: { ...mapGetters(['newJournal']) },
  methods: {
    ...mapActions(['createJournal']),
    onSubmit() {
      const { title } = this.journal
      this.createJournal({
        title,
        description,
        createdAt: new Date().toLocaleTimeString(),
      })
    },
  },
  data() {
    return {
      journal: {
        title: '',
      },
    }
  },

  // watch: {
  //   newJournal: function () {
  //     if (this.newJournal !== null) {
  //       this.$toast.show('Success! Journal Created')

  //       this.$router.push({ name: 'journals' })
  //     }
  //   },
  // },
}
</script>
<style lang="postcss">
.textAreaStyles {
  @apply w-full px-5 focus:outline-none focus:border-blue-200 mt-2 bg-gray-50 border rounded;
}
</style>
