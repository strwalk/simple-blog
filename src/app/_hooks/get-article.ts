export async function getArticle(
  articleId: string,
  isPreview: boolean
): Promise<ArticleType> {
  try {
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

    const json = await response.json();
    return json.data.article;
  } catch (err) {
    throw new Error(
      `[Error] Failed to fetch Article data. ArticleID: ${articleId}`,
      { cause: err }
    );
  }
}
