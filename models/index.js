// require local dependencies
const dbConfig = require("../config/db.config");

// require Sequelize
const Sequelize = require("sequelize");

// instantiate new instance of sequelize
const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    logging: (...msg) => console.log(msg),
    // @TODO what is pool??
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

// create DB object for export
const db = {};

// add Sequelize to DB object
db.Sequelize = Sequelize;

// add sequelize to DB object
db.sequelize = sequelize;

// require DB models
db.projects = require("./projectModel")(sequelize, Sequelize);
db.users = require("./userModel.js")(sequelize, Sequelize);
db.likes = require("./collectionModel.js")(sequelize, Sequelize);
//Establishing many-to-many relationship
// @TODO Look into establishing many-to-many and finding join table
db.projects.belongsTo(db.users, {
    through: "user_projects",
    as: "users",
    // foreignKey: "user_id"
    });

db.likes.belongsTo(db.users, {
        through: "user_likes",
        as: "users",
        // foreignKey: "user_id"
        });
    
    
// db.collections.belongsToMany(db.projects, {
//         through: "collected_projects",//relational table
//         as: "userCollection",
        
//     });//uncertain
    
    
    // export
module.exports = db;