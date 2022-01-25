"use strict";
const { get, has } = require("lodash");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

function getContentType(types, apiID) {
  const getContentType = types.filter((item) => item.apiID === apiID);
  return getContentType;
}

module.exports = {
  importAssets: async (ctx) => {
    console.log("######### importAssets #########", ctx);
    return "hello world";
  },

  getContentTypes: async (ctx) => {
    const data = await strapi.services["import-assets"].getContentTypes(ctx);

    const contentTypes = data.filter(({ uid }) =>
      uid.startsWith("application::")
    );

    const contentType = getContentType(contentTypes, "issue");

    // [{ label: "Select Import Destination", value: "" }].concat(
    //     contentTypes.map(({ uid, info, apiID }) => ({
    //       label: info.label || apiID,
    //       value: uid,
    //     }))
    //   ),

    console.log("######### getContentTypes #########", contentType);


    // const modelOptions = models.map((model) => {
    //   return {
    //     label: get(model, ["schema", "name"], ""), // (name is used for display_name)
    //     value: model.uid, // (uid is used for table creations)
    //   };
    // });

    ctx.send({
      data: contentTypes,
    });
  },

  preAnalyzeContent: async (ctx) => {
    const { data, type } = ctx.request.body;
    console.log(data, type, "###### FROM ANALYZER ########"); 
    if (!data || !type) {
      return ctx.throw(400, "Required parameters missing");
    }

    try {
      const data = await strapi.services["import-assets"].preAnalyzeContent(ctx);
      console.log(data, "returned from service");
      ctx.send({ data, message: "ok" });
    } catch (error) {
      console.error(error);
      ctx.throw(406, `could not parse: ${error}`);
    }
  },
};
