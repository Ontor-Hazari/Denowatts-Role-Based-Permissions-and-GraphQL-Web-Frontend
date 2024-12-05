import { test, expect } from '@playwright/test';
import { fetchSitesFromGraphQL } from '../../utils/backendUtils';
import { getAuthToken } from '../../utils/authUtils';
import { CompanyLoginPage } from '../../pages/login/company-login.page';
import { SiteSelectorPage } from '../../pages/site-selector.page';

test('Compare site count for Company-Based user (UI vs API)', async ({ page }) => {
  const authToken = getAuthToken('accessTokenCompany.txt');
  const apiSites = await fetchSitesFromGraphQL(authToken);
  const apiSiteCount = apiSites.length;

  console.log('Company Based User API Site Count:', apiSiteCount);

  const loginPage = new CompanyLoginPage(page);
  const siteSelectorPage = new SiteSelectorPage(page);

  await loginPage.navigate();
  await loginPage.login();

  await siteSelectorPage.navigateToSites();
  const uiSiteCount = await siteSelectorPage.getSiteCountFromDropdown();

  console.log('UI Site Count:', uiSiteCount);

  expect(uiSiteCount).toBe(apiSiteCount);
});
