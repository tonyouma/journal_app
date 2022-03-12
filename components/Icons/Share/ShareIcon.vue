<template>
  <share-2-icon
    size="1.0x"
    class="text-blue-400"
    @click="$emit('click')"
  ></share-2-icon>
</template>

<script>
import { Share2Icon } from 'vue-feather-icons'

export default {
  components: {
    Share2Icon,
  },
}
</script>
