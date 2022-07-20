module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/hero-section',
      handler: 'hero-section.find',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/hero-section',
      handler: 'hero-section.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/hero-section',
      handler: 'hero-section.delete',
      config: { policies: [] }
    }
  ]
}