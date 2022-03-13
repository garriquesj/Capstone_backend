module.exports = (sequelize, Sequelize) => {
        const Collection = sequelize.define('collection', {
                collection_id: {
                        type: Sequelize.INTEGER,
                },
                collection_name:  {
                        type: Sequelize.INTEGER,
                },
                project_id:  {
                        type: Sequelize.INTEGER,
                },
                user_id:  {
                        type: Sequelize.INTEGER,
                },
        });
        return Collection;
};


