module.exports = (sequelize, Sequelize) => {
        const Likes = sequelize.define("likes", {
                liked_on: {
                        type: Sequelize.STRING,
                },
        });
        return Likes;
};


