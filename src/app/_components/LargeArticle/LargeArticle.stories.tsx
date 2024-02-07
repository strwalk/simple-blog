import type { Meta, StoryObj } from '@storybook/react';

import { LargeArticle } from './LargeArticle';

const meta: Meta<typeof LargeArticle> = {
  component: LargeArticle,
};

export default meta;
type Story = StoryObj<typeof LargeArticle>;

export const Default: Story = {
  render: () => <LargeArticle />,
};
