const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  firefoxWebSecurity: false,
  redirectionLimit: 30,
  defaultCommandTimeout: 65000,
  viewportWidth: 1440,
  viewportHeight: 810,

  e2e: {
    baseUrl: "https://conduit-realworld-example-app.fly.dev/#",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
