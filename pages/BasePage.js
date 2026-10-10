export class BasePage{

    /**
 * @param {import('@playwright/test').Page} page
 */
    
    constructor(page){
        this.page = page
    }

    async navigateTo(path=''){
        await this.page.goto(path);
    }

    async pageTitle(){
        await this.page.title();
    }

    async waitForPageLoad(){
        await this.page.waitForPageLoad('domcontentloaded');
    }
}