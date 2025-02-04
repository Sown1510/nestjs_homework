import Link from "next/link";
import styles from "./BlogPostItem.module.css";

export default function BlogPostItem({ blog }) {
  return (
    <div className={styles.blogPostItem}>
      {/* Blog post image */}
      <Link href={`/blog/${blog.blogId}`}>
        <img src={blog.featuredImage} alt={blog.title} className={styles.blogImage} />
      </Link>
      <div className={styles.content}>
        {/* Blog post title */}
        <Link href={`/blog/${blog.blogId}`}>
          <h2 className={styles.title}>{blog.title}</h2>
        </Link>
        {/* Blog post tags */}
        <div className={styles.tags}>
          {blog.tags.map((tag) => (
            <span key={tag.tagId} className={styles.tag}>
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
