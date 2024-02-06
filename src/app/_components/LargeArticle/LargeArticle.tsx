import Link from 'next/link';

export function LargeArticle() {
  return (
    <Link href="/article/666" className="hover:opacity-70">
      <div className="w-full h-[12rem] bg-gradient-to-r from-slate-200 to-gray-300"></div>
      <h2 className="mt-4 font-bold text-lg">記事タイトル</h2>
      <p className="text-xs mt-2 line-clamp-2 text-gray-500">
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </p>
    </Link>
  );
}
