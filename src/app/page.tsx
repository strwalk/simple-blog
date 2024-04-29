import { getArticles } from './_hooks';
import { LargeArticle, NormalArticle, Header } from './_components';

export default async function Home() {
  const articles: Articles[] = await getArticles();

  return (
    <main>
      <Header />
      <section className="pt-3 sm:pt-6 pb-6 sm:pb-10 px-4 sm:px-10 flex justify-center">
        <section className="w-[50rem]">
          {articles.length > 0 ? (
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
            <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-6">
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
