const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/tests/**/**/*.cy.js", // Testes E2E
    //supportFile: "cypress/support/e2e_commands.js", // Arquivo de suporte E2E
  },
});
