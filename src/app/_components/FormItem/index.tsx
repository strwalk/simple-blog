'use client';

import { useRef } from 'react';
import { useState } from 'react';
import { useFormState } from 'react-dom';
import { sendFormData } from '../../_utils';
import { Modal } from '../Modal';

export function FormItem() {
  const ref = useRef<HTMLFormElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [formState, formAction] = useFormState(sendFormData, {
    isSuccess: false,
    email: '',
    username: '',
    message: '',
  });

  return (
    <form
      action={(formData) => {
        formAction(formData);
        setIsOpen(true);
        ref.current?.reset();
      }}
      ref={ref}
      className="flex flex-col gap-8"
    >
      <section>
        <section className="flex gap-2 items-center">
          <label htmlFor="email" className="block">
            メールアドレス
          </label>
          <span className="bg-red-500 text-white py-0.5 px-2 text-xs">
            必須
          </span>
        </section>
        <input
          type="email"
          id="email"
          name="email"
          required={true}
          className="border border-gray-300 w-full md:w-[24rem] py-1.5 px-2"
        />
      </section>
      <section>
        <section className="flex gap-2 items-center">
          <label htmlFor="username" className="block">
            お名前
          </label>
          <span className="bg-red-500 text-white py-0.5 px-2 text-xs">
            必須
          </span>
        </section>
        <input
          type="text"
          id="username"
          name="username"
          required={true}
          className="border border-gray-300 w-full md:w-[24rem] py-1.5 px-2"
        />
      </section>
      <section>
        <section className="flex gap-2 items-center">
          <label htmlFor="message" className="block">
            お問い合わせ内容
          </label>
          <span className="bg-red-500 text-white py-0.5 px-2 text-xs">
            必須
          </span>
        </section>
        <textarea
          id="message"
          name="message"
          rows={6}
          required={true}
          className="border border-gray-300 block w-full md:w-[24rem] py-1.5 px-2"
        />
      </section>
      <section className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-200 hover:bg-blue-100 py-3 px-10 rounded shadow"
        >
          送信
        </button>
      </section>
      <Modal formState={formState} isOpen={isOpen} setIsOpen={setIsOpen} />
    </form>
  );
}
