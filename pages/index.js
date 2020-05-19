import Axios from "axios";
import Layout from "../components/layout";
import styles from "./index.module.css";
import { useRouter } from "next/router";
import { route } from "next/dist/next-server/server/router";
const Index = (props) => {
  //   console.log(props);

  const router = useRouter();
  const navigateBlog = (event) => {
    router.push(`/blogs/${event.target.id}`);
  };
  console.log(router);
  return (
    <Layout>
      <div className={styles.blogList}>
        <h1> Blog List </h1>
        {props.blogs.map((blog) => {
          return (
            <p
              id={blog.id}
              key={blog.id}
              onClick={(event) => {
                navigateBlog(event);
              }}
            >
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
