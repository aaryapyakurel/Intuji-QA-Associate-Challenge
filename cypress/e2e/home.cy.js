// cypress/e2e/home.cy.js
import HomePage from '../pages/HomePage';

describe('Home Page Test', () => {
  it('should load the homepage and go to Signup/Login', () => {
    HomePage.visit();
    HomePage.verifyHomePage();
    HomePage.clickSignupLogin();
    cy.url().should('include', '/login');
  });
});
