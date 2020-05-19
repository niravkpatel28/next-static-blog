//this will render links in the side panel for content
import Link from "next/link";
import styles from "./sidePanel.module.css";
const SidePanel = ({ links }) => {
  console.log(links);
  return (
    <div className={styles.relatedLinks}>
      <h3> Related Links </h3>
      {links.map((link) => {
        return (
          <React.Fragment key={link.id}>
            <Link href={`/blogs/${link.id}`}>{link.title}</Link>
            <br />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default SidePanel;
