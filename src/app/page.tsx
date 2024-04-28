import { LargeArticle, NormalArticle } from './_components';

interface Articles {
  id: string;
  title: string;
  contents: {
    text: string;
  };
}

async function getArticles() {
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

export default async function Home() {
  const articles: Articles[] = await getArticles();

  return (
    <main className="py-10 px-10 flex justify-center">
      <section className="w-[50rem]">
        {articles.length > 0 ? (
          <section className="grid grid-cols-2 gap-8 mt-8">
            {articles.slice(0, 2).map((article) => (
              <LargeArticle
                key={article.id}
                articleId={article.id}
                title={article.title}
                contents={article.contents.text}
              />
            ))}
          </section>
        ) : null}
        {articles.length > 2 ? (
          <section className="grid grid-cols-3 gap-8 mt-6">
            {articles.slice(2).map((article) => (
              <NormalArticle
                key={article.id}
                articleId={article.id}
                title={article.title}
                contents={article.contents.text}
              />
            ))}
          </section>
        ) : null}
      </section>
    </main>
  );
}
