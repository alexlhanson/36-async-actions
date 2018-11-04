List Maker
===

## Description 
- Uses React to create an Application for tracking budgets
  - `App` has a dashboard route
    - `/todo` for `Dashboard` component
    - `/welcome/signup' and `/welcome/login` for `Landing Component`
  - `Dashboard` component has children components for:
    - `List-Form` which adds new lists
      - `[List-Item]` which is a list item, handles category delete
        - `List-Form` A form for updating lists.  It updates on submit.
  - `Landing` component has children components for:
    - `Auth-Form` component which handles login and signup.
## Setup
- Fork/clone git repository and run npm install in frontend directory
- Fork/clone git repository and run npm install in backend directory
- Setup frontend .env file with:
  - `API_URL=http://localhost:choose your port`
  - `PORT=choose your port`
- Setup backend .env file with:
  - `MONGODB_URI=mongodb://localhost/todoAppDemo`
  - `PORT=choose your port`
  - `SECRET=choose your secret` 
- Use `npm run watch` from frontend folder to run webpack in order to setup local environment for front end.
- Use `node index.js` to run backend from backend folder.
- For build version run `npm run build`.

## Tools Used
- React
- Bootstrap
- FontAwesome
- Redux
  - Middleware: Logger
  - Middleware: Thunk
- Node
- Webpack
- Babel

### Credits

- Created by Alex Hanson
