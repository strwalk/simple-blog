import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

const formStateNormal = {
  isSuccess: true,
  email: 'email@email',
  username: 'Alice Smith',
  message: 'test',
};

export const Default: Story = {
  render: () => {
    const [_, setIsOpen] = useState(false);
    return (
      <Modal formState={formStateNormal} isOpen={true} setIsOpen={setIsOpen} />
    );
  },
};
