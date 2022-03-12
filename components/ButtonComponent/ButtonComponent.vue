<template>
  <component
    :is="to ? 'nuxt-link' : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    @click="$emit('click')"
    class="flex items-center gap-x-3"
  >
    <slot name="prepend"></slot>
    <slot name="default"></slot>
    <slot name="append"></slot>
  </component>
</template>

<script>
export default {
  props: {
    to: {
      type: [String, Object],
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
  },
}
</script>
