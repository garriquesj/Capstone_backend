
module.exports = (sequelize, Sequelize) => {
    const Projects = sequelize.define("projects", { 
        project_id: {
            type: Sequelize.INTEGER,
        },
        project_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        bio: {
            type: Sequelize.STRING,
            allowNull: false
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
        creator_id: {
            type: Sequelize.INTEGER,
        },
        creator_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        like_count: {
            type: Sequelize.INTEGER,
        },
    });
    return Projects;
};
