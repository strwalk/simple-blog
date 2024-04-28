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

interface Articles {
  id: string;
  title: string;
  contents: {
    text: string;
  };
}
