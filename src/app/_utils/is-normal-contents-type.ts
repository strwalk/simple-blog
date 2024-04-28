export const isNormalContentsType = (
  target: NormalContentsType | ListContentsType
): target is NormalContentsType => 'text' in target.children[0];
