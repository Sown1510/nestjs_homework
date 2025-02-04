"use client";

import BlogPostItem from "@/components/BlogPostItem";
import { fetchBlogsLimit, fetchTags } from "@/services/blogService";
import styles from "./BlogListPage.module.css";
import { useEffect, useReducer, useState } from "react";
import SearchBar from "@/components/SearchBar";
import SearchByTag from "@/components/SearchByTag";

export default function BlogListPage() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    async function loadTags() {
      const tags = await fetchTags();
      setTags(tags);
    }
    loadTags();
  }, []);

  useEffect(() => {
    async function loadBlogs() {
      if (!blogs[page + 1] || searchQuery || selectedTags) {
        const newBlogs = await fetchBlogsLimit(page, 9, searchQuery, selectedTags);
        const nextBlogs = await fetchBlogsLimit(page + 1, 9, searchQuery, selectedTags);
        if (newBlogs.length > 0) {
          setBlogs((prevBlogs) => ({
            ...prevBlogs,
            [page]: newBlogs,
          }));
        }
        if (nextBlogs.length > 0) {
          setBlogs((prevBlogs) => ({
            ...prevBlogs,
            [page + 1]: nextBlogs,
          }));
        }
      }
    }
    loadBlogs();
  }, [selectedTags, page, searchQuery]);

  const handleSearch = (query) => {
    setBlogs([]);
    setSearchQuery(query);
    setPage(1);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleTagSelect = (tags) => {
    setSelectedTags(tags);
    setBlogs([]);
    setPage(1);
  };

  return (
    <div className={styles.container}>
      <h1>Blog</h1>
      <SearchBar onSearch={handleSearch} />
      <SearchByTag tags={tags} onTagSelect={handleTagSelect} />
      <div className={styles.blogList}>
        {(blogs[page] || []).map((blog) => (
          <BlogPostItem key={blog.blogId} blog={blog} />
        ))}
      </div>
      <div className={styles.pagination}>
        <button onClick={handlePrevPage} disabled={page === 1} className={styles.paginationButton}>
          Prev
        </button>
        <span className={styles.pageNumber}>Page {page}</span>
        <button onClick={handleNextPage} disabled={!blogs[page + 1]} className={styles.paginationButton}>
          Next
        </button>
      </div>
    </div>
  );
}
