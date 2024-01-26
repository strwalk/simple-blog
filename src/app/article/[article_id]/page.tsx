import Link from 'next/link';

export default function Article() {
  return (
    <main className="py-10 px-10 flex justify-center">
      <section className="w-[39rem]">
        <div className="w-full h-[19rem] bg-gradient-to-r from-slate-200 to-gray-300"></div>
        <h1 className="text-center text-4xl mt-10">記事タイトル</h1>
        <section className="my-10 leading-9">
          <p>
            あああああああああああああああああああああああああああああああああああああああああああああ
          </p>
          <p>
            ああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
          </p>
          <p>
            ああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
          </p>
        </section>
        <section className="flex justify-center">
          <Link
            href="/"
            className="bg-blue-100 hover:bg-blue-200 py-3 px-6 rounded shadow"
          >
            記事一覧に戻る
          </Link>
        </section>
      </section>
    </main>
  );
}
