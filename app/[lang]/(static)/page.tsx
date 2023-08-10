import Header from '~/components/header';
import Library from '~/components/library';

// Example Data Fetching in Next
// const getCatFact = async () => {
//   await fetch('https://hub.dummyapis.com/delay?seconds=5', {
//     cache: 'no-cache',
//   });

//   const fact = await fetch('https://catfact.ninja/fact', {
//     next: { revalidate: 10 },
//   });

//   return fact.json();
// };

// export async function generateStaticParams() {
//   return [{ lang: 'ar' }, { lang: 'en' }];
// }

const Home = async ({ params: { lang } }: any) => {
  const { about, contact } = await import(
    `@/meta/translations/${lang}/nav.json`
  );

  // const facts = await getCatFact();
  return (
    <>
      <header>
        <h1 className="m-5 text-center">
          Example Lang from Page.tsx <br />
          Current Lanugage: {lang} - {about} {contact}
        </h1>
      </header>

      <Header>Header</Header>
      <Library />
    </>
  );
};

export default Home;
