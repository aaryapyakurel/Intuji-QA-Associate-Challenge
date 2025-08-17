import ProductsPage from '../pages/ProductsPage'

describe('Product Browsing & Filtering', () => {
  it('should filter Women > Dress and verify details', () => {
    cy.visit('/')                // go home
    ProductsPage.openProducts()  // open products page

    // Filter by Women > Dress
    ProductsPage.filterWomenDress()

    // Verify product list not empty
    ProductsPage.getProductList().should('have.length.greaterThan', 0)

    // Open first product
    ProductsPage.openFirstProduct()

    // Verify product detail page
    cy.get('.product-information h2').should('exist')
    cy.get('.product-information span span').should('contain.text', 'Rs.') // price
    cy.contains('Availability').should('be.visible')
  })
})
