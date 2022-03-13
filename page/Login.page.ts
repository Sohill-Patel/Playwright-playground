
import { Page } from "@playwright/test";

export class LoginPage {
	page: Page;

	constructor(page: Page){
		this.page = page;
		
	}

	WhichMethodisCalled() {
		this.showData();
	}


	showData() {
		console.log("super method");
	}
}