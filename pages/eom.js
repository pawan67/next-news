import Image from "next/image";
import Header from "../components/Header";


function EOM({ data }) {
  console.log(data);
  return (
    <>
      <div className="background">
      <Header/>
        <div className="  p-5 ">
          <h1 className=" text-3xl font-semibold text-center mt-10">
            Employee of the month
          </h1>
          <div>
            <h3 className=" text-3xl font-medium text-gray-600 text-center mt-10">
              {data.name}
            </h3>
            <h2 className=" text-xl font-medium text-gray-600 text-center mt-1 ">
              {data.position}
            </h2>
            <div className=" w-2/4 mx-auto mt-10">
              <img className=" rounded-full" src={data.image}></img>
            </div>
            <h3 className=" text-center mt-10 font-medium ">
              {data.description}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonkeeper.com/b/NGFN`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default EOM;
