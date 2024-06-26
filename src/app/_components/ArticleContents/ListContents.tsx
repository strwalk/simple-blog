interface ListContentsProps {
  contents: ListContentsType;
}

export default function ListContents({ contents }: ListContentsProps) {
  return contents.children.map((listItem) =>
    listItem.children.map((listItemChild, index) =>
      listItemChild.children.map((listOneText) => (
        <li key={index} className="pl-0.5">
          {listOneText.text}
        </li>
      ))
    )
  );
}
