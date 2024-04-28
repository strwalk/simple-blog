export async function getArticles(): Promise<Articles[]> {
  const response = await fetch(`${process.env.HYGRAPH_ENDPOINT}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.HYGRAPH_PERMANENT_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
          query Articles {
            articles {
              id
              title
              contents {
                text
              }
            }
          }
        `,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch Articles data');
  }

  const json = await response.json();
  return json.data.articles;
}
