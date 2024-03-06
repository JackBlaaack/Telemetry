beforeEach(() => {
    cy.visit("https://dev.iot.xlineview.com");
  });

const USERNAME = Cypress.env('SuperAdmin');
const PASSWORD = Cypress.env('SuperAdmin');

beforeEach(() => {
    cy.cleanData();
    cy.visit("https://dev.iot.xlineview.com");
      cy.get('input[type = "text"]').type(USERNAME);
      cy.get('input[type = "password"]').type(PASSWORD);
      cy.get('.GeneralButton_buttonDefault__S-p38').click();
})