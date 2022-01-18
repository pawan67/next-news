import { useRouter } from "next/router";
import Header from "../../components/Header";

function Feed({ pageNumber, articles }) {
  console.log(pageNumber, articles);
  const router = useRouter();
  return (
    <div className=" background ">
      <Header />
      <div>
        {articles.map((article, index) => (
          <div className=" border-b border-gray-400 py-5 borde" key={index}>
            <h1 className=" my-2 font-bold text-lg">{article.title}</h1>
            <p className=" my-3 font-medium text-gray-600">
              {article.description}
            </p>
            <img className=" rounded-md" src={article.urlToImage} alt="" />
          </div>
        ))}
      </div>
      {/* paginator */}
      <div className=" font-semibold justify-center space-x-5 my-10 flex ">
        <div
          className=" cursor-pointer"
          onClick={() => {
            if (pageNumber > 1) {
              router.push(`/feed/${pageNumber - 1}`);
            }
          }}
        >
          Previous Page
        </div>
        <div>{pageNumber}</div>
        <div
          className=" cursor-pointer"
          onClick={() => {
            if (pageNumber => 1) {
              router.push(`/feed/${pageNumber + 1}`);
            }
          }}
        >
          Next Page
        </div>
      </div>
    </div>
  );
}
export const getServerSideProps = async (context) => {
  const pageNumber = context.query.slug;
  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEWS_KEY}`,
      },
    }
  );
  const apiJson = await res.json();
  const { articles } = apiJson;
  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};
export default Feed;
