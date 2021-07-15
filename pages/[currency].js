import Layout from "../components/Layout";

export default function Currency({ data }) {
    console.log(data.name)
  return (
    <div>
      <Layout page={"Page " + data.name}>
        <div className="relative hover:shadow-md p-8 border border-blue-300 sm:rounded-3xl bg-yellow-100 md:w-auto flex-1 mx-5">
          <div className="text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.logo_url}
              alt="logo"
              className="w-20 h-20 mx-auto mb-6"
            />
            <h2 className="text-2xl mb-6 uppercase tracking-wider">
                {data.name}
            </h2>
            <p>
              {data.description}  
            </p>
            <p className='pt-5 font-bold text-blue-800'>
                <a href={data.reddit_url} target='_blank' rel="noreferrer">{data.reddit_url}</a>
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  try {
    const res = await fetch(
      `https://api.nomics.com/v1/currencies?key=f55966142617671abd1d19c3af396ce4c1f16c13&ids=${query.currency}&attributes=id,name,logo_url,description,reddit_url`
    );
    const data = await res.json();

    return {
      props: { data: data[0] },
    };
  } catch (err) {
    console.error(err);
  }
}
