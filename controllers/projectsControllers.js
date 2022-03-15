const db = require("../models");
const Project = db.projects;
const User = db.users;
const Op = db.Sequelize.Op;

// create and save projects 
exports.create = (req, res) => {
    console.log(req.body);
    if (!req.body.project_name ||!req.body.bio || !req.body.UserId) { 
        res.status(400).send({
            message: "Content cannot be empty."
        });
        return;
    }
const project = {
    project_name: req.body.project_name,
    bio: req.body.bio,
    // drawing_urls: req.body.drawing_urls,
    // archModel_urls: req.body.archModel_urls,
    // rendering_urls: req.body.rendering_urls,
    UserId: req.body.UserId,
    
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
    const project_name = req.query.project_name;
    
    //think up ways to break up project on front pages
    //each route will grab a url model to rep categories

    // let condition = project_name ? { project_name: { [Op.iLike]: `%${project_name}%` } } : null;//research ilike
    //or i could do where project name =project name confere with howie to see which is more effieceint

    Project.findAll({ where: project_name })
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


// all projects______________________________________
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

    Project.findOne({
        where: { id: id}
        // ,
        // include: "project_name"
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
    const UserId = req.params.UserId;
    let condition = UserId ? { UserId: { [Op.iLike]: `%${UserId}%` } } : null;
    Project.findAll({ where: condition })
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving projects by this user."
        });
        });
    };
// find by date
    exports.findAllByName = (req, res) => {
        const project_name = req.params.project_name;

        Project.findAll({
            where: {
            project_name: project_name
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
    
    // Update single proj
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
    

    

    // Deletes user_project entry from project side
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