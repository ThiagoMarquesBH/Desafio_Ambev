const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js", // Testes E2E
    supportFile: "cypress/support/e2e_commands.js", // Arquivo de suporte E2E
  },
  component: {
    specPattern: "cypress/api/**/*.cy.js", // Testes de API
    supportFile: "cypress/support/api_commands.js", // Arquivo de suporte API
  },
});
