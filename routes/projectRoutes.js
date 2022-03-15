module.exports = app => {
    const projects = require("../controllers/projectsControllers");

    let router = require("express").Router();

    // Create new project
    router.post("/new", projects.create);
    
    // Search all projects 
    router.get("/all", projects.findAll);
    
    // Search all projects by User
    router.get("/byUser/:created_by", projects.findAllByUser);
    // Search all projects by date
    router.get("/byDate/:posted_on", projects.findAllByUser);//why by user this feels incorrect
    
    // Retrieve all projects
    // router.get("/all", projects.findAll);

    // Retrieve single project by ID
    router.get("/:id", projects.findOne);

    // Update Single project
    router.put("/:id", projects.update);
    
    // delete Single project
    router.delete("/:id", projects.delete);

    // // delete user for project
    // router.delete("/:id/deleteUser", projects.deleteProjectUser)

    app.use('/projects', router);//double check this
};