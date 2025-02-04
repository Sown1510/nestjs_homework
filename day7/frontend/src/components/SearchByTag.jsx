import { useEffect, useState } from "react";
import styles from "./SearchByTag.module.css";

export default function SearchByTag({ tags, onTagSelect }) {
  const [selectedTags, setSelectedTags] = useState([]);
  const handleTagChange = (tag) => {
    const updatedSelectedTags = selectedTags.includes(tag) ? selectedTags.filter((t) => t !== tag) : [...selectedTags, tag];
    setSelectedTags(updatedSelectedTags);
  };

  useEffect(() => {
    onTagSelect(selectedTags);
  }, [selectedTags]);

  return (
    <div className={styles.searchByTag}>
      {tags.map((tag) => (
        <label key={tag.tagId} className={styles.tagLabel}>
          <input type="checkbox" value={tag.name} className={styles.tagCheckbox} onChange={() => handleTagChange(tag.name)} />
          <span className={styles.customCheckbox}></span>
          {tag.name}
        </label>
      ))}
    </div>
  );
}
