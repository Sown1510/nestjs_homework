import React, { useEffect, useState } from "react";
import styles from "./SearchBar.module.css";
import useDebounce from "@/hooks/useDebounce";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);
  //   useEffect(() => {
  //     onSearch(debouncedQuery);
  //   }, [debouncedQuery, onSearch]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(query);
  };

  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Search blogs..." value={query} onChange={handleInputChange} className={styles.searchInput} />
    </div>
  );
}
