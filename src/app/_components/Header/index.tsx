import Link from 'next/link';

export function Header() {
  return (
    <header className="py-3 px-8 flex justify-between items-center">
      <Link href="/" className="hover:text-gray-500">
        <h1 className="text-2xl text-bold">SIMPLE BLOG</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link
              href="/form"
              className="text-orange-700 hover:text-orange-400 underline underline-offset-4 decoration-orange-700"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
