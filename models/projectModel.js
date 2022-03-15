
module.exports = (sequelize, Sequelize) => {
    const Projects = sequelize.define("projects", { 
        
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
        // UserId: {
        //     type: Sequelize.INTEGER,
        //     allowNull:false,
        //     references:{ model: 'users', key :'id'}//connects to user table
        // },
        
    });
    return Projects;
};
