const db = require("../models");
const Project = db.projects;
const User = db.users;
const Op = db.Sequelize.Op;//whats this for

// Create and Save User_____________________________
exports.create = (req, res) => {
if (!req.body.username || !req.body.password_ || !req.body.email) {// why ois it 'or' and not 'and'
    res.status(400).send({
    message: "Content cannot be empty."
    });
    return;
}
const user = {
    username: req.body.username,
    email: req.body.email,
    password_: req.body.password_,
    bio: req.body.bio,
    likes: req.body.likes
}

User.create(user)
    .then(data => {
    res.send(data);
    })
    .catch(err => {
    res.status(500).send({
        message:
        err.message || "An error occured while creating User."
    });
    });
};

// Retrieve All Users_____________________________
exports.findAll = (req, res) => {
User.findAll()
    .then(data => {
    res.send(data);
    })
    .catch(err => {
    res.status(500).send({
        message:
        err.message || "Some error occurred while retrieving Users."
    });
    });
};
//one user_________________________________________
exports.findOne = (req, res) => {
    const id = req.params.id;

User.findAll({
    where: { id: id},//this is what specifies one
    include: "projects"
})
    .then(data => {
    if (data) {
        res.send(data);
    } else {
        res.status(404).send({
        message: `Cannot find User with id=${id}.`
        });
    }
    })
    .catch(err => {
    res.status(500).send({
        message:
        err.message || `Error retrieving User with id=${id}.`
    });
    });
};
// Update single user________________________________
exports.update = (req, res) => {
    const id = req.params.id;

User.update(req.body, {
    where: { id: id }
})
    .then(num => {
    console.log(num)
    if (num == 1) {// clarify 
        res.send({
        message: `User was updated successfully. ${num}`
        });
    } else {
        res.send({
        message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        });
    }
    })
    .catch(err => {
    res.status(500).send({
        message:
        err.message || `Error updating project with id = ${id}`
    });
    });
};
// Delete single user__________________________________
exports.delete = (req, res) => {
const id = req.params.id;

User.destroy({
    where: { id: id }
})
    .then(num => {
    if (num == 1) {
        res.send({
        message: "User deleted successfully."
        });
    } else {
        res.send({
        message: `Could not delete User with id: ${id}. User may not have been found.`
        });
    }
    })
    .catch(err => {
    res.status(500).send({
        message:
        err.message || `Could not delete project with id: ${id}.`
    });
    });
};
// ______________________________________________________
// project project to user
// Reverse of version in project.controller
// This does not override any entries

exports.setUserProject = (req, res) => {
    const userId = req.params.id
    const projectId = req.body.projectId

    User.findByPk(userId).then(user => {
        Project.findByPk(projectId).then(project => {
        user.addProject([project]);
        }).then(() => {
            res.send("user_project successfully updated");
        } 
        )
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving users."
        });
        });
    })
}

// Deletes user_project entry from user side_______________
exports.deleteUserProject = (req, res) => {
    const userId = req.params.id
    const projectId = req.body.projectId

    User.findByPk(userId).then(user => {//user.findprimarykey
    user.removeProject([projectId]);
}).then(() => {
    res.send("user_project successfully deleted");
})
    .catch(err => {
    res.status(500).send({
        message:
        err.message || "Some error occurred while deleting reference."
    });
    });
}