## Install

    yarn
    yarn run init # Checks file .env (contains database connection)"

## Environment

`.env` contains dev environment variables

## Run

    yarn start // api on localhost:8081

## Project Structure

    controllers/ – defines your app routes and their logic
    helpers/ – code and functionality to be shared by different parts of the project
    middlewares/ – Express middlewares which process the incoming requests before handling them down to the routes
    models/ – represents data, implements business logic and handles storage
    public/ – contains all static files like images, styles and javascript
    views/ – provides templates which are rendered and served by your routes
    tests/ – tests everything which is in the other folders
    app.js – initializes the app and glues everything together
   
