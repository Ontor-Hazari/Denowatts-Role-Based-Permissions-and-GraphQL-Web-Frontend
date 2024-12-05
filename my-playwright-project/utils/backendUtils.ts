const fetch = require('node-fetch'); // CommonJS require for node-fetch v2

type GraphQLResponse<T> = {
  data?: T;
  errors?: { message: string }[];
};

type Site = {
  _id: string;
  name: string;
};

type SitesQueryResponse = {
  sites: Site[];
};

export const fetchSitesFromGraphQL = async (authToken: string): Promise<Site[]> => {
  const query = `
    query {
      sites {
        _id
        name
      }
    }
  `;

  const response = await fetch('https://stage.portal.denowatts.com/backend/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify({ query }),
  });

  const result = (await response.json()) as GraphQLResponse<SitesQueryResponse>;

  if (result.errors) {
    throw new Error(`GraphQL Error: ${JSON.stringify(result.errors)}`);
  }

  return result.data?.sites ?? [];
};
