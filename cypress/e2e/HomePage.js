// cypress/pages/HomePage.js
class HomePage {
  visit() {
    cy.visit('https://automationexercise.com/');
  }

  clickSignupLogin() {
    cy.contains('Signup / Login').click();
  }

  verifyHomePage() {
    cy.url().should('include', 'automationexercise.com');
    cy.get('body').should('contain.text', 'AutomationExercise');
  }
}

export default new HomePage();
