import Link from 'next/link';

interface Props {
  articleId: string;
  title: string;
  contents: string;
}

export function LargeArticle({ articleId, title, contents }: Props) {
  return (
    <Link
      href={`/article/${articleId}`}
      className="hover:opacity-70"
      data-test-id="large-article"
    >
      <div className="w-full h-[12rem] bg-gradient-to-r from-slate-200 to-gray-300"></div>
      <h2 className="mt-4 font-bold text-lg">{title}</h2>
      <p className="text-xs mt-2 line-clamp-2 text-gray-500">{contents}</p>
    </Link>
  );
}
