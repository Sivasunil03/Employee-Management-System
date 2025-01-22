# Employee-Management-System
This is a web-based CRUD (Create, Read, Update, Delete) application for managing employee records. Built using Node.js, Express, MongoDB, and EJS, the system 

# Introduction

The Employee Management System is a web-based CRUD application designed for managing employee records. This application enables users to perform the following operations:

    Add employee details.
    View a list of all employees.
    Update employee records.
    Delete employee records.

The project is built using Node.js, Express.js, MongoDB, and EJS (Embedded JavaScript) for server-side rendering.

# Features

Add Employees: Create new employee records with details such as Employee ID, Name, Position, and Salary.List Employees: View all existing employee records in a tabular format. Update Records: Modify details of an existing employee. Delete Employees: Remove employee records from the database.


# Implementation Details
Backend (Node.js and Express)

Database Connection:
        Handled in connection.js using Mongoose.
        MongoDB connection string is retrieved from .env.

Controller (controller.js):
        Handles business logic for each CRUD operation:
            Create: Save new employee records to the database.
            Read: Retrieve all or specific employee records.
            Update: Modify existing employee details using the employee ID.
            Delete: Remove records based on the employee ID.

Routes (router.js):
        Defines routes for API endpoints and views:
            / – Render the list of all employees.
            /add-user – Render the form to add a new employee.
            /update-user – Render the form to update an employee's details.
            /api/users – API routes for CRUD operations.

Frontend (EJS Templates and AJAX)

 Dynamic Rendering:
        EJS Templates: Used to generate HTML with dynamic data from the server.
            index.ejs: Displays the list of all employees.
            add_user.ejs: Form for adding new employees.
            update_user.ejs: Pre-filled form for updating employee details.

 AJAX Requests:
        index.js contains AJAX logic for updating and deleting employees without reloading the page.

Styling:
        Basic styling is provided in assets/css/style.css.


# Project Structure
    project-folder/
    ├── assets/
    │   ├── css/
    │   │   └── style.css     # Styles for the UI
    │   ├── img/              # Placeholder for images
    │   ├── js/
    │       └── index.js      # Client-side JavaScript for AJAX requests
    ├── server/
    │   ├── controller/
    │   │   └── controller.js # Contains backend logic for CRUD operations
    │   ├── database/
    │   │   └── connection.js # MongoDB connection logic
    │   ├── model/
    │   │   └── model.js      # Mongoose schema for employee records
    │   └── routes/
    │       └── router.js     # Routes for rendering views and API endpoints
    ├── views/
    │   ├── include/
    │   │   ├── _header.ejs   # Header template
    │   │   ├── _footer.ejs   # Footer template
    │   │   └── _show.ejs     # Template for rendering user data rows
    │   ├── index.ejs         # Main view showing all users
    │   ├── add_user.ejs      # View for adding a new user
    │   └── update_user.ejs   # View for updating an existing user
    ├── .env                  # Environment variables
    ├── package.json          # Project dependencies and scripts
    ├── server.js             # Entry point for the application
    └── README.md             # Project documentation

# API Endpoints
    Method	Endpoint	Description
    GET	/api/users	Fetch all employee records.
    GET	/api/users/:id	Fetch a specific employee by ID.
    POST	/api/users	Add a new employee.
    PUT	/api/users/:id	Update an existing employee by ID.
    DELETE	/api/users/:id	Delete an employee by ID.

# Setup and Installation

Follow these steps to set up and run the project:
Prerequisites

    Node.js (v14 or later)
    MongoDB Cloud (or local MongoDB instance)
    Git

Installation

Clone the repository:

    git clone https://github.com/Sivasunil03/Employee-Management-System/
    cd project-folder

Install dependencies:

    npm install

Configure the environment variables:

    Create a .env file in the project root.
    Add the following:

    PORT=3000
    MONGO_URI=<your_mongoDB_connection_string>

Start the server:

    npm start

Open the application in your browser:

    http://localhost:3000
