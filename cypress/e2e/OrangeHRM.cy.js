describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://testashok-trials79.orangehrmlive.com/auth/login')
    cy.get('#txtUsername').type('admin');
    cy.get('#txtPassword').type('@E31QlUVqw');
    cy.get('button[type="submit"]').click();
    cy.get("div[ng-if='!ohrmnavbar.isClickableTitle($index)']").should('have.text', 'Employee Management'); 
    cy.get('a:contains("Employee List")').click();
    cy.wait(1000)
    cy.get('a[id="addEmployeeButton"] > i.material-icons').click()
    cy.get('#first-name-box').type('FirstName');
    cy.get('#last-name-box').type('LaststName');

    // Click on the dropdown to open it
cy.get('div.filter-option-inner-inner').click();
cy.get('#modal-save-button').click();  
cy.get('').click();

  })
})

