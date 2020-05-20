import Axios from "axios";
import Layout from "../components/layout";
import styles from "./index.module.css";
import { useRouter } from "next/router";
import BlogCard from "../components/blogCard";
const Index = (props) => {
  //   console.log(props);

  const router = useRouter();
  const navigateBlog = (id) => {
    console.log("onclick", id);
    router.push(`/blogs/${id}`);
  };
  console.log(router);
  return (
    <Layout>
      <h1 className={styles.indexTitle}> Blog List </h1>
      <div className={styles.blogList}>
        {props.blogs.map((blog) => {
          return (
            <BlogCard blogData={blog} onClick={navigateBlog} key={blog.id} />
          );
        })}
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const blogs = await Axios.get(
    "https://niravkpatel28.github.io/json-data-server/blogs/blogs.json"
  );
  //   console.log(blogs);
  return {
    props: {
      blogs: blogs.data,
    },
  };
};

export default Index;

// incase there have to be display links
// <p
//   id={blog.id}
//   key={blog.id}
//   onClick={(event) => {
//     navigateBlog(event);
//   }}
// >
//   {" "}
//   {blog.title}{" "}
// </p>
