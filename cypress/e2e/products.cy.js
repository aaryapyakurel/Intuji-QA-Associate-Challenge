import ProductsPage from '../pages/ProductsPage'
import ProductDetailPage from '../pages/ProductDetailPage'

describe('Product Browsing & Filtering', () => {
  it('should filter Women > Dress and verify product details', () => {
    cy.visit('/')
    ProductsPage.openProducts()
    ProductsPage.filterWomenDress()

    ProductsPage.getProducts().should('have.length.greaterThan', 0)

    ProductsPage.openFirstProduct()
    ProductDetailPage.getProductName().should('exist')
    ProductDetailPage.getProductPrice().should('contain.text', 'Rs.')
    ProductDetailPage.getAvailability().should('be.visible')
  })
})
