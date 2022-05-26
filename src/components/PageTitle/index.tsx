
export const PageTitle = (title:String) => {
  return (
    <section className="w-full h-full bg-white dark:bg-gray-200 pl-[10%] pr-20 py-36 text-gray-200 dark:text-white transition-colors">
      <h1 className="text-5xl font-medium leading-[70px] mb-8">
      {title}
      </h1>
  </section>
  );
};
