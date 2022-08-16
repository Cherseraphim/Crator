const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

      defaultCommandTimeout:25000,
      baseUrl: 'https://macallan-app-qa.tribehome.com/',
      chromeWebSecurity: false,
      env: {
        username: 'testautomation.exercise@tribetest.tribehome.test',
        password: '3!n3Deg&vR7@'
      }
      
  
  },
});
