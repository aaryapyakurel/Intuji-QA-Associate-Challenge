import CheckoutPage from '../pages/CheckoutPage'

describe('Checkout Flow with Fake Payment', () => {
  it('should complete checkout with fake card', () => {
    cy.visit('/checkout')

    // Fill fake address
    const address = { address: '123 Test Street', city: 'Kathmandu', state: 'Bagmati', zipcode: '44600', phone: '9800000000' }
    CheckoutPage.fillAddress(address)

    // Fake payment
    const card = { name: 'Test User', number: '4242424242424242', cvc: '123', month: '12', year: '2028' }
    CheckoutPage.fillPayment(card)

    CheckoutPage.confirmOrder()
    CheckoutPage.verifyOrderSuccess()
  })
})
