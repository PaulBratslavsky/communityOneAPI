module.exports = {
    query: `projectsByUser: [Project]!`,
    resolver: {
      Query: {
        projectsByUser: {
          description: "Return the projects by user",
          resolverOf: "application::project.project.find",
          resolver: async (obj, options, { context }) => {
            const currentUserID = context.state.user.id;
            const entity = await strapi.services.project.find();
            const projects = entity.filter((project) => project.developer.id === currentUserID);
            return projects;
          },
        },
      },
    },
  };
  