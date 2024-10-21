const copyrightYear = (): string => {
  const startYear = 2024;
  const thisYear = new Date().getFullYear();

  return startYear < thisYear ? `${startYear}-${thisYear}` : `${startYear}`;
};

export function Footer() {
  return (
    <footer className="py-3 w-screen px-4">
      <section className="text-center">
        <small>&copy;{copyrightYear()} strwalk</small>
        <p className="text-xs mt-1">
          これはデモ画面です。登場する人物・団体・名称等は架空であり、実在のものとは関係ありません
        </p>
      </section>
    </footer>
  );
}
