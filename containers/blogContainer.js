import Link from "next/link";
import SidePanel from "../components/sidePanel";

import styles from "./blogContainer.module.css";
const BlogContainer = ({ blogData }) => {
  console.log(blogData);
  return (
    <div className={styles.blogElements}>
      <div className={styles.blogContent}>
        <h1>{blogData.title}</h1>
        <h3> Author:{blogData.author}</h3>
        <img src={`${blogData.imageUrl}`} alt="banner" />
        <p> {blogData.content}</p>
      </div>
      <div className={styles.sidePanel}>
        <SidePanel links={blogData.links} />
      </div>
    </div>
  );
};

export default BlogContainer;
