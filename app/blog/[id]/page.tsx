import { blogs } from "../../../data/blogs";
import BookmarkButton from "../../../components/BookmarkButton";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function BlogDetailPage ({ params }: PageProps) {
    const { id } = await params;
    
    const blogId = Number(id);
    
    const blog = blogs.find((b) => b.id === blogId);

    if (!blog) {
        return <p className="p-6 text-lg md:text-9x1 font-extrabold mb-10 text-center text-gray-500">HAYOO BLOG TIDAK DITEMUKAN!</p>;
    }
    
    return (
        <main className="p-6 max-w-2x1 mx-auto">
            <h1 className="text-lg md:text-9x1 font-extrabold mb-10 text-center">{blog.title}</h1>
            <div>
                <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover object-center"/>
            </div>
            <p className="text-sm text-gray-500 mb-6">{blog.author} . {blog.created_at}</p>
            <article className="leading-relaxed mb-6">{blog.content}</article>

            <BookmarkButton blogId={blogId} />
        </main>
    );
}