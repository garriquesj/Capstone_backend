module.exports = app => {
    const projects = require("../controllers/projectsControllers");

    let router = require("express").Router();

    // Create new project
    router.post("/new", projects.create);
    
    // Search all projects 
    router.get("/all", projects.findAll);
     // Retrieve single project by ID
    router.get("/:id", projects.findOne);
    
     // Retrieve all by search gott work on these
    router.get("name/:project_name", projects.findAllBySearch);

     // Retrieve all specific user

    router.get("/byUser/:id", projects.findAllByUser);//fix
 
    // Update Single project
    router.put("/:id", projects.update);
    
    // delete Single project
    router.delete("/:id", projects.delete);

    // router.delete("/:id/deleteUser", projects.deleteProjectUser)

    app.use('/projects', router);//double check this
};