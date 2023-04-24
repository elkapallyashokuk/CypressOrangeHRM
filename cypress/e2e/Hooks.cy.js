

//Before
//After
//BeforeEach
//AfterEach

describe('My Test Suite', () => {

  before(()=>{
    cy.log("*****launch App******")

  })

  after(()=>{
    cy.log("*****Close App******")

  })


  beforeEach(()=>{
    cy.log("*****Login App******")

  })

  afterEach(()=>{
    cy.log("*****Logout App******")

  })
  
    it('TC001', () => {
      cy.log("TC001");
       
    })

    it('TC002', () => {
      cy.log("TC002");
       
    })

    it('TC003', () => {
      cy.log("TC003");
        
    })

    it('TC004', () => {
      cy.log("TC004");
        
    })
})
