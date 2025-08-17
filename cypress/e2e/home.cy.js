describe('Automation Exercise - Home Page Test', () => {
  it('should load the home page and navigate to Signup/Login', () => {
    // Visit the site
    cy.visit('https://automationexercise.com/')

    // Verify homepage loaded
    cy.url().should('include', 'automationexercise.com')
    cy.contains('Home').should('be.visible')

    // Click on Signup/Login
    cy.contains('Signup / Login').click()

    // Verify URL changed to /login
    cy.url().should('include', '/login')
  })
})
