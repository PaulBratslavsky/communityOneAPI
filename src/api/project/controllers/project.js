'use strict';

/**
 * issue controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::project.project', ({ strapi }) => ({
  async projectByUser(ctx) {
    const { id } = ctx.state.user;

    ctx.request.query = {
      filters: {
        developer: id
      },
      populate: "*"
    }


    const { data, meta } = await super.find(ctx);
    return { data, meta };
  }
}));
