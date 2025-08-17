describe('User Registration & Session Handling', () => {
  it('should register a new user with faker and save session', () => {
    const user = cy.generateUser()

    cy.wrap(user).then(u => {
      cy.register(u)
      cy.saveSession()
      cy.writeFile('cypress/fixtures/user.json', u)
    })
  })
})
