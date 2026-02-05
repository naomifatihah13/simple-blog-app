"use client";

import { blogs } from "../data/blogs";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
const [bookmarks, setBookmarks] = useState<number[]>([]);

useEffect(() => {
  const stored = localStorage.getItem("bookmarks");
  if (stored) {
    setBookmarks(JSON.parse(stored));
  }
}, []);

  return (
    <main className="p-6">
      <h1 className="p-4 text-lg md:text-9x1 font-extrabold mb-10 text-center">
        Fakta Nggak Penting K-Pop
      </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {blogs.map((blog) => {
        const isBookmarked = bookmarks.includes(blog.id);

        return (
          <article 
            key={blog.id} 
            className="border rounded-x1 overflow-hidden bg-white shadow-sm hover:shadow-md transition">
            <div className="h-40 w-full overflow-hidden">  
              <img src={blog.image} alt="blog.title" className="h-full w-full object-cover"/>
            </div>
            <div className="p-4">
              <Link href={`/blog/${blog.id}`}>
                <h2 className="text-4x1 font-semibold hover:underline">{blog.title}</h2>
              </Link>

              <p className="text-sm text-gray-500">
                {blog.author} . {blog.created_at}
              </p>

              <p className="text-sm mt-1">
                {isBookmarked ? "★" : ""}
              </p>
            </div>  
          </article>
        );
      })}
    </div>
    </main>
  );
}