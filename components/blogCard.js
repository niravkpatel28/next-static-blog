// create blog cards with image and clickable <Link>

import React from "react";
import Link from "next/link";
import styles from "./blogCard.module.css";

const BlogCard = (props) => {
  console.log(props.blogData);
  return (
    <div
      onClickCapture={() => {
        // execute a call back
        props.onClick(props.blogData.id);
      }}
      className={styles.card}
      id={props.blogData.id}
    >
      <Link href={`/blogs/${props.blogData.id}`} className={styles.blogLinks}>
        <a>{props.blogData.title} </a>
      </Link>
      <img src={props.blogData.imageUrl} alt="blogImage" />
      <p>{props.blogData.author}</p>
    </div>
  );
};
export default BlogCard;
