'use client';

import { Dispatch, SetStateAction, type MouseEvent } from 'react';
import type { SendFormState } from '../../_utils';

interface Props {
  formState: SendFormState;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function Modal({ formState, isOpen, setIsOpen }: Props) {
  const modalClose = () => {
    setIsOpen(false);
  };

  const clickOutsideTheModal = (e: MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      modalClose();
    }
  };

  return (
    isOpen && (
      <section
        tabIndex={-1}
        onClick={clickOutsideTheModal}
        className="bg-black/50 fixed top-0 left-0 w-full h-full flex justify-center items-center"
      >
        <section className="bg-white py-10 px-10 rounded-md flex flex-col gap-y-8">
          <p className="text-center">
            以下の内容でお問い合わせを受け付けました
          </p>
          <ul className="flex flex-col gap-5">
            <li>
              <p className="text-gray-500">メールアドレス</p>
              <p className="underline">{formState.email}</p>
            </li>
            <li>
              <p className="text-gray-500">お名前</p>
              <p className="underline">{formState.username}</p>
            </li>
            <li>
              <p className="text-gray-500">内容</p>
              <p className="underline">{formState.message}</p>
            </li>
          </ul>
          <section className="flex justify-center">
            <button
              onClick={modalClose}
              className="bg-blue-100 hover:bg-blue-200 py-3 px-6 rounded shadow"
            >
              閉じる
            </button>
          </section>
        </section>
      </section>
    )
  );
}
