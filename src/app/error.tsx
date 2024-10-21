'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import * as Sentry from '@sentry/nextjs';
import { Header } from './_components';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <main>
      <Header isPreview={false} />
      <section className="flex justify-center h-[80vh] items-center">
        <section className="">
          <h2 className="text-2xl">サーバーエラーが発生しました</h2>
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
