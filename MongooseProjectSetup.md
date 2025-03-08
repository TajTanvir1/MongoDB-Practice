## Mongoose Project Setup

Folder Structure - Feature-Based Pattern (Modular)
The Feature-Based (Modular) Pattern is a way to structure your Node.js + Express + Mongoose project based on features or modules, instead of organizing files by type (like models, interface, routes, controllers, etc.).

/project-root
│── /src
│   │── /features
│   │   │── /users
│   │   │   │── user.model.ts
│   │   │   │── user.interface.ts
│   │   │   │── user.routes.ts
│   │   │   │── user.controller.ts
│   │   │   │── user.service.ts
│   │   │── /jobs
│   │   │   │── job.model.ts 
│   │   │   │── job.interface.ts 
│   │   │   │── job.routes.ts
│   │   │   │── job.controller.ts
│   │   │   │── job.service.ts
│   │── /config
│   │   │── db.ts
│   │── /middlewares
│   │   │── authMiddleware.ts
│── server.ts
│── package.json
│── .env


model.ts → Defines the Mongoose schema.
interface.ts → Defines the types.
routes.ts → Defines Express routes.
controller.ts → Handles business logic.
service.ts → Handles database queries and reusable logic.



# Setup

1. Create Folder 

2. Terminal - npm init -y

3. Go to websites for Install - Express, TypeScript, Mongoose, Cors npm, dotenv, 

Express - npm install express
TypeScript - npm install typescript --save-dev
Mongoose - npm install mongoose --save
Cors npm - npm i cors
dotenv - npm i dotenv

4. Need to config TS file - tsc -init

change tsconfig rootDir - "./src"
change tsconfig outDir - "./dist"


5. create in root - src (folder) , app.ts (file in src folder)

6. write in file - app.ts

    const express = require('express')
    const app = express()
    const port = 3000

    app.get('/', (req, res) => {
      res.send('Hello World!')
    })

7. write in file - server.ts

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })

8. Goto mongodb database access - add new database user
9. create .env file in root
    POST=5000
    DATABASE_URL=mongodb+srv://<db_username>:<db_password>@cluster0.g5peoxj.mongodb.net/(database name we want to create)?retryWrites=true&w=majority&appName=Cluster0

* to access .env data we need to write process.env.variableName but this is not a good practice so we,

10. Create app(folder in src) create config(folder in src/app) create index.ts(file)

11. need to use env data write in - index.ts

    import dotenv from 'dotenv'
    import path from 'path'
    
    dotenv.config({path: path.join((process.cwd(), '.env))})

    export default{
        port: process.env.PORT,
        database_url: process.env.DATABASE_URL
    }

* we can get current working directory(path) by writing - process.cwd()


12. need to connect Mongoose in - server.ts

    // const mongoose = require('mongoose'); //change to import syntax
    import mongoose from "mongoose";

    import config from "./app/config"; //auto imported when write config

    async function main() {
     await mongoose.connect(config.database_url as string);

    }

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })

13. We can change require syntax in import - app.ts
    
    // const express = require('express') 
    import express from 'express' // need to install express type declaration
            from  suggestion (npm i --save-d @type/express)

    const app : Application = express()
        //Application type will export form express
    const port = 3000

    app.get('/', (req : Request, res: Response) => { 
                //Request,Response type will export form express
      res.send('Hello World!')
    })

14. We should use try catch syntax to catch error - server.ts

    import mongoose from "mongoose";

    import config from "./app/config"; //auto imported when write config

    async function main() {
     try{
     await mongoose.connect(config.database_url as string);
     }

     app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
     })
     }catch(err){
        console.log(err)
     }

15. As we work with json so we need parser of json & need cors

    import cors from 'cors' // need to install cors type declaration
            from  suggestion (npm i --save-d @type/cors)
    import express, {Application, Request, Response} from 'express'
                    //auto imported when define types


    const app : Application = express()
    const port = 3000

    // Parsers
    app.use(express.json())
    app.use(cors())

    app.get('/', (req : Request, res: Response) => { 
      res.send('Hello World!')
    })


16. To formate code and setup eslint
    search - Typescript eslint prettier setup - https://blog.logrocket.com/linting-typescript-eslint-prettier/
    or
    https://dev.to/shafayat/-express-typescript-eslint-prettiersetup-5fhg?fbclid=IwZXh0bgNhZW0CMTAAAR16ZSmft2XrDXtvVZIRiT1bPvJOTvT47kSdMrp5sBcTDz8J8mZC20Y8kfc_aem_MnKOKaQYzgl_7N38FGonig

16.2. add in tsconfig.json file which file include & exclude
    "include": ["src"], // which files to compile
    "exclude": ["node_modules"], // which files to skip


17. to create TypeScript compiler settings - tsc --init
    This will generate a default TypeScript configuration file
    Change the config.tsc -
        rootDir = 'src'
        outDir = 'dist'

19. Install ESlint - 
    <!-- npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev -->
    npm i -D eslint@9.14.0 @eslint/js @types/eslint__js typescript typescript-eslint

20. Setup Eslint - 
        npx eslint --init
    will see a series of questions
        how would like to use? -> to check syntax & find prb
        what type of module? -> import/export
        which framework use? -> react or none of these
        use typescript? -> Yes
        Browser? -> node (if browser select press i)
        what formate want in config? -> json
        like to install? -> Yes
        package manager? -> npm

    At this point you may see that your version of eslint: "^9.14.0" has been changed in package.json to eslint: "^9.15.0"

    if that happens remove the eslint : npm remove eslint
    Then re-install: npm i -D eslint@9.14.0


20.2 add rules in .eslint.config.mjs
    in rule option -
        "no-unused-vars": "error",

20.3. ignore files - eslint.config.mjs
     {
     ignores: ["node_modules", "dist"],
     rules: {
      "no-unused-vars": "error",
        },
     },
     <!-- ]  // before 3rd array -->

20.4. add scripts to run easily
        "scripts": {
            <!-- There can be more others -->
     "lint": "eslint src/**/*.ts",
     "lint:fix": "eslint src/**/*.ts --fix"
     },

     run in terminal - npm run lint (to check errors)
     if any problem come with fixable
     run in terminal - npm run lint:fix


21. Adding Prettier
    <!-- npm install --save-dev prettier -->
    npm i -D --exact prettier

22. Prettier doesn’t need a config file, meaning you can run and use it straight away. However, if you want to set a config, you will need to create a file called .prettierrc.json in the project’s root directory, where you can define your format options.

create in root - .prettierrc.json
       {
  "semi": true, // Specify if you want to print semicolons at the end of statements
  "singleQuote": true, // If you want to use single quotes
  <!-- "arrowParens": "avoid", // Include parenthesis around a sole arrow function parameter -->
    }

    create in root - .prettierignore
        dist //will not work in dist

23. We can add for short access in script - package.json
        "format": "prettier . --write"
    run in terminal - npm run format
        to do all formatting

    <!-- We Can start formatting our code using Prettier -->
    <!-- npx prettier --write src/index.ts -->


<!-- 24. add the Prettier command to our scripts 
    "scripts": {
    "dev": "tsc --watch",
    "lint": "eslint --ext .js,.ts .",
    "format": "prettier --ignore-path .gitignore --write \"**/*.+(js|ts|json)\""
    },

Now, you can run the npm run format command to format and fix all your code

25. In VSCode, go to the extensions tab, look for the Prettier extension, and ensure it’s enabled. Once enabled, we need to configure a few things in VSCode.

You can open your command palette (Command + Shift + P) and look for Preferences: Open User Settings (JSON). Then you’ll need to change your editor’s default formatter and add an extra config to format code when you save your files:

// settings.json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  ...
} -->

