import type { Meta, StoryObj } from '@storybook/react';

import { FormItem } from './FormItem';

const meta: Meta<typeof FormItem> = {
  component: FormItem,
};

export default meta;
type Story = StoryObj<typeof FormItem>;

export const Default: Story = {
  render: () => <FormItem />,
};
