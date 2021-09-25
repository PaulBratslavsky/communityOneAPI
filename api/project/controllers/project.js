const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.project.create({ ...data, likesCount: 0 }, { files });
    } else {
      entity = await strapi.services.project.create({ ...ctx.request.body, likesCount: 0 });
    }
    return sanitizeEntity(entity, { model: strapi.project.restaurant });
  },
};
 