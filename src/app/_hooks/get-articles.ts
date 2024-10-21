export async function getArticles(): Promise<Articles[]> {
  try {
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

    const json = await response.json();
    return json.data.articles;
  } catch (err) {
    throw new Error('[Error] Failed to fetch Articles data', { cause: err });
  }
}
