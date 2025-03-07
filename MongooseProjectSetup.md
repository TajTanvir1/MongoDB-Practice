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


    



