
module.exports = (sequelize, Sequelize) => {
    const Projects = sequelize.define("projects", { 
        projectName: {
            type: Sequelize.STRING,
        },
        bio: {
            type: Sequelize.STRING,
        },
        drawing_urls: {
            type: Sequelize.STRING,
        },
        archModel_urls: {
            type: Sequelize.STRING,
        },
        rendering_urls: {
            type: Sequelize.STRING,
        },
        created_by: {
            type: Sequelize.STRING,
        },
        posted_on: {
            type: Sequelize.STRING,
        },
        like_count: {
            type: Sequelize.INTEGER,
        },
    });
    return Projects;
};