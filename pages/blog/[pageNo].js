import NavBar from "../../components/NavBar";
import { useRouter } from "next/router";

export const getStaticPaths = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  const paths = data.map((curElem) => {
    return {
      params: {
        pageNo: curElem.id.toString()
      },
    };
  });

  return {
      paths,
      fallback : false
  };
}

export const getStaticProps = async(context) => {
  const id = context.params.pageNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
      props : {
        data
      }
  };
}

const pageNo = ({data}) => {
  // const router = useRouter();
  // const pageNumber = router.query.pageNo;
  // return <><NavBar/><h1>Dynamic Routing {pageNumber} router</h1></>;
  const {id, body, title} = data;
  return <><NavBar/><div><h3>{id}</h3><h1>{title}</h1><p>{body}</p></div></>;
};

export default pageNo;
