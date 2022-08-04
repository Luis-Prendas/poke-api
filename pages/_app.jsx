import "../styles/globals.css";
import Head from "next/head";
import 'atropos/css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PokeApi - Luis Prendas</title>
        <meta name="description" content="Pokedex hecha por Luis Prendas." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="w-full h-20 bg-[#09f] text-neutral-200 flex justify-center items-center text-4xl font-medium">
        PokeApi
      </nav>
      <main className="bg-neutral-200 min-h-screen flex justify-start items-center flex-col gap-4 text-neutral-200 p-4">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
