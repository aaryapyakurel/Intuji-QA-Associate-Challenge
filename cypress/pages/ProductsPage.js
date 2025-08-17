class ProductsPage {
  openProducts() {
    cy.contains('Products').click()
  }

  filterWomenDress() {
    cy.contains('Women').click()
    cy.contains('Dress').click()
  }

  getProductList() {
    return cy.get('.features_items .product')
  }

  openFirstProduct() {
    cy.get('.features_items .product').first().find('a').click()
  }
}

export default new ProductsPage()
