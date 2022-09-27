module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/project/get/project-by-user',
      handler: 'project.projectByUser',
      config: {
        policies: [],
      }
    },
  ]
}

 