import HomePage from '../pages/HomePage'

describe('Logout and Re-login', () => {
  it('should log out and log back in', () => {
    cy.fixture('user').then(user => {
      cy.login(user.email, user.password)

      HomePage.logout()
      cy.contains('Signup / Login').should('be.visible')

      cy.login(user.email, user.password)
      HomePage.isLoggedIn()
    })
  })
})
