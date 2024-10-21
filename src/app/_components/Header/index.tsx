import Link from 'next/link';

interface Props {
  isPreview: boolean;
}

export function Header({ isPreview }: Props) {
  return (
    <section className="fixed top-0 z-10 w-full">
      {isPreview && (
        <section className="text-center bg-amber-200 py-3 px-6 flex gap-10 justify-center items-center">
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
      <header className="h-12 bg-white px-6 sm:px-8 shadow justify-center">
        <section className="flex justify-center items-center h-full">
          <section className="w-[50rem] sm:w-[64rem] xl:w-[70rem]">
            <section className="flex justify-between items-center">
              <Link href="/" className="hover:text-gray-500">
                <h1 className="text-base sm:text-xl text-bold">SIMPLE BLOG</h1>
              </Link>
              <nav>
                <ul>
                  <li>
                    <Link
                      href="/form"
                      className="text-sm sm:text-lg hover:text-gray-500"
                    >
                      CONTACT
                    </Link>
                  </li>
                </ul>
              </nav>
            </section>
          </section>
        </section>
      </header>
    </section>
  );
}
