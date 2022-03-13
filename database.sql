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
    project_id serial PRIMARY KEY,
    project_name VARCHAR (50) NOT NULL,
    bio VARCHAR (500) NOT NULL, 
    drawing_urls VARCHAR (500) ARRAY,
    archModel_urls VARCHAR (500) ARRAY,
    rendering_urls VARCHAR (500) ARRAY,
    creator_id INTEGER NOT NULL REFERENCES users (user_id) ON DELETE CASCADE,
    creator_name VARCHAR NOT NULL REFERENCES users (username) ON DELETE CASCADE,
    like_count INTEGER DEFAULT 0  
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
