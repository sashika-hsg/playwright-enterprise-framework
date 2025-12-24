import { HomePage } from "@pages/home.page";

export class HomeFlow {
  constructor(private readonly homePage: HomePage) {}
  async navigateToHome(): Promise<void> {
    await this.homePage.navigate();}
  async verifyHomePageTitle(): Promise<string> {
    return this.homePage.getHomeTitle();
  }
}
