<template>
  <div>
    <!-- JSX -->
    <form>
      <input
        type="text"
        name="title"
        id="title"
        :value="journal.title"
        @input="updateAction"
      />
      <ButtonComponent type="submit">Update Journal</ButtonComponent>
    </form>
  </div>
</template>
<script>
// JS
import { mapGetters, mapActions } from 'vuex'
import ButtonComponent from '~/components/ButtonComponent/ButtonComponent.vue'
export default {
  layout(context) {
    return 'journal'
  },
  data() {
    return {
      id: null,
    }
  },
  created: function () {
    this.id = this.$route.params.id
    this.fetchJournal(this.id)
    console.log(this.id)

    debugger
  },
  computed: {
    ...mapGetters(['journal', 'newJournal']),
  },
  methods: {
    ...mapActions(['fetchJournal', 'updateJournal', 'updateJournalInput']),
    onSubmit() {
      const { title, description } = this.journal
      this.updateJournal({
        id: this.id,
        title: title,
        description: null,
        createdAt: new Date().toLocaleTimeString(),
      })
    },
    updateAction(e) {
      this.updateJournalInput(e)
    },
  },
  components: { ButtonComponent },
  watch: {
    newJournal: function () {
      if (this.newJournal !== null) {
        this.$toast.show('Journal Updated Successfully!')

        this.$router.push({ name: 'journals' })
      }
    },
  },
}
</script>
<style lang="scss"></style>
