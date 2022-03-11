module.exports = app => {
    const users = require("../controllers/userControllers");

    let router = require("express").Router();

    // Create new project
    router.post("/", users.create);
    

    // router.get("/", users.findAllBySearch);

    // Retrieve all Users
    router.get("/all", users.findAll);

    // Retrieve single User by ID
    router.get("/:id", users.findOne);

    // Update Single User
    router.put("/:id", users.update);
    
    // delete Single User
    router.delete("/:id", users.delete);

    // delete project for user....do i really need this though I can just delete a project already
    router.delete("/:id/deleteProject", users.deleteUserProject)
    app.use('/api/users', router);//the hell is this
    app.use('/back_end/users', router);//the hell is this
};