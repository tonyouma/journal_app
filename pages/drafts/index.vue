<template>
  <div>
    <div class="content-wrapper">
      <p class="">You have no drafts yet</p>
      <ButtonComponent to="/new" class="link-text"
        >Start New Draft</ButtonComponent
      >
    </div>
    <div>
      <p>Display Drafts</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout(context) {
    return 'journal'
  },
  computed: {
    ...mapState('drafts', ['drafts']),
  },
}
</script>
