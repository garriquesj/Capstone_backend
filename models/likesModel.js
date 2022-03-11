module.exports = (sequelize, Sequelize) => {
        const Likes = sequelize.define("likes", {
                liked: {
                        type: Sequelize.STRING,
                },
        });
        return Likes;
};


