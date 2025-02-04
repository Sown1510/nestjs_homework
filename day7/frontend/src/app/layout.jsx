import Navbar from "@/components/Navbar";
import Link from "next/link";
import "../styles/theme.css";
import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const metadata = {
  title: "My Blog",
  description: "A simple blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <footer>
          <p>2025 My Blog</p>
        </footer>
      </body>
    </html>
  );
}
