"use client";

import { useEffect, useState } from "react";

interface Props {
    blog: number;
}

export default function BookmarkButton({ blogId }: {blogId: number} ) {
    const [bookmarked, setBookmarked] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("bookmarks");
            if (!stored) return;

            const bookmarks: number[] = JSON.parse(stored);
            setBookmarked(bookmarks.includes(blogId));
    }, [blogId]);

    function toggleBookmarks() {
        const stored = localStorage.getItem("bookmarks");
        const bookmarks: number[] = stored ? JSON.parse(stored) : [];

        if (bookmarks.includes(blogId)) {
            const updated = bookmarks.filter((id) => id !== blogId);
            localStorage.setItem("bookmarks", JSON.stringify(updated));
            setBookmarked(false);
        } else {
            const updated = [...bookmarks, blogId];
            localStorage.setItem("bookmarks", JSON.stringify(updated));
            setBookmarked(true);
        }
    }

    return (
        <button onClick={toggleBookmarks} className="px-4 py-2 border rounded">
            {bookmarked ? "[✓]Bookmarked" : "[]Bookmark"}
        </button>
    );
}