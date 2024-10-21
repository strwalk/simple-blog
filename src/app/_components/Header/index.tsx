import Link from 'next/link';

interface Props {
  isPreview: boolean;
}

export function Header({ isPreview }: Props) {
  return (
    <>
      {isPreview && (
        <section className="text-center bg-orange-200 py-3 px-6 flex gap-10 justify-center items-center">
          <p className="text-base sm:text-2xl">これはPreview画面です</p>
          <Link
            href="/api/disable-draft"
            prefetch={false}
            className="py-1 px-5 bg-white rounded-md shadow hover:bg-gray-100 text-sm"
          >
            解除する
          </Link>
        </section>
      )}
      <header>
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
    </>
  );
}
