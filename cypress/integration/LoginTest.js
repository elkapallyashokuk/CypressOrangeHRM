
import { describe } from "mocha";
import LoginPage from "../PageObjects/LoginPage";
import cypress from "cypress";


describe('Test Suite', function(){

    it('Validate Login Test', function(){
        const lp = new LoginPage()
        lp.visit()
        lp.fillUserID('admin')
        lp.fillPwd('@E31QlUVqw')
        lp.login()



    })

}





)