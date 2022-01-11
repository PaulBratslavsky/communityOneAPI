module.exports = {
  query: `
    findOwnedPosts(limit: Int): [Post]
  `,
  resolver: {
    Query: {
      findOwnedPosts: {
        description: "Return all posts by user",
        resolverOf: "application::post.post.find",
        resolver: "application::post.post.findOwnedPosts",
      },
    },
  },
};
