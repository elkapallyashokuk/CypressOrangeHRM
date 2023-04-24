const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')
const webpack = require('@cypress/webpack-preprocessor')

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://testashok-trials79.orangehrmlive.com/",
    setupNodeEvents(on, config) {
      on('file:preprocessor', webpack());
      allureWriter(on, config);
      return config;
    },
    env: {
      allureReuseAfterSpec: true
    }
  }
});
