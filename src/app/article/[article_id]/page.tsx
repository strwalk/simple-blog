import Link from 'next/link';
import Image from 'next/image';

interface Params {
  params: {
    article_id: string;
  };
}

interface TextStringType {
  text: string;
}

interface HasNestChildrenType {
  type: string;
  children: {
    type: string;
    children: TextStringType[];
  }[];
}

interface NormalContentsType {
  type: string;
  children: TextStringType[];
}

interface ListContentsType {
  type: string;
  children: HasNestChildrenType[];
}

interface ArticleType {
  id: string;
  title: string;
  contents: {
    raw: {
      children: NormalContentsType[] | ListContentsType[];
    };
  };
  createdAt: string;
}

async function getArticle(articleId: string) {
  const response = await fetch(`${process.env.HYGRAPH_ENDPOINT}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.HYGRAPH_PERMANENT_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query Article {
          article(where: {id: "${articleId}"}) {
            id
            title
            contents {
              raw
            }
            createdAt
          }
        }
      `,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch Article data');
  }

  const json = await response.json();
  return json.data.article;
}

const isNormalContentsType = (
  target: NormalContentsType | ListContentsType
): target is NormalContentsType => 'text' in target.children[0];

const createListNode = (contents: ListContentsType) =>
  contents.children.map((listItem) =>
    listItem.children.map((listItemChild, index) =>
      listItemChild.children.map((listOneText) => (
        <li key={index} className="pl-1">
          {listOneText.text}
        </li>
      ))
    )
  );

export default async function Article({ params: { article_id } }: Params) {
  const article: ArticleType = await getArticle(article_id);
  const contentsRawChildren = article.contents.raw.children;

  return (
    <main className="py-10 px-10 flex justify-center">
      <section className="w-[39rem]">
        <section className="flex justify-center">
          <Image
            src="/images/thumbnail.jpg"
            width={300}
            height={300}
            alt={article.title}
            priority={true}
            className="h-[14rem] sm:h-[22rem] w-[28rem] sm:w-[40rem] object-cover object-[center_28%]"
          />
        </section>
        <h1 className="text-center text-3xl mt-10">{article.title}</h1>
        <section className="my-10 leading-9">
          {contentsRawChildren.map((contents, index) =>
            isNormalContentsType(contents) ? (
              contents.children.map((contentsChildren, index) => {
                const displayText = contentsChildren.text;
                switch (contents.type) {
                  case 'heading-two':
                    return (
                      <h2 key={index} className="text-2xl">
                        {displayText}
                      </h2>
                    );
                  case 'heading-three':
                    return (
                      <h3 key={index} className="text-lg">
                        {displayText}
                      </h3>
                    );
                  default:
                    if (displayText) {
                      return <p key={index}>{displayText}</p>;
                    }
                    return <div key={index} className="py-2" />;
                }
              })
            ) : contents.type === 'numbered-list' ? (
              <ol key={index} className="list-decimal">
                {createListNode(contents)}
              </ol>
            ) : contents.type === 'bulleted-list' ? (
              <ul key={index} className="list-disc">
                {createListNode(contents)}
              </ul>
            ) : null
          )}
        </section>
        <section className="flex justify-center">
          <Link
            href="/"
            className="bg-blue-100 hover:bg-blue-200 py-3 px-6 rounded shadow"
          >
            記事一覧に戻る
          </Link>
        </section>
        <Link href="/form" className="fixed bottom-3 right-3 bg-blue-200">
          お問い合わせ
        </Link>
      </section>
    </main>
  );
}
