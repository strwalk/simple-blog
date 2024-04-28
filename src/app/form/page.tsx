import { FormItem, Header } from '../_components';

export default function Form() {
  return (
    <main>
      <Header />
      <section className="py-10 px-4 md:px-10 flex justify-center items-center">
        <section className="w-full md:w-[39rem] bg-white pt-16 pb-12 px-8 rounded-lg border border-gray-400 shadow-lg">
          <h1 className="text-center text-3xl">お問い合わせフォーム</h1>
          <section className="flex justify-center mt-10 w-full">
            <FormItem />
          </section>
        </section>
      </section>
    </main>
  );
}
