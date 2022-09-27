const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'v8jdmp',
  e2e: {
    baseUrl: "https://github.com/AthosFB",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

})