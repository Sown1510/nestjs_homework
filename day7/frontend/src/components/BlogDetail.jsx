import Link from "next/link";
import styles from "./BlogDetail.module.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function BlogDetail({ blog }) {
  return (
    <div className={styles.blogDetail}>
      <Link href="/blog" className={styles.backLink}>
        <i className="fa-solid fa-arrow-left-long"></i>
      </Link>
      <h1 className={styles.title}>{blog.title}</h1>
      <img
        src={blog.featuredImage}
        alt={blog.title}
        className={styles.blogImage}
      />
      <div className={styles.content}>{blog.content}</div>
      <div className={styles.tags}>
        {blog.tags.map((tag) => (
          <span key={tag.tagId} className={styles.tag}>
            {tag.name}
          </span>
        ))}
      </div>
      <Link href="/blog">Back to Blog List</Link>
    </div>
  );
}
