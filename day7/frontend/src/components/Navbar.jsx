"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import styles from "./Navbar.module.css";

export default function Navbar() {
  // Tạo state để lưu chế độ (light / dark)
  const [theme, setTheme] = useState("light");

  // Lấy giá trị theme từ localStorage khi component được mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.classList.add(savedTheme);
  }, []);

  // Thay đổi theme khi nhấn vào biểu tượng
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          SOWN
          {/* <img src="/" alt="Logo" className={styles.logoImage} /> */}
        </Link>
      </div>
      <ul className={styles.navList}>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href={`blog`}>About</Link>
        </li>
        <li>
          <Link href={`blog`}>Contact</Link>
        </li>
        <li>
          <Link href={`blog`}>Project</Link>
        </li>
        <button onClick={toggleTheme} className={styles.themeToggle}>
          {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
        </button>
      </ul>
    </nav>
  );
}
