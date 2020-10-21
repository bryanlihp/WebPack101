# WebPack 101

This is simple js application to show how to set webpack

1. Default input and output 
   input:  ./src/index.js 
   outpout ./dist/main.js (webpack will create the folder and the bundle file "main.js")
   default config file ./webpack.config.js

   Git commands: 
        git init  -- create git repository
        git add . -- add all files to repositary (add to staging)
        git commit -m "message"  -- commit 
        git remote add origin git@.....
    Create the input input files 
        src/index.js
        src/message.js
    run "npx webpack", the result "main.js" is generated in ./dist folder.
2. Specify input and out put in webpack.config.js
   Git commands:
    git checkout -b branchname (git branck branchname, git switcgh -c branckname)
    git push --set-upstream origin branchname
   The default config file is "webpack.config.js", or you can use command line option --config to specify one:
        npm webpack --config ./sample.js
   module.export defines the entry point and output
   - Single entry/output  
        ```
        {

        const path = require('path');
        {
            module.exports = {
                entry:"./src/index.js",
                output: {
                    path: path.resolve(__dirname,'stage'),
                    filename: "bundle.js"
                }
            }         
        }
        }
        ```
   - Multiple Entry Points/Outputs
     Add messages1.js and index1.js
     index.js references  messages.js and messages1.js
     index1.js refrecnces only messages1.js

     

     
    

