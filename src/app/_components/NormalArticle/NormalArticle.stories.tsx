import type { Meta, StoryObj } from '@storybook/react';

import { NormalArticle } from '.';

const meta: Meta<typeof NormalArticle> = {
  component: NormalArticle,
};

export default meta;
type Story = StoryObj<typeof NormalArticle>;

export const Default: Story = {
  render: () => (
    <NormalArticle
      articleId="111"
      title="記事タイトル1"
      contents="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
    />
  ),
};
