# Blogging Website Readme
This readme file provides an overview of the code for a simple blogging website. The website allows users to register, log in, create posts, and view existing posts. Below, you'll find information about the     code's structure, functionality, and important features.


## Introduction
This code is for a basic blogging website that includes user registration, login, post creation, and post viewing functionalities. It uses HTML, CSS, and JavaScript for the frontend. The code is organized into different sections, each responsible for specific functionality.

## File Structure
### helpers.js: 
    This file contains helper functions like formatDate, hideForm, and displayForm used throughout the code.
### data.JSON: 
    This JSON file serves as a data source for the initial posts displayed on the website.
### index.html:
    The main HTML file for the website's homepage.
### create-post.html: 
    The HTML file for creating new blog posts.
### details.html:
    The HTML file for displaying details of a specific blog post.
### styles.css:
    The CSS file for styling the website.
### script.js:
    The main JavaScript file containing the website's functionality.

## Initial Display
    The website starts by checking whether a user is logged in by inspecting localStorage.
    If no user is logged in, it displays the initial set of posts from data.JSON.
    If a user is logged in, it hides login and registration buttons and displays a logout button.

## Register Form
    Users can click on the "Register" button to display the registration form.
    The registration form checks for valid inputs and whether the username already exists.
    If successful, a new user is added to localStorage.

## Login Form
    Users can click on the "Login" button to display the login form.
    The login form validates user credentials and logs the user in if they exist in the data.
## Logout
    Clicking the "Logout" button clears the user's session and redirects to the homepage.
    It also hides the logout button and displays the login and registration buttons.

## Create Posts
    Users can click on "Create Post" to navigate to the post creation page.
    Posts can only be created when a user is logged in.
    The code redirects to the post creation page, where users can add new blog posts.

## Usage
   1. To use this code, you should serve the HTML, CSS, and JavaScript files using a web server.
   2. Make sure to place data.JSON in the same directory as your HTML files.
   3. Users can register, log in, and create posts.
   4. Existing posts are displayed on the homepage.
   5. Users can click on a post to view its details.

> <span style="font-size: 18px; color: red; font-weight: bold;">WARNING:</span> This code is meant for educational purposes and may require additional security and functionality enhancements for production use.


