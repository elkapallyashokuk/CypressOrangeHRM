import { describe } from "mocha";

describe('Suite Name', () => {


    before(() => {
        // runs once before all tests in the block
        cy.log('Inside Before Block');
      })
    
      beforeEach(() => {
        // runs before each test in the block
        cy.log('Inside BeforeEach Block');
      })
    
      afterEach(() => {
        // runs after each test in the block
        cy.log('Inside AfteEach Block');
      })
    
      after(() => {
        // runs once after all tests in the block
        cy.log('Inside After Block');
  
    it('TC001', () => {
        cy.visit('https://testashok-trials79.orangehrmlive.com/auth/login')
    })

    it('TC002', () => {
        cy.visit('https://testashok-trials79.orangehrmlive.com/auth/login')
    })

    it('TC003', () => {
        cy.visit('https://testashok-trials79.orangehrmlive.com/auth/login')
    })

    it('TC004', () => {
        cy.visit('https://testashok-trials79.orangehrmlive.com/auth/login')
    })
})

})
