import { FormItem } from '../_components/FormItem';

export default function Form() {
  return (
    <main className="py-10 px-4 md:px-10 flex justify-center items-center bg-blue-100 min-h-screen">
      <section className="w-full md:w-[39rem] bg-white pt-16 pb-12 px-8 rounded-lg shadow-md">
        <h1 className="text-center text-3xl">お問い合わせフォーム</h1>
        <section className="flex justify-center mt-10 w-full">
          <FormItem />
        </section>
      </section>
    </main>
  );
}
