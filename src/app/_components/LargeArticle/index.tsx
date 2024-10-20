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
      className="hover:opacity-80 bg-white py-4 px-6 sm:py-6 sm:px-8 rounded-lg shadow-md"
      data-test-id="large-article"
    >
      <section className="flex justify-center">
        <Image
          src="/images/thumbnail.jpg"
          width={300}
          height={300}
          alt={title}
          priority={true}
          className="h-[14rem] sm:h-[12rem] lg:h-[14rem] w-[28rem] sm:w-full object-cover object-center rounded"
        />
      </section>
      <h2 className="mt-4 text-lg">{title}</h2>
      <p className="text-xs mt-2 line-clamp-2 text-gray-500">
        {contents.replaceAll(/\\n/g, '')}
      </p>
    </Link>
  );
}
