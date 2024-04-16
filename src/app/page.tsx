import { LargeArticle, NormalArticle } from './_components';

export default function Home() {
  return (
    <main className="py-10 px-10 flex justify-center">
      <section className="w-[50rem]">
        <h1 className="text-center text-4xl">シンプル ブログ</h1>
        <section className="grid grid-cols-2 gap-8 mt-8">
          <LargeArticle />
          <LargeArticle />
        </section>
        <section className="grid grid-cols-3 gap-8 mt-6">
          <NormalArticle
            articleId="111"
            title="記事タイトル1"
            contents="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
          />
          <NormalArticle
            articleId="222"
            title="記事タイトル2"
            contents="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
          />
          <NormalArticle
            articleId="333"
            title="記事タイトル3"
            contents="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
          />
          <NormalArticle
            articleId="444"
            title="記事タイトル4"
            contents="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
          />
          <NormalArticle
            articleId="555"
            title="記事タイトル5"
            contents="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
          />
          <NormalArticle
            articleId="666"
            title="記事タイトル6"
            contents="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
          />
        </section>
      </section>
    </main>
  );
}
