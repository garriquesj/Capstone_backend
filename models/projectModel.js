
module.exports = (sequelize, Sequelize) => {
    const Projects = sequelize.define("Project", { 
        
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
        username: {
            type: Sequelize.STRING,
            allowNull:false,
            references:{ model: 'Users', key :'username'}//connects to user table
        },
        
    });
    return Projects;
};
