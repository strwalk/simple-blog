import { draftMode } from 'next/headers';
import { getArticles } from './_hooks';
import { LargeArticle, NormalArticle, Header, Footer } from './_components';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const { isEnabled } = draftMode();
  const articles: Articles[] = await getArticles();

  return (
    <main className="bg-amber-100">
      <Header isPreview={isEnabled} />
      <section className="pt-20 px-4 sm:px-10 flex justify-center h-full min-h-screen">
        <section className="w-[50rem] sm:w-[60rem] xl:w-[65rem]">
          {articles.length > 0 ? (
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
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
            <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-6">
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
      <Footer />
    </main>
  );
}
