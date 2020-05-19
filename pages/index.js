import Axios from "axios";
import Layout from "../components/layout";
import styles from "./index.module.css";
const Index = (props) => {
  //   console.log(props);
  return (
    <Layout>
      <div className={styles.blogList}>
        <h1> Blog List </h1>
        {props.blogs.map((blog) => {
          return (
            <p id={blog.id} key={blog.id}>
              {" "}
              {blog.title}{" "}
            </p>
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
