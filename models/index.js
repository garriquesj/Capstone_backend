// require local dependencies
const dbConfig = require("../config/db.config");

// require Sequelize
const Sequelize = require("sequelize");

// instantiate new instance of sequelize
const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
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
// db.collections = require("./collectionModel.js")(sequelize, Sequelize);
//Establishing one-to-many relationship

// db.projects.belongsToMany(db.users, {
//     through: "user_projects",
//     as: "users",
//     // foreignKey: "id"
//     });

    db.users.hasMany(db.projects, {
        // through: "user_projects",
        // as: "projects",
        foreignKey: "id"
        });
        db.projects.belongsTo(db.users);
    
// db.collections.belongsTo(db.users, {
//         through: "user_collection",
//         as: "collections",
//         // foreignKey: "user_id"
//         });
    
    
// db.collections.belongsToMany(db.users, {
//         through: "collected_projects",//relational table
//         as: "userCollection",
        
//     });//uncertain
    
    
    // export
module.exports = db;