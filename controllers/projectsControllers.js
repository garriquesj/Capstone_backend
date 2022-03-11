const db = require("../models");
const Project = db.articles;
const User = db.users;
const Op = db.Sequelize.Op;

// create and save projects 
exports.create = (req, res) => {
    if (!req.body.projectName || !req.body.created_by) { //maybe get rid of create by param
        res.status(400).send({
            message: "Content cannot be empty."
        });
        return;
    }
//may not to delete

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

// Search Projects by original_title
exports.findAllBySearch = (req, res) => {
    const original_title = req.query.original_title;
    
    //think ways to break up project on front pages
    
    // const focus_keywords = req.query.focus_keywords;

    var condition = original_title ? { original_title: { [Op.iLike]: `%${original_title}%` } } : null;
    // var condition2 = final_title ? { final_title: { [Op.iLike]: `%${final_title}%` } } : null;

    Article.findAll({ where: condition })
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving articles."
        });
    });
};