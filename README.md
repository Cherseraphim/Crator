
# Tribe sample test automation Framework
The sample farmework automates booking the toddler amenity.

For this framework I chose Cypress because apart from being great for unit,integrated and end-to-end testing it's architecture allows for fast and consistent tests. Configuration is also pretty easy , and also ustilizes the flexible,simple mocha test framework and chai assertion framework . It also supports firefox and chrome related browsers. In the case of mocks and stubs, the popular sinon library is incorporated within the cypress framework.
API testing can also be achieved Cypress.

I defaulted to the default spec report with this project, although other ones
like mochawesome could have been used.

Tests reside in the 'cypress/e2e' folder.

The supporting 'cast'(class libraries)  reside in 'cypress/support/menuPages/'...this represents, the different menus on the website as classes.

I could have also represented the locators as seperate functions or classes, but sometimes simplicity is better, and so did not for this project.



## Get Started 🚀  

Install Docker

run 'npm i', from root of project '/tribeFramework'

Update the './cypress.config.js' under 'env' object,with user account credentials needed to log into the site.

This file can be configured for different accounts and different environments.

ie.
env: {
        username: 'testUser',
        password: 'testpassword'
      }


## Run the tests 🔥 

To run as a stand alone: run 'npx cypress open'

With docker image:
Run 'chmod u+x ./run.sh' to make the file executable.  For windows users, run from a windows terminal emulator or some related tool. 
Then run './run.sh' to start tests
The Docker container and image are removed after test run.






    

