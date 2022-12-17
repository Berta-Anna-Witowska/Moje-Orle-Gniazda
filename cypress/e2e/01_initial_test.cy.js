// const {contains} = require("cypress/types/jquery");

describe("Application successfull works", () => {
  it("Should visit and render my website", () => {
    cy.visit("https://mojeorlegniazda.netlify.app/");
    cy.contains("Eksploruj").should("exist");
  });
});
