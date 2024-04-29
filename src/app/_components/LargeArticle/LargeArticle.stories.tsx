import type { Meta, StoryObj } from '@storybook/react';

import { LargeArticle } from '.';

const meta: Meta<typeof LargeArticle> = {
  component: LargeArticle,
};

export default meta;
type Story = StoryObj<typeof LargeArticle>;

export const Default: Story = {
  args: {
    articleId: 'AAA',
    title: '記事タイトルA',
    contents:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  },
};
