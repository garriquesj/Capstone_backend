module.exports = (sequelize, Sequelize) => {
        const User = sequelize.define("user", { 
        username: {
                type: Sequelize.STRING,
        },
        email: {
                type: Sequelize.STRING,
        },
        password: {
                type: Sequelize.STRING,
        },
        bio: {
                type: Sequelize.STRING,
        },
        likes: {
                type: Sequelize.INTEGER,//i need to re configure likes
        }
        });
        return User;
};