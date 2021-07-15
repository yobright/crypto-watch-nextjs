import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home({ res }) {
  return (
    <div className="font-mono">
      <Layout page="Crypto Watch - Accueil">
        <ul className="flex justify-content py-10">
          {res.map((crypto, index) => (
            <li
              key={index}
              className="relative hover:shadow-md p-8 border-blue-300 rounded-1xl bg-yellow-100 md:w-auto flex-1 mx-5"
            >
              <Link href={`/${crypto.id}`}>
                <a className="rounded-md">
                  <div className="text-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="logo"
                      src={crypto.logo_url}
                      className="w-20 h-20 mx-auto mb-6"
                    />
                    <h2 className="text-2xl mb-6 uppercase tracking-wider">
                      {crypto.name}
                    </h2>
                    <h3 className="font-bold text-2xl mb-4">
                      {parseFloat(crypto.price).toFixed(2)} $USD
                    </h3>
                    <p>
                      1 jour :{" "}
                      <span className="font-bold">
                        {parseFloat(
                          crypto["1d"].price_change_pct * 100
                        ).toFixed(2) + "%"}{" "}
                      </span>{" "}
                      {crypto["1d"].price_change_pct < 0 ? (
                        <span className="text-red-500">&#x279B;</span>
                      ) : (
                        <span className="text-green-500">&#x279A;</span>
                      )}
                    </p>
                    <p>
                      30 jours :{" "}
                      <span className="font-bold">
                        {parseFloat(
                          crypto["30d"].price_change_pct * 100
                        ).toFixed(2) + "%"}{" "}
                      </span>{" "}
                      {crypto["30d"].price_change_pct < 0 ? (
                        <span className="text-red-500">&#x279B;</span>
                      ) : (
                        <span className="text-green-500">&#x279A;</span>
                      )}
                    </p>
                    <p>
                      1 An :{" "}
                      <span className="font-bold">
                        {parseFloat(
                          crypto["365d"].price_change_pct * 100
                        ).toFixed(2) + "%"}{" "}
                      </span>{" "}
                      {crypto["365d"].price_change_pct < 0 ? (
                        <span className="text-red-500">&#x279B;</span>
                      ) : (
                        <span className="text-green-500">&#x279A;</span>
                      )}
                    </p>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    </div>
  );
}

export async function getStaticProps(context) {
  try {
    const res = await fetch(
      "https://api.nomics.com/v1/currencies/ticker?key=f55966142617671abd1d19c3af396ce4c1f16c13&ids=BTC,ETH,XMR&interval=1d,30d,365d"
    ).then((res) => res.json())
    
    return {
      props: { res },
    };
  } catch (err) {
    console.error(err);
  }
}
