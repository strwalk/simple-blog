export async function getArticle(
  articleId: string,
  isPreview: boolean
): Promise<ArticleType> {
  const hygraphAuthToken = isPreview
    ? process.env.HYGRAPH_PERMANENT_AUTH_PREVIEW_TOKEN
    : process.env.HYGRAPH_PERMANENT_AUTH_TOKEN;

  const response = await fetch(`${process.env.HYGRAPH_ENDPOINT}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${hygraphAuthToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
          query Article {
            article(where: {id: "${articleId}"}) {
              id
              title
              contents {
                raw
              }
              createdAt
            }
          }
        `,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch Article data');
  }

  const json = await response.json();
  return json.data.article;
}
