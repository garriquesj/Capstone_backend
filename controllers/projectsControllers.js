const db = require("../models");
const Project = db.articles;
const User = db.users;
const Op = db.Sequelize.Op;

// create and save projects 
exports.create = (req, res) => {
    if (!req.body.projectName || !req.body.created_by) { 
        res.status(400).send({
            message: "Content cannot be empty."
        });
        return;
    }
const project = {
    projectname: req.body.projectname,
    bio: req.body.bio,
    drawing_urls: req.body.drawing_urls,
    archModel_urls: req.body.archModel_urls,
    rendering_urls: req.body.rendering_urls,
    created_by: req.body.created_by,
    posted_on: req.body.posted_on,
    like_count: req.body.like_count, 
}
//create project
Project.create(project)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({//why 500
        message:
            err.message || "An error occured while creating project."
        });
    });
};    

// Search Projects by project name incase more than one project has the ssame name to return them 
exports.findAllBySearch = (req, res) => {
    const projectName = req.query.projectName;
    
    //think up ways to break up project on front pages
    //each route will grab a url model to rep categories

    let condition = projectName ? { projectName: { [Op.iLike]: `%${projectName}%` } } : null;//research ilike
    //or i could do where project name =project name confere with howie to see which is more effieceint

    Project.findAll({ where: condition })
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving projects by title."
        });
    });
};


// all projects
    exports.findAll = (req, res) => {

    Project.findAll()
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving projects."
        });
    });
};

// Find individual project by ID
    exports.findOne = (req, res) => {
    const id = req.params.id;

    Project.findAll({
        where: { id: id},
        include: "users"
    })
        .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
            message: `Cannot find Project with id=${id}.`
            });
        }
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || `Error retrieving Project with id=${id}.`
        });
        });
    };

    exports.findAllByUser = (req, res) => {
    const created_by = req.params.created_by;
    
    Project.findAll({
        where: {
        created_by: created_by
        }
    })
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving projects by creator."
        });
        });
    };
// find by date
    exports.findAllByDate = (req, res) => {
        const posted_on = req.params.posted_on;

        Project.findAll({
            where: {
            posted_on: posted_on
            }
        })
            .then(data => {
            res.send(data);
            })
            .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving projects by date."
            });
            });
        };
    
    // Update single article
    exports.update = (req, res) => {
    const id = req.params.id;
    
    Project.update(req.body, {
        where: { id: id }
    })
        .then(num => {
        if (num == 1) {
            res.send({
            message: "Project was updated successfully."
            });
        } else {
            res.send({
            message: `Cannot update Projrct with id=${id}. Maybe Project was not found or req.body is empty!`
            });
        }
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || `Error updating user with id = ${id}`
        });
        });
    };
    
    // Delete single project
    exports.delete = (req, res) => {
        const id = req.params.id;
    
        Project.destroy({
        where: { id: id }
    })
        .then(num => {
        if (num == 1) {
            res.send({
                message: "Project deleted successfully."
            });
        } else {
            res.send({
                message: `Could not delete Projectwith id: ${id}. Project may not have been found.`
                });
            }
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || `Could not delete user with id: ${id}.`
            });
        });
    };
    
    // Set Article's User
    

    // Deletes user_project entry from article side
    exports.deleteProject = (req, res) => {
    const projectId = req.params.id
    const userId = req.body.userId
    
    Project.findByPk(projectId).then(project => {
        project.removeUser([userId]);
    }).then(() => {
        res.send("user_project successfully deleted");
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while deleting reference."
        });
    });
};