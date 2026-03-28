import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const BLOG_POSTS = [
  { id: "compress-images", title: "How to Compress Images Online (Step-by-Step Guide)" },
  { id: "free-pdf-tools", title: "Best Free PDF Tools You Can Use Online" },
  { id: "base64-encoding", title: "What is Base64 Encoding and How It Works" },
  { id: "tools-for-students", title: "Top Online Tools for Students in 2026" },
  { id: "merge-pdf-files", title: "How to Merge PDF Files Without Software" },
];

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-black text-slate-900 mb-8">SmartConverter Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="bg-white border border-slate-200 rounded-3xl p-6 hover:border-indigo-500 hover:shadow-xl transition-all"
          >
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
              <BookOpen size={24} />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">{post.title}</h2>
            <p className="text-slate-500 text-sm">Read more about {post.title.toLowerCase()}...</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
