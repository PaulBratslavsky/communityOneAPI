module.exports = {
    query: `currentUser: UsersPermissionsUser!`,
    resolver: {
      Query: {
        currentUser: {
          description: "Return user",
          resolverOf: "plugins::users-permissions.user.findOne",
          resolver: async (obj, options, { context }) => {
            return context.state.user;
          },
        },
      },
    },
  };
  