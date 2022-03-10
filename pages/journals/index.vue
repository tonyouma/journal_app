<template>
  <div>
    <Card
      v-for="journal of journals"
      :key="journal.id"
      :title="journal.title"
      :description="journal.description"
      :id="journal.id"
      :createdAt="journal.createdAt"
    />
  </div>
</template>

<script>
import Card from '~/components/Card/Card.vue'

export default {
  layout(context) {
    return 'journal'
  },
  components: {
    Card,
  },
  data() {
    return {
      journals: [
        {
          id: 1,
          title: 'title1',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat ipsum sunt tempora fuga quo, molestiae iste Eligendi veritatis earum porro.',
          createdAt: '01/02/2021',
        },
        {
          id: 2,
          title: 'title',
          description: 'description',
          createdAt: '01/02/2021',
        },
        {
          id: 3,
          title: 'title',
          description: 'description',
          createdAt: '01/02/2021',
        },
      ],
    }
  },
  async created() {
    try {
      //
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    addPost() {
      //
    },
  },
}
</script>
