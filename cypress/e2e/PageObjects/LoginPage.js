class LoginPage
{

    visit()
    {
        cypress.visit("https://testashok-trials79.orangehrmlive.com/auth/login")
    }



    fillUserID(value)
    {
        const feild=cy.get('#txtUsername')
        feild.clear()
        feild.type(value)
        return this
    }
    fillPwd(value)
    {
        const feild=cy.get('#txtPassword')
        feild.clear()
        feild.type(value)
        return this
    }

    login()
    {
      const button=cy.get('button[type="submit"]')
        button.click()

    }
    
}
export default LoginPage
