Install Node LTS version

Install Typescript globaly - npm install -g typescript

As Typescript need to compile in Js version so we should select another directory to save Js files.

cmd -> tsc --init //it will show tsc config file

find "Outdir" the output should save in directory - write "dist" common practice

we can change js convert ESlint version in "target" set in "ES6"/"ES5"


Run Typescript we need -> TS Node Dev
Install from npm.js
=> npm i -g ts-node-dev

to TS run code 
=> ts-node-dev --respawn --transpile-only fileName.ts
