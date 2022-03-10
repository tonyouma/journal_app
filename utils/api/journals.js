const _journals = [
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
]

export default {
  async getJournals() {
    await wait(100)
    return _journals
  }
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
