import CartPage from '../pages/CartPage'

describe('Cart and Quantity Management', () => {
  it('should add multiple items, update quantity, and remove item', () => {
    cy.visit('/products')

    // Add first 2 products
    cy.addProductToCart(0)
    cy.addProductToCart(1)

    // Open cart
    CartPage.openCart()

    // Verify 2 items exist
    CartPage.getCartItems().should('have.length', 2)

    // Update quantity of first product to 3
    CartPage.updateQuantity(0, 3)

    // Grab unit price of first item
    cy.get('.cart_info tbody tr')
      .eq(0)
      .find('.cart_price p')
      .invoke('text')
      .then(priceText => {
        const price = parseFloat(priceText.replace(/[^0-9.]/g, ''))
        const expectedSubtotal = price * 3
        CartPage.verifySubtotal(0, expectedSubtotal)
      })

    // Remove second item
    CartPage.removeItem(1)

    // Verify only 1 item remains
    CartPage.getCartItems().should('have.length', 1)
  })
})
