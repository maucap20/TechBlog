Description

This project is a CMS-style blog site where developers can publish their thoughts, blog posts, and interact with others through comments. The site is built from scratch following the Model-View-Controller (MVC) architectural pattern. It utilizes Handlebars.js for templating, Sequelize as the ORM to interact with the database, and express-session for authentication. The application allows users to create accounts, publish blog posts, and comment on other posts. The site is fully deployed on Render.
Installation

    Clone the repository:
        Clone this repository to your local machine.

    Install dependencies:
        Initialize Node.js by running the following command:

        bash

npm init -y

Install the necessary dependencies:

bash

    npm install

Configure environment variables:

    Create a .env file in the root directory with the following content:

    makefile

    DB_NAME=your_database_name
    DB_USER=your_database_username
    DB_PASSWORD=your_database_password

Set up the database:

    Use PostgreSQL to create the database:

    bash

psql -U postgres

Run the schema to set up the database structure:

bash

    \i schema.sql

Seed the database:

    Seed the database with test data:

    bash

        npm run seed

Usage

    Start the application:
        Run the following command in your terminal to start the application:

        bash

        npm start

    Access the application:
        Open your web browser and navigate to http://localhost:3001 to access the blog site.

    Test the API endpoints:
        You can use tools like Insomnia or Postman to test the API routes.

Features

    Users can sign up and log in to the platform.
    Logged-in users can create, update, and delete their blog posts.
    Users can view, comment on, and interact with other developers' posts.
    The platform has secure authentication with session management.
    The blog posts are displayed with the title, content, username, and the date created.

Deployed Link

    https://maucap20.github.io/TechBlog/ 