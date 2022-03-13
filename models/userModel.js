module.exports = (sequelize, Sequelize) => {
        const User = sequelize.define("user", { 
        user_id: {
                type: Sequelize.INTEGER,
                allowNull: false
        },
        username: {
                type: Sequelize.STRING,
                allowNull: false
        },
        email: {
                type: Sequelize.STRING,
                allowNull: false
        },
        password: {
                type: Sequelize.STRING,
                allowNull: false
        },
        bio: {
                type: Sequelize.STRING,
                allowNull: false
        },
        freelance:{
                type: Sequelize.BOOLEAN,
                allowNull: false
        }
        });
        return User;
};