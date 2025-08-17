class CartPage {
  openCart() {
    cy.contains('Cart').click()
  }

  updateQuantity(index, qty) {
    cy.get('.cart_info .cart_quantity_input').eq(index).clear().type(qty)
    cy.get('.cart_info .cart_quantity_input').eq(index).blur()
  }

  getCartItems() {
    return cy.get('.cart_info tbody tr')
  }

  removeItem(index) {
    cy.get('.cart_info .cart_delete a').eq(index).click()
  }

  verifySubtotal(index, expected) {
    cy.get('.cart_info tbody tr')
      .eq(index)
      .find('.cart_total_price')
      .invoke('text')
      .then(text => {
        const subtotal = parseFloat(text.replace(/[^0-9.]/g, ''))
        expect(subtotal).to.eq(expected)
      })
  }
}

export default new CartPage()
