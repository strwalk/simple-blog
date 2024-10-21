import { FormItem, Header, Footer } from '../_components';

export default function Form() {
  return (
    <main>
      <Header isPreview={false} />
      <section className="mt-20 px-4 md:px-10 flex justify-center items-center">
        <section className="w-full md:w-[39rem] py-6 sm:pt-16 pb-10 sm:pb-12 px-5 sm:px-8 rounded-lg border border-gray-300 shadow sm:shadow-md">
          <h1 className="text-center text-xl sm:text-2xl md:text-3xl">
            お問い合わせフォーム
          </h1>
          <section className="flex justify-center mt-10 w-full">
            <FormItem />
          </section>
        </section>
      </section>
      <Footer />
    </main>
  );
}
