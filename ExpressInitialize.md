Install Express
    npm i express

Install TypeScript (as Dependency)
    npm i -D typescript

Set Root - src (create app folder and app,server file in app folder)
Set Outdir - dist

Import express and download necessary dependency

Terminal - tsc -w (to track every changes of ts file)

Install Nodemon
    npm i -D nodemon

Run server - node dst/app/server

Add in package.json
    "scripts": {
    "start": "node dist/app/server.js",
    "dev": "nodemon --ext ts --exec ts-node src/app/server.js",
    "build": "tsc"
  }

Terminal (to auto update)
    nodemon start dev
