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

        const { project: projectID } = ctx.request.body;

        const project = await strapi.services.project.findOne({ id: projectID })
        if (!project) ctx.throw(400, "Post does not exist!")

        const ifLiked = await strapi.services.like.findOne({ user: user.id, project: projectID })

        if (ifLiked) {
            const id = { id: projectID }
            const data = { likesCount: project.likesCount - 1 }
            await strapi.services.project.update(id,data)

            const entity = await strapi.services.like.delete({ id: ifLiked.id });
            return sanitizeEntity(entity, { model: strapi.models.like });
        } else {
            const id = { id: projectID }
            const data = { likesCount: project.likesCount + 1 }
            await strapi.services.project.update(id,data)

            const entity = await strapi.services.like.create({ project: projectID, user });
            return sanitizeEntity(entity, { model: strapi.models.like });
        }
        
    },
};
