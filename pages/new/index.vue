<template>
  <div class="w-full">
    <h1>Create New Journal</h1>
    <NewJournalForm />
  </div>
</template>

<script>
import NewJournalForm from '~/components/Forms/NewJournalForm/index.vue'
export default {
  layout(context) {
    return 'journal'
  },
  components: { NewJournalForm },
}
</script>
