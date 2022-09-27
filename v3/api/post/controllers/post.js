const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    const { id } = ctx.state.user;
    const entity = await strapi.services.post.create({ ...ctx.request.body, author: id });
    return sanitizeEntity(entity, { model: strapi.models.post });
  },
};
