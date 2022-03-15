CREATE DATABASE arcsource;
-- //resubmit models changed
CREATE TABLE users (
    user_id serial PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) UNIQUE NOT NULL, 
    bio VARCHAR (500) NOT NULL,
    freelance BOOLEAN NOT NULL
);
CREATE TABLE projects (
    
    project_name VARCHAR (50) NOT NULL,
    bio VARCHAR (500) NOT NULL, 
    drawing_urls VARCHAR (500) ARRAY,
    archModel_urls VARCHAR (500) ARRAY,
    rendering_urls VARCHAR (500) ARRAY,
    username VARCHAR NOT NULL REFERENCES users (username) ON DELETE CASCADE
    
);
CREATE TABLE collections (
    collection_id serial PRIMARY KEY,
    collection_name VARCHAR (100) NOT NULL,
    project_id INTEGER NOT NULL REFERENCES projects (project_id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE
);
ALTER TABLE users
ADD COLUMN project_id BIGINT REFERENCES projects (project_id),
ADD COLUMN  UNIQUE ( project_id)
);




INSERT INTO users (username, email, password, bio, freelance)
VALUES(
    'Json','Jsonh@gmail','Json','biooooo',true
    );
INSERT INTO projects ( project_name, bio, drawing_urls, archmodel_urls, rendering_urls, creator_id, creator_name )
VALUES(
    'JsonProject 1','a thing about a placel','{{"drawingurls1","drawingurls2"}}','{{"modelurl"}}','{{"renderingurl"}}',1, 'Json'
    );



    {
        "id": 3,
        "username": "json",
        "email": "jso@gmail",
        "password": "json",
        "bio": "wolmarian",
        "freelance": true,
        "createdAt": "2022-03-15T19:01:47.197Z",
        "updatedAt": "2022-03-15T19:01:47.197Z"
    },
    {
        "id": 2,
        "username": "eric",
        "email": "eric@gmail",
        "password": "passworderic",
        "bio": "DUUUUUUKEEEEE",
        "freelance": true,
        "createdAt": "2022-03-15T19:00:53.490Z",
        "updatedAt": "2022-03-15T19:07:13.293Z"
    },
    {
        "id": 1,
        "username": "troy",
        "email": "troy@gmail",
        "password": "password",
        "bio": "the Sonics",
        "freelance": true,
        "createdAt": "2022-03-15T18:41:05.213Z",
        "updatedAt": "2022-03-15T19:08:46.527Z"
    }



-- -------------------------------

    {
        "id": 1,
        "project_name": "troy",
        "bio": "troybio",
        "drawing_urls": null,
        "archModel_urls": null,
        "rendering_urls": null,
        "createdAt": "2022-03-15T18:44:06.832Z",
        "updatedAt": "2022-03-15T18:44:06.832Z",
        "UserId": 1
    },
    {
        "id": 2,
        "project_name": "orject 2",
        "bio": "2nd projbio",
        "drawing_urls": null,
        "archModel_urls": null,
        "rendering_urls": null,
        "createdAt": "2022-03-15T19:17:46.611Z",
        "updatedAt": "2022-03-15T19:17:46.611Z",
        "UserId": 3
    },
    {
        "id": 3,
        "project_name": "porject 4",
        "bio": "3rdprojbio",
        "drawing_urls": null,
        "archModel_urls": null,
        "rendering_urls": null,
        "createdAt": "2022-03-15T19:18:53.661Z",
        "updatedAt": "2022-03-15T19:18:53.661Z",
        "UserId": 2
    },
    {
        "id": 4,
        "project_name": "porject duke",
        "bio": "dukeprojbio",
        "drawing_urls": null,
        "archModel_urls": null,
        "rendering_urls": null,
        "createdAt": "2022-03-15T19:19:46.704Z",
        "updatedAt": "2022-03-15T19:19:46.704Z",
        "UserId": 2
    }
]
