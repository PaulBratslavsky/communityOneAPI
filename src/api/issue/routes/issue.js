module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/issues',
      handler: 'issue.find',
      config: { policies: [] }
    },
    {
      method: 'GET',
      path: '/issues/:id',
      handler: 'issue.findOne',
      config: { policies: [] }
    },
    {
      method: 'POST',
      path: '/issues',
      handler: 'issue.create',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/issues/:id',
      handler: 'issue.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/issues/:id',
      handler: 'issue.delete',
      config: { policies: [] }
    }
  ]
}