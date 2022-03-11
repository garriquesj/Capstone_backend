CREATE DATABASE arcsource;
-- //resubmit models changed
CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL, --research password creation and wt
    bio TEXT DEFAULT '',
    likes INTEGER DEFAULT 0,
    freelance BOOLEAN
);
CREATE TABLE projects (
    projects_id SERIAL PRIMARY KEY,
    projectName TEXT,
    bio TEXT DEFAULT '', 
    drawing_urls TEXT [] NULL,
    archModel_urls TEXT [] NULL,
    rendering_urls TEXT [] NULL,
    created_by TEXT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,--unpushed changed
    creator_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    posted_on VARCHAR(255) NOT NULL,
    like_count INTEGER DEFAULT 0
    
);
CREATE TABLE likes
(
    like_id SERIAL PRIMARY KEY,
    projects_id INTEGER NOT NULL REFERENCES projects(projects_id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    liked_on VARCHAR(255) NOT NULL
);


;
)


INSERT INTO users (username, email,password,bio,freelance)
VALUES(
    "jonDough","jdough@gmail","jonDough","biooooo",true);
