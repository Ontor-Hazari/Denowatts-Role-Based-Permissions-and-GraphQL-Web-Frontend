import { test, expect } from '@playwright/test';
import { fetchSitesFromGraphQL } from '../../utils/backendUtils';
import { getAuthToken } from '../../utils/authUtils';
import { GuestLoginPage } from '../../pages/login/guest-login.page';
import { SiteSelectorPage } from '../../pages/site-selector.page';

test('Compare site access for Guest user (UI vs API)', async ({ page }) => {
  const authToken = getAuthToken('accessTokenGuest.txt');
  const apiSites = await fetchSitesFromGraphQL(authToken);
  const apiSiteCount = apiSites.length;

  console.log('API Site Count for Guest:', apiSiteCount);

  const loginPage = new GuestLoginPage(page);
  const siteSelectorPage = new SiteSelectorPage(page);

  await loginPage.navigate();
  await loginPage.login();

  await siteSelectorPage.navigateToSites();
  const uiSiteCount = await siteSelectorPage.getSiteCountFromDropdown();

  console.log('UI Site Count for Guest:', uiSiteCount);

  expect(uiSiteCount).toBe(0);  // Guest should have no sites available
});
