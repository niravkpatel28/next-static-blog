// this will be used for rendering blog items
import Axios from "axios";
import Layout from "../../components/layout";
import BlogContainer from "../../containers/blogContainer";
const Blog = (props) => {
  console.log("blog data ", props);
  return (
    <Layout>
      <div>
        {" "}
        <BlogContainer blogData={props.blogData[0]} />
      </div>
    </Layout>
  );
};

//get all static paths

export const getStaticPaths = async () => {
  // return all the possible values of paths
  // array of object with key params : { id: blogid , ... remaining information if any}
  //this array must be returned as a value to paths.

  const blogs = await Axios.get(
    "https://niravkpatel28.github.io/json-data-server/blogs/blogs.json"
  );

  let pathList = blogs.data.map((blog) => {
    //this will return a single object of form
    //   {
    //       params:{
    //           id:blogid
    //       }
    //   }

    return {
      params: {
        id: blog.id,
      },
    };
  });

  //   console.log("path list for ", pathList);
  return {
    paths: pathList,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  console.log(params);
  const blogs = await Axios.get(
    "https://niravkpatel28.github.io/json-data-server/blogs/blogs.json"
  );
  let blogData = blogs.data.filter((blog) => blog.id === params.id);
  return {
    props: {
      blogData,
    },
  };
};

export default Blog;
