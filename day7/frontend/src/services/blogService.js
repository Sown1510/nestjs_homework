import { ClientPageRoot } from "next/dist/client/components/client-page";

const BASE_URL = "http://localhost:3001";

export async function fetchBlogs() {
  const res = await fetch(`${BASE_URL}/blog`);
  if (!res.ok) {
    throw new Error("Faild to fetch blogs");
  }
  return res.json();
}

export async function fetchBlogsLimit(page = 1, limit = 9, search = "", tags = []) {
  const tagQuery = tags.map((tag) => `tags=${tag}`).join("&");
  const res = await fetch(`${BASE_URL}/blog?page=${page}&limit=${limit}&search=${search}&${tagQuery}`);
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

export async function fetchBlogById(id) {
  const res = await fetch(`${BASE_URL}/blog/${id}`);
  if (!res.ok) {
    throw new Error("Faild to fetch blog");
  }
  return res.json();
}

export async function fetchTags() {
  const res = await fetch(`${BASE_URL}/blog/tags`);
  return res.json();
}
