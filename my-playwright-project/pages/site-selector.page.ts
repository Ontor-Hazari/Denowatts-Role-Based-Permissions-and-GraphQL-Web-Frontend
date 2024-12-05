import { Page } from '@playwright/test';

export class SiteSelectorPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Navigate to the 'Site' page
  async navigateToSites(): Promise<void> {
    await this.page.getByRole('link', { name: 'Site', exact: true }).click();
  }

  // Fetch the count of available sites from the dropdown (UI)
  async getSiteCountFromDropdown(): Promise<number> {
    const dropdown = await this.page.getByRole('combobox');
    await dropdown.click();

    let siteList: string[] = [];
    let previousCount = 0;
    let maxScrollAttempts = 100;
    let scrollAttempts = 0;

    while (scrollAttempts < maxScrollAttempts) {
      const currentList = await this.page.$$eval('.ant-select-item', (items) =>
        items.map((item) => item.textContent?.trim() || '')
      );

      siteList = [...new Set([...siteList, ...currentList])];

      if (siteList.length === previousCount) {
        console.log('Reached the end of the dropdown.');
        break;
      }

      previousCount = siteList.length;

      await this.page.locator('.ant-select-item:last-child').scrollIntoViewIfNeeded();
      await this.page.waitForTimeout(300);

      scrollAttempts++;
    }

    return siteList.length;
  }
}
