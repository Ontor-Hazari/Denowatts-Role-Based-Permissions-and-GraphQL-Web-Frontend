import { Page } from '@playwright/test';

export class CompanyLoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(): Promise<void> {
    await this.page.goto('https://stage.portal.denowatts.com/signin');
  }

  async login(): Promise<void> {
    await this.page.getByLabel('Email').fill('domain.permission@bookingdei.com');
    await this.page.getByLabel('Password').fill('Famo445350');
    await this.page.getByRole('button', { name: 'Login' }).click();
    await this.page.waitForLoadState('networkidle');
  }
}
