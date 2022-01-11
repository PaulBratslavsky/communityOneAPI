module.exports = {
  query: `
    findOwnedPosts(limit: Int): [Post]
  `,
  resolver: {
    Query: {
      findOwnedPosts: {
        description: "Return all posts by user",
        resolver: "application::post.post.findOwnedPosts",
      },
    },
  },
};
