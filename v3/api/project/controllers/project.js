const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    const { id } = ctx.state.user;
    console.log(id)
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.project.create({ ...data, likesCount: 0, developer: id }, { files });
    } else {
      entity = await strapi.services.project.create({ ...ctx.request.body, likesCount: 0, developer: id });
    }
    return sanitizeEntity(entity, { model: strapi.models.project });

  },
};
 