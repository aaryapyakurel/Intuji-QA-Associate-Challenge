import CartPage from '../pages/CartPage'

describe('Cart and Quantity Management', () => {
  it('should add multiple items, update qty, and remove item', () => {
    cy.visit('/products')

    cy.addProductToCart(0)
    cy.addProductToCart(1)

    CartPage.openCart()
    CartPage.getCartItems().should('have.length', 2)

    // Update first item qty to 3
    CartPage.updateQuantity(0, 3)

    cy.get('.cart_info tbody tr').eq(0).find('.cart_price p').invoke('text').then(priceText => {
      const price = parseFloat(priceText.replace(/[^0-9.]/g, ''))
      CartPage.verifySubtotal(0, price * 3)
    })

    CartPage.removeItem(1)
    CartPage.getCartItems().should('have.length', 1)
  })
})
