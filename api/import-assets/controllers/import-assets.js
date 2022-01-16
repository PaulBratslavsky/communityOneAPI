'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  importAssets: async ctx => {
    console.log('######### importAssets #########', ctx);
    return "hello world"
  }
};
