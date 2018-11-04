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
- Use `npm run watch` to run webpack in order to setup local environment

- For build version run `npm run build`

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
