import { faker } from '@faker-js/faker'

// Generate random user
Cypress.Commands.add('generateUser', () => {
  return {
    name: faker.person.firstName(),
    email: `test_${Date.now()}@example.com`,
    password: `Pass@${Math.floor(Math.random() * 9000) + 1000}`
  }
})

// Register user
Cypress.Commands.add('register', (user) => {
  cy.visit('/signup')
  cy.get('input[data-qa="signup-name"]').type(user.name)
  cy.get('input[data-qa="signup-email"]').type(user.email)
  cy.get('button[data-qa="signup-button"]').click()

  // Account details
  cy.get('#id_gender1').click()
  cy.get('input[data-qa="password"]').type(user.password)
  cy.get('select[data-qa="days"]').select('10')
  cy.get('select[data-qa="months"]').select('May')
  cy.get('select[data-qa="years"]').select('1998')
  cy.get('input[data-qa="first_name"]').type(user.name)
  cy.get('input[data-qa="last_name"]').type('Tester')
  cy.get('input[data-qa="address"]').type('123 Test Street')
  cy.get('input[data-qa="state"]').type('Bagmati')
  cy.get('input[data-qa="city"]').type('Kathmandu')
  cy.get('input[data-qa="zipcode"]').type('44600')
  cy.get('input[data-qa="mobile_number"]').type('9800000000')

  cy.get('button[data-qa="create-account"]').click()
  cy.contains('Account Created!').should('be.visible')
  cy.get('a[data-qa="continue-button"]').click()
  cy.contains('Logged in as').should('be.visible')
})

// Save cookies
Cypress.Commands.add('saveSession', () => {
  cy.getCookies().then(cookies => {
    cy.writeFile('cypress/fixtures/sessionCookies.json', cookies)
  })
})

// Login
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login')
  cy.get('input[data-qa="login-email"]').type(email)
  cy.get('input[data-qa="login-password"]').type(password)
  cy.get('button[data-qa="login-button"]').click()
  cy.contains('Logged in as').should('be.visible')
})

// Add to cart by index
Cypress.Commands.add('addProductToCart', (index) => {
  cy.get('.features_items .product').eq(index).find('.add-to-cart').click()
  cy.contains('Continue Shopping').click()
})
