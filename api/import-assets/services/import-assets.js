'use strict';
const _ = require('lodash');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */
const { parseDataFromContent, analyze } = require('./utils');


module.exports = {
  getContentTypes: async (ctx) => {
    const { kind } = ctx.query;
  
    const contentTypeService = strapi.plugins['content-type-builder'].services.contenttypes;

    const contentTypes = Object.keys(strapi.contentTypes)
      .filter(uid => !kind || _.get(strapi.contentTypes[uid], 'kind', 'collectionType') === kind)
      .map(uid => contentTypeService.formatContentType(strapi.contentTypes[uid]));

    return contentTypes;
  },
  
  preAnalyzeContent: (ctx) => {
    const { data } = ctx.request.body;
    const items = parseDataFromContent({ data });
    const fieldsInfo = analyze(items);
    return { fieldsInfo, parsedData: items };
  },
};
