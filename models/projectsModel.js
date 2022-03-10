
module.exports = (sequelize, Sequelize) => {
    const Projects = sequelize.define("projects", { 
        projectName: {
            type: Sequelize.STRING,
        },
        bio: {
            type: Sequailze.STRING,
        },
        drawing_urls: {
            type: Sequailze.STRING,
        },
        archModel_urls: {
            type: Sequailze.STRING,
        },
        rendering_urls: {
            type: Sequailze.STRING,
        },
        rendering_urls: {
            type: Sequailze.STRING,
        },
        created_by: {
            type: Sequailze.STRING,
        },
        posted_on: {
            type: Sequailze.STRING,
        },
        like_count: {
            type: Sequailze.INTEGER,
        },
    });
    return Projects;
};