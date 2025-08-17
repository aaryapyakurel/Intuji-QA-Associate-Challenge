class CheckoutPage {
  proceedToCheckout() {
    cy.contains('Proceed To Checkout').click()
  }

  fillAddress(address) {
    cy.get('input[name="address"]').clear().type(address.address)
    cy.get('input[name="city"]').clear().type(address.city)
    cy.get('input[name="state"]').clear().type(address.state)
    cy.get('input[name="zipcode"]').clear().type(address.zipcode)
    cy.get('input[name="mobile_number"]').clear().type(address.phone)
  }

  fillPayment(card) {
    cy.get('input[name="name_on_card"]').type(card.name)
    cy.get('input[name="card_number"]').type(card.number)
    cy.get('input[name="cvc"]').type(card.cvc)
    cy.get('input[name="expiry_month"]').type(card.month)
    cy.get('input[name="expiry_year"]').type(card.year)
  }

  confirmOrder() {
    cy.contains('Pay and Confirm Order').click()
  }

  verifyOrderSuccess() {
    cy.contains('Order Placed!').should('be.visible')
  }
}

export default new CheckoutPage()
