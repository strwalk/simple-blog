import Link from 'next/link';
import { draftMode } from 'next/headers';

export function Header() {
  const { isEnabled } = draftMode();

  return (
    <header>
      {isEnabled && (
        <div className="text-center text-base sm:text-2xl bg-orange-200 py-3 px-6">
          これはPreview画面です
        </div>
      )}
      <section className="py-3 px-8 flex justify-between items-start sm:items-center">
        <Link href="/" className="hover:text-gray-500">
          <h1 className="text-xl sm:text-2xl text-bold">SIMPLE BLOG</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <Link
                href="/form"
                className="text-orange-700 hover:text-orange-400 text-sm sm:text-lg underline underline-offset-4 decoration-orange-700"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
