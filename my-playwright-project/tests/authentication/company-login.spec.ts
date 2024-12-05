import { test } from '@playwright/test';
import { saveAuthToken } from '../../utils/authUtils';

test('API login for Company-Based user', async ({ request }) => {
  const endpoint = 'https://stage.portal.denowatts.com/backend/graphql';

  const loginMutation = `
    mutation Login($loginInput: LoginInput!) {
      login(loginInput: $loginInput) {
        accessToken
      }
    }
  `;

  const loginVariables = {
    loginInput: {
      email: 'domain.permission@bookingdei.com',
      password: 'Famo445350',
    },
  };

  const response = await request.post(endpoint, {
    data: { query: loginMutation, variables: loginVariables },
  });

  const data = await response.json();
  const token = data.data?.login?.accessToken;

  if (token) {
    saveAuthToken(token, 'accessTokenCompany.txt');
    console.log('Company-Based user access token saved.');
  } else {
    throw new Error('Company-Based user login failed.');
  }
});
