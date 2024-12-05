import { test, expect } from '@playwright/test';
import { fetchSitesFromGraphQL } from '../../utils/backendUtils';
import { getAuthToken } from '../../utils/authUtils';
import { SuperAdminLoginPage } from '../../pages/login/super-admin-login.page';
import { SiteSelectorPage } from '../../pages/site-selector.page';

test('Compare site count for Super Admin (UI vs API)', async ({ page }) => {
  const authToken = getAuthToken('accessTokenSuperAdmin.txt');
  const apiSites = await fetchSitesFromGraphQL(authToken);
  const apiSiteCount = apiSites.length;

  console.log('API Site Count:', apiSiteCount);

  const loginPage = new SuperAdminLoginPage(page);
  const siteSelectorPage = new SiteSelectorPage(page);

  await loginPage.navigate();
  await loginPage.login();

  await siteSelectorPage.navigateToSites();
  const uiSiteCount = await siteSelectorPage.getSiteCountFromDropdown();

  console.log('UI Site Count:', uiSiteCount);

  expect(uiSiteCount).toBe(apiSiteCount);
});
