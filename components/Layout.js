import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import LayoutPic from "../public/main.jpg";

export default function Layout({ children, page }) {
  return (
    <div className="bg-blue-150 pt-5 text-center min-h-screen">
      <Head>
        <title>{page}</title>
      </Head>
      <header className="container-lg">
        <h1 className="text-5xl mb-2">CRYPTO WATCH</h1>
        <div className="inline-grid grid-cols-2 gap-x-10 p-4">
          <Link href="/" passHref>
            <button className="bg-yellow-200 font-bold p-3 m-2 rounded-1xl hover:shadow-md border-2 border-black-100">
              Accueil
            </button>
          </Link>
          <Link href="/about" passHref>
            <button className=" font-bold bg-yellow-200 p-3 m-2 rounded-1xl hover:shadow-md border-2 border-black-200">
              À propos
            </button>
          </Link>
        </div>
        <div>
          <Image
            src={LayoutPic}
            alt="header-pic"
            width="400"
            height="25"
            className="rounded-2xl object-cover"
          />
        </div>
      </header>
      <main className="pt-4 mx-20">
        {children}
      </main>
      <footer className='p-10'>
          <Image 
            src={LayoutPic}
            width="1000"
            height="30"
            alt="footer-pic"
            className="rounded-3xl object-cover"
            />
            <ul className="pt-10 pb-4 flex justify-around font-bold">
                <li>À propos</li>
                <li>Qui sommes-nous</li>
                <li>kasskoo - 2021</li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada malesuada lectus id tristique. Praesent cursus risus eros, quis tincidunt justo ultrices vel.</p>
      </footer>

      <style jsx>
          {`
          p {
              color: grey
          }
          `}
      </style>
    </div>
  );
}
