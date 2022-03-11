//export all the work the good people of controllers have to done so server can use it

const project = require("./projectsControllers");
const user = require("./userControllers");

const controllers = {
    project: project,
    user: user,
};

module.exports = controllers;