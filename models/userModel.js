
module.exports = (sequelize, Sequelize) => {
        const Users = sequelize.define("User", { 
        username: {
                type: Sequelize.STRING,
                unique: true,
                // allowNull: false
        },
        email: {
                type: Sequelize.STRING,
                // allowNull: false
        },
        password: {
                type: Sequelize.STRING,
                // allowNull: false
        },
        bio: {
                type: Sequelize.STRING,
                // allowNull: false
        },
        freelance:{
                type: Sequelize.BOOLEAN,
                // allowNull: false
        
        }
        });
        return Users;
};