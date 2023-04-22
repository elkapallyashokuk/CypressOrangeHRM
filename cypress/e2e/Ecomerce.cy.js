describe('Suite Name', () => {
 
  it('Verify Title', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.title().should('eq','Home Page')
  })

})