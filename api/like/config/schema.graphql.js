module.exports = {
  query: `likedByUser: [Like]!`,
  resolver: {
    Query: {
      likedByUser: {
        description: "Return the likes by user",
        resolverOf: "application::like.like.find",
        resolver: async (obj, options, { context }) => {
          const currentUserID = context.state.user.id;
          const entity = await strapi.services.like.find();
          const likes = entity.filter((like) => like.user.id === currentUserID);
          return likes;
        },
      },
    },
  },
};
