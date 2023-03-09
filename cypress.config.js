const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://courses.ultimateqa.com/users/',
    
  },
});
