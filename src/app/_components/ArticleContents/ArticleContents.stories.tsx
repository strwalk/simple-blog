import type { Meta, StoryObj } from '@storybook/react';

import { ArticleContents } from '.';

const meta: Meta<typeof ArticleContents> = {
  component: ArticleContents,
};

export default meta;
type Story = StoryObj<typeof ArticleContents>;

const allArg = [
  {
    type: 'heading-two',
    children: [{ text: 'メイン見出し' }],
  },
  {
    type: 'paragraph',
    children: new Array(1).fill({
      text: '本文テキスト本文テキスト本文テキスト本文テキスト',
    }),
  },
  {
    type: 'heading-three',
    children: [{ text: 'サブ見出し' }],
  },
  {
    type: 'paragraph',
    children: new Array(2).fill({
      text: '本文テキスト本文テキスト本文テキスト本文テキスト',
    }),
  },
  {
    type: 'bulleted-list',
    children: new Array(3).fill({
      type: 'list-item',
      children: [
        {
          type: 'list-item-child',
          children: [{ text: '順序なしリスト順序なしリスト順序なしリスト' }],
        },
      ],
    }),
  },
  {
    type: 'heading-three',
    children: [{ text: 'サブ見出し' }],
  },
  {
    type: 'numbered-list',
    children: new Array(4).fill({
      type: 'list-item',
      children: [
        {
          type: 'list-item-child',
          children: [{ text: '順序付きリスト順序付きリスト順序付きリスト' }],
        },
      ],
    }),
  },
];

const headingArg = [
  {
    type: 'heading-two',
    children: [{ text: 'メイン見出し' }],
  },
  {
    type: 'heading-three',
    children: [{ text: 'サブ見出し' }],
  },
];

const paragraphArg = [
  {
    type: 'paragraph',
    children: new Array(3).fill({
      text: '本文テキスト本文テキスト本文テキスト本文テキスト',
    }),
  },
];

const paragraphWithLineBreaksArg = [
  {
    type: 'paragraph',
    children: [
      { text: '本文テキスト本文テキスト本文テキスト本文テキスト' },
      { text: '' },
      { text: '本文テキスト本文テキスト本文テキスト本文テキスト' },
      { text: '' },
      { text: '本文テキスト本文テキスト本文テキスト本文テキスト' },
    ],
  },
];

const bulletedListArg = [
  {
    type: 'bulleted-list',
    children: new Array(4).fill({
      type: 'list-item',
      children: [
        {
          type: 'list-item-child',
          children: [
            {
              text: '順序なしリスト順序なしリスト順序なしリスト順序なしリスト',
            },
          ],
        },
      ],
    }),
  },
];

const numberedListArg = [
  {
    type: 'numbered-list',
    children: new Array(4).fill({
      type: 'list-item',
      children: [
        {
          type: 'list-item-child',
          children: [
            {
              text: '順序付きリスト順序付きリスト順序付きリスト順序付きリスト',
            },
          ],
        },
      ],
    }),
  },
];

export const All: Story = {
  args: { contentsRawChildren: allArg },
};

export const Heading: Story = {
  args: { contentsRawChildren: headingArg },
};

export const Paragraph: Story = {
  args: { contentsRawChildren: paragraphArg },
};

export const ParagraphWithLineBreaks: Story = {
  args: { contentsRawChildren: paragraphWithLineBreaksArg },
};

export const BulletedListBreaks: Story = {
  args: { contentsRawChildren: bulletedListArg },
};

export const NumberedListBreaks: Story = {
  args: { contentsRawChildren: numberedListArg },
};
