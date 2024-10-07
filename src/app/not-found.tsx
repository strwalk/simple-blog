import Link from 'next/link';
import { Header } from './_components';

export default function NotFound() {
  return (
    <main>
      <Header />
      <section className="flex justify-center h-[80vh] items-center">
        <section className="">
          <h2 className="text-2xl">お探しのページは見つかりませんでした</h2>
          <section className="mt-10 text-center">
            <Link
              href="/"
              className="bg-orange-300 hover:bg-orange-200 py-4 px-6 rounded shadow"
            >
              トップページへ戻る
            </Link>
          </section>
        </section>
      </section>
    </main>
  );
}
