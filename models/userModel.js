module.exports = (sequelize, Sequelize) => {
        const User = sequelize.define("user", { 
        username: {
                type: Sequelize.STRING,
        },
        email: {
                type: Sequailze.STRING,
        },
        password: {
                type: Sequailze.STRING,
        },
        bio: {
                type: Sequailze.STRING,
        },
        likes: {
                type: Sequailze.INTEGER,
        }
        });
        return User;
};