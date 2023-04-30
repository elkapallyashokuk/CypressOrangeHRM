import { describe } from "mocha";
import LoginPage from "../cypress/e2e/PageObjects/LoginPage";



describe('Test Suite', () =>{

    it.only('Validate Login Test Using Page Object Model',() =>{
       
        const lp = new LoginPage()
        lp.visit()
        lp.setUserName('admin')
        lp.setPassword('@E31QlUVqw')
        lp.clickLogin()
    })
});