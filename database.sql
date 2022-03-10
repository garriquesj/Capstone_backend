CREATE DATABASE arcsource;

CREATE TABLE users(
    users_id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL, --research password creation
    bio TEXT DEFAULT '',
    profile_pic TEXT DEFAULT '',
    likes INTEGER DEFAULT 0,
);
CREATE TABLE projects (
    projects_id SERIAL PRIMARY KEY,
    bio TEXT DEFAULT '', 
    drawing_urls TEXT [] NULL,
    archModel_urls TEXT [] NULL,
    rendering_urls TEXT [] NULL,
    created_by INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    posted_on VARCHAR(255) NOT NULL,
    like_count INTEGER DEFAULT 0,
    
);
CREATE TABLE likes
(
    like_id SERIAL PRIMARY KEY,
    projects_id INTEGER NOT NULL REFERENCES projects(projects_id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    liked_on VARCHAR(255) NOT NULL
);







