import { test } from '@playwright/test';
import { saveAuthToken } from '../../utils/authUtils';

test('API login for Super Admin', async ({ request }) => {
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
      email: 'ontor@qaharbor.com',
      password: '12345678',
    },
  };

  const response = await request.post(endpoint, {
    data: { query: loginMutation, variables: loginVariables },
  });

  const data = await response.json();
  const token = data.data?.login?.accessToken;

  if (token) {
    saveAuthToken(token, 'accessTokenSuperAdmin.txt');
    console.log('Super Admin access token saved.');
  } else {
    throw new Error('Super Admin login failed.');
  }
});
