import Page from './page';
import utl   from '../../utilities/common-utilities';


class SearchPage extends Page {

// define elements
    get searchTermInput() { return $('//input[@id="q"]');}
    get searchButtonInput() {return $('//input[@class="button-1 search-button"]');}
    get searchResultInput() {return $('//a[contains(text(),"Nintendo - Switch 32GB Console - Neon Red")]');}
    get returnResult() {return $('//h1[contains(text(),"Nintendo - Switch 32GB Console - Neon Red")]');}

    // define or overwrite page method

    open () {
        super.open('search') // this will append 'register to the base URL
        // browser.pause(3000);

        // your page specific method
    }

    search (searchterm){
        this.searchTermInput.setValue(searchterm);
        this.searchButtonInput.click();
        this.searchResultInput.click();
        
    }



    isSearchComplete()
    {
       this.returnResult.waitForDisplayed(3000);
       return this.returnResult.isDisplayed(); 
    }

}

export default new SearchPage()