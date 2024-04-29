import { isNormalContentsType } from '../../_utils';
import ListContents from './ListContents';

interface Props {
  contentsRawChildren: NormalContentsType[] | ListContentsType[];
}

export function ArticleContents({ contentsRawChildren }: Props) {
  return (
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
          <ol key={index} className="list-decimal mx-3">
            <ListContents contents={contents} />
          </ol>
        ) : contents.type === 'bulleted-list' ? (
          <ul key={index} className="list-disc mx-3 ">
            <ListContents contents={contents} />
          </ul>
        ) : null
      )}
    </section>
  );
}
