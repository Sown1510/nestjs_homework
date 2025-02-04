import BlogDetail from "@/components/BlogDetail";
import { fetchBlogById } from "@/services/blogService";
import Link from "next/link";

export default async function BlogDetailPage({ params }) {
  const { id } = await params;
  const blog = await fetchBlogById(id);
  if (!blog) {
    return <div>Blog not found</div>;
  }
  return <BlogDetail blog={blog} />;
}
