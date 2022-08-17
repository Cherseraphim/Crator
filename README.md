
# Tribe sample test automation Framework
The sample farmework automates booking the toddler amenity.

For this framework I chose Cypress because apart from being great for unit,integrated and end-to-end testing it's architecture allows for fast and consistent tests. Configuration is also pretty easy , also ustilizing the flexible,simple mocha test farmework and chai libraries. It also supports firefox and chrome supported browsers. In the case of mocks oand stubs the popular sinon incoprorated within the cypress framework makes it a breeze.
API testing can also be done within this framework.
Also defaulted to the default spec report with this project, although other ones
like mochawsome could have been used.

Tests reside in the 'cypress/e2e' folder.

The supporting 'cast'(class libraries)  reside in 'cypress/support/menuPages/'...this represents, the different menus on the website as classes. 
I could have also represented the locators as seperate functions or classes, but sometimes simplicity is better, if it achieves the overall purpose.



## Get Started 🚀  
Install Docker

Update the './cypress.config.js' under 'env' object,with user account credentials needed to log into the site.
This file can be configured for different accounts and different environments.

ie.
env: {
        username: 'testUser',
        password: 'testpassword'
      }


## Run the tests 🔥  
run 'npm i', from root of project '/tribeFramework',

To run tests bundled as a docker image,. Make sure the './run.sh' file can be executed using: 'chmod u+x ./run.sh'.  For windows users, run from a windows terminal emulator or some related tool. Then run './run.sh'
The Docker container and image are removed after test run.

To run as a stand alone: run 'npx cypress open'




    

