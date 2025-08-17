class ProductDetailPage {
  getProductName() {
    return cy.get('.product-information h2')
  }

  getProductPrice() {
    return cy.get('.product-information span span')
  }

  getAvailability() {
    return cy.contains('Availability')
  }

  addToCart() {
    cy.contains('Add to cart').click()
  }
}

export default new ProductDetailPage()
