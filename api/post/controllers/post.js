const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    const { id } = ctx.state.user;
    const entity = await strapi.services.post.create({
      ...ctx.request.body,
      author: id,
    });
    return sanitizeEntity(entity, { model: strapi.models.post });
  },

  async findOwnedPosts(ctx) {
    const { user } = ctx.state;
    console.log(user, "########## user ##########");
    if (!user) return null;
    const entities = await strapi.services.post.find({ author: user.id });
    return entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.post })
    );
    return null;
  },
};
