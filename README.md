# Django History
Django was created in the fall of 2003, when the web programmers at the Lawrence Journal-World newspaper, Adrian Holovaty and Simon Willison, began using Python to build applications. It was released publicly in July 2005.

The framework was named after guitarist Django Reinhardt. Adrian Holovaty is a Romani jazz guitar player and a big fan of Django Reinhardt.

In June 2008, it was announced that a newly formed Django Software Foundation (DSF) would maintain Django in the future.

## Objectives
### Learning Objectives
After completing this assignment, you should be able to:

#### Models, Django admin
- Create a new Django application
- Create a Django model (create and update)
- Explain what a database is
- Explain what a model is
- Use the Django admin
- Structure the Django admin to reflect your data

#### URLS, Views, Serializers
- Map URLs to views (Django REST framework views)
- Explain what an API is
- Explain what a View is
- Explain serialization

#### Authorization & Authentication
- Implement a custom user model
- Implement authentication (dj-rest-auth)
- Implement authorization
- Explain the difference between authentication and authorization

#### Client-side application
- Implement a client-side application in your Django project (React)
- Build a responsive UI that allows users to interact with a Django REST framework API

## Details
### Deliverables
- A repo containing at least:
  - A django project with accounts, articles, and frontend apps
  - An Article model
  - Create and update views for the Article model
  - Client side React application
  - Comply with pep8 and pep20

### I am a Django Developer Mode
- Create new django project
- Cretae accounts app
- Create custom User model in accounts app
  - Update AUTH_USER_MODEL to point to your custom user model
- Create Profile model in your accounts app
  - Required fields:
    - Image field
    - One-to-one relationship (Profile => User)
- Create articles app
- Create Article model in your articles app
  - Required fields:
    - Image field
    - One-to-many relationship (Article => User)
- Create View that shows all the Article objects that have been added and allows users to create a new Article
- Create View that allows users to view, edit and delete Article objects
- Implement user specific permissions
  - Authenticated users (non-admin) may create articles
  - Authenticated users (non-admin) may view, edit and delete ONLY articles they create
    - Once an article is submitted for publication (sent to the "editor"), it can no longer be edited or deleted by the user
  - Authenticated users (admin) may view and edit submitted articles (limited editing capabilities)
    - Admin users can ONLY edit the record to indicate that it is published, archived, or rejected
    - Admin users CANNOT edit other content of an article (e.g. title and body)
  - Non authenticated users may view ONLY published articles
- Include the profile image of the user that created the article in the response from the server
- Create a frontend app
- Create React app named static inside the frontend app directory
- Create View to load build version of React application
- Use React to consume API endpoints you created in your Django project and at a minimum:
  - Allow unauthenticated users to filter articles by category
  - Visually differentiate highlighted articles within a category and non highlighted articlese
  - Allow authenticated (non-admin) users to filter their articles by phase (e.g. draft, submitted, published, etc.)
  - Allow authenticated (admin) users to filter articles by phase (e.g. submitted, published, archieved, etc.)
  - Remaining design (theme) of the site is up to you, but you MUST showcase all logic built in Django
  - Site must be repsonsive
