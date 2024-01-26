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
          <NormalArticle />
          <NormalArticle />
          <NormalArticle />
          <NormalArticle />
          <NormalArticle />
          <NormalArticle />
        </section>
      </section>
    </main>
  );
}
