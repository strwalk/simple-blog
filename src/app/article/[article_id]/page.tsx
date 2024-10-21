import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers';
import { getArticle } from '../../_hooks';
import { Header, ArticleContents, Footer } from '../../_components';

interface Params {
  params: {
    article_id: string;
  };
}

export const dynamic = 'force-dynamic';

export default async function Article({ params: { article_id } }: Params) {
  const { isEnabled } = draftMode();
  const article = await getArticle(article_id, isEnabled);
  if (!article) {
    notFound();
  }
  const contentsRawChildren = article.contents.raw.children;

  return (
    <main>
      <Header isPreview={isEnabled} />
      <section className="pt-20 pb-10 px-6 sm:px-10 flex justify-center">
        <section className="w-[39rem]">
          <section className="flex justify-center">
            <Image
              src="/images/thumbnail.jpg"
              width={300}
              height={300}
              alt={article.title}
              priority={true}
              className="h-[14rem] sm:h-[21rem] w-[28rem] sm:w-[40rem] object-cover object-center"
            />
          </section>
          <h1
            data-test-id="article-title"
            className="text-center text-lg sm:text-3xl mt-10"
          >
            {article.title}
          </h1>
          <ArticleContents contentsRawChildren={contentsRawChildren} />
          <section className="flex justify-center">
            <Link
              href="/"
              className="bg-amber-300 hover:bg-amber-200 py-3 px-6 rounded shadow"
            >
              記事一覧に戻る
            </Link>
          </section>
        </section>
      </section>
      <Footer />
    </main>
  );
}
