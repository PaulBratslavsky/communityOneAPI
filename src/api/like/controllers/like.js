'use strict';

/**
 * issue controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::like.like', ({ strapi }) => ({
  async likedByUser(ctx) {
    const { id } = ctx.state.user;
    ctx.request.query = {
      filters: {
        user: id
      },
      populate: ['project']
    }


    const { data, meta } = await super.find(ctx);
    return { data, meta };
  }
}));
