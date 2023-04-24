import data from '../fixtures/OrangeHRM.json'

describe('OrangeHRM TEST', () => {
    it('Verify OrangHRM Login', () => {
    cy.visit('/auth/login')
    cy.get('#txtUsername').type(data.userName);
    cy.get('#txtPassword').type(data.pwd)
    cy.get('button[type="submit"]').click()
    cy.get("div[ng-if='!ohrmnavbar.isClickableTitle($index)']").should('have.text', 'Employee Management'); 
    cy.get('a:contains("Employee List")').click();
    cy.wait(1000)
    cy.get('a[id="addEmployeeButton"] > i.material-icons').click()
    cy.get('#first-name-box').type(data.firstName)
    cy.get('#last-name-box').type(data.lastName)
    //cy.get('div.filter-option-inner-inner').click()
    cy.get('#modal-save-button').click()  

})

});

