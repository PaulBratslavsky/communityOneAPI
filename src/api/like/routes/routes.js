module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/likes/get/liked-by-user',
      handler: 'like.likedByUser',
      config: {
        policies: [],
      }
    },
  ]
}

 