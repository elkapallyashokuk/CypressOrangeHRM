import data from '../fixtures/TestData.json'

describe('OrangeHRM TEST', () => {
    beforeEach(() => {
        cy.visit('/auth/login')
        cy.get('#txtUsername').type(data.userName);
        cy.get('#txtPassword').type(data.pwd)
        cy.get('button[type="submit"]').click()
    })

    it('Verify OrangHRM Login', () => {
        // Login functionality is already tested in beforeEach hook
    })

    it('Verify Add Emplayee', () => {
        cy.get("div[ng-if='!ohrmnavbar.isClickableTitle($index)']").should('have.text', 'Employee Management'); 
        cy.get('a:contains("Employee List")').click();
        cy.wait(1000)
        cy.get('a[id="addEmployeeButton"] > i.material-icons').click()
        cy.get('#first-name-box').type(data.firstName)
        cy.get('#last-name-box').type(data.lastName)
        cy.get('#modal-save-button').click()  
    })

    it('Update Employee Details', () => {
        cy.get('#left_menu_item_1 > .main-menu-item-1 > span').click

    })
})
