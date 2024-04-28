import Link from 'next/link';
import Image from 'next/image';

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
      <section className="flex justify-center">
        <Image
          src="/images/thumbnail.jpg"
          width={300}
          height={300}
          alt={title}
          priority={true}
          className="h-[14rem] sm:h-[12rem] w-[28rem] sm:w-full object-cover object-[center_24%]"
        />
      </section>
      <h2 className="mt-4 font-bold text-lg">{title}</h2>
      <p className="text-xs mt-2 line-clamp-2 text-gray-500">{contents}</p>
    </Link>
  );
}
