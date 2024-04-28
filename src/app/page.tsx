import { getArticles } from './_hooks';
import { LargeArticle, NormalArticle, Header } from './_components';

export default async function Home() {
  const articles: Articles[] = await getArticles();

  return (
    <main>
      <Header />
      <section className="py-6 px-10 flex justify-center">
        <section className="w-[50rem]">
          {articles.length > 0 ? (
            <section className="grid grid-cols-2 gap-8">
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
      </section>
    </main>
  );
}
