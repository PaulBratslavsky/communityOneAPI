'use strict';

/**
 * issue controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::issue.issue', ({strapi}) => ({
    async create(ctx) {
      const { id } = ctx.state.user;
      ctx.request.body =  { ...ctx.request.body, createdBy: id, status: "NEW" }
      const { data, meta } = await super.create(ctx);
      return { data, meta };
    }
}));