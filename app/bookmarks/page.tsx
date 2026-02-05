"use client";

import { useEffect, useState } from "react";
import { blogs } from "../../data/blogs";
import Link from "next/link";

export default function BookmarksPage() {
    const [bookmarks, setBookmarks] = useState<number[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem("bookmarks");
        if (stored) {
            setBookmarks(JSON.parse(stored));
        }
    }, []);

    const bookmarkedBlogs = blogs.filter((b) => bookmarks.includes(b.id));

    if (bookmarkedBlogs.length === 0) {
        return <p className="p-6 text-lg md:text-9x1 font-extrabold mb-10 text-center text-gray-500">BELUM ADA BOOKMARK, BESTIE</p>
    }

    return (
        <main className="p-6 max-w-2x1 mx-auto">
            <h1 className="p-4 text-lg md:text-9x1 font-extrabold mb-10">BOOKMARKS</h1>

            {bookmarkedBlogs.map((blog) => (
                <Link
                    key={blog.id}
                    href={`/blog/${blog.id}`}
                    className="block border-b pb-3 mb-4"
                >
                    <h2 className="font-semiblod hover:underline">{blog.title}</h2>
                    <p className="text-sm text-gray-500">
                        {blog.author} . {blog.created_at}
                    </p>
                </Link>
            ))}
        </main>
    )
}