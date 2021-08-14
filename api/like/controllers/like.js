const { sanitizeEntity } = require('strapi-utils');

module.exports = {
    /**
     * Create a record.
     *
     * @return {Object}
     */

    async create(ctx) {

        const { user } = ctx.state;

        if (!user) return null

        const { portfolio: portfolioID } = ctx.request.body;

        const portfolio = await strapi.services.portfolio.findOne({ id: portfolioID })
        if (!portfolio) ctx.throw(400, "Post does not exist!")

        const alreadyLiked = await strapi.services.like.findOne({ user: user.id, portfolio: portfolioID })
        if (alreadyLiked) ctx.throw(400, "Already liked post!")

        const id = { id: portfolioID }
        const data = { likesCount: portfolio.likesCount + 1 }

        await strapi.services.portfolio.update(id,data)

        const entity = await strapi.services.like.create({ portfolio: portfolioID, user });
        return sanitizeEntity(entity, { model: strapi.models.like });
    },
};