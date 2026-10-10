require ('@playwright/test')
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{

    /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page){
        super(page);

        //Login Page Locators
        this.loginEmailInput = page.locator('form[action="/login"] input[name="email"]');
        this.loginPasswordInput = page.locator('form[action="/login"] input[name="password"]');
        this.loginButton = page.getByRole('button', {name:"Login"});
        this.loginErrorMessage = page.locator('form[action="/login"] p')

        // --- Signup Form Locators ---
        this.signupNameInput = page.getByPlaceholder('Name');
        this.signupEmailInput = page.locator('form[action="/signup"] input[name="email"]');
        this.signupButton = page.getByRole('button', { name: 'Signup' });
    }

    async goto(){
        await this.navigateTo("/login")
    }

    async login(email, password){
        await this.loginEmailInput.fill(email);
        await this.loginPasswordInput.fill(password);
        await this.loginButton.click();
    }

    async signup(name, email) {
        await this.signupNameInput.fill(name);
        await this.signupEmailInput.fill(email);
        await this.signupButton.click();
    } 
    
}