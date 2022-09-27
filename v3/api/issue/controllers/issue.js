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
      console.log(data, "data")
      entity = await strapi.services.issue.create({ ...data, createdBy: id, status: "NEW" }, { files });
    } else {
      console.log(ctx.request.body, "body")
      entity = await strapi.services.issue.create({ ...ctx.request.body, createdBy: id, status: "NEW" });
    }
    return sanitizeEntity(entity, { model: strapi.models.issue });

  },
};
 