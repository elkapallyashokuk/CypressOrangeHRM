class LoginPage
{

    visit()
    {
        cy.visit("https://testashok-trials79.orangehrmlive.com/auth/login")
    }
    setUserName(userName)
    {
        cy.get('#txtUsername').type(userName)
      }
    setPassword(password)
    {
        cy.get('#txtPassword').type(password)

    }
    clickLogin()
    {
    cy.get('button[type="submit"]').click()

    }
    
}
export default LoginPage;
