const { parseMultipartData, sanitizeEntity } = require("@strapi/utils");

'use strict';
const { createCoreController } = require('@strapi/strapi').factories;
module.exports = createCoreController('api::post.post');

//   async create(ctx) {
//     const { id } = ctx.state.user;
//     const entity = await strapi.services.post.create({ ...ctx.request.body, author: id });
//     return sanitizeEntity(entity, { model: strapi.models.post });
//   },
// };
