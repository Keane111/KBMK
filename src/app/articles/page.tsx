"use client";

import { useEffect, useState } from "react";

interface Article {
  id: string;
  title: string;
  content: string;
  category: string;
  image_url: string;
  author: string;
  created_at: string;
}

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);

  // Ambil data artikel dari API
  useEffect(() => {
    fetch("/api/articles")
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">📰 Artikel & Berita</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={article.image_url || "/placeholder.jpg"}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <span className="text-sm text-red-600 font-semibold uppercase">
                {article.category}
              </span>
              <h2 className="text-xl font-bold mt-2 mb-3">{article.title}</h2>
              <p className="text-gray-700 text-sm mb-4">
                {article.content.length > 120
                  ? article.content.substring(0, 120) + "..."
                  : article.content}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>✍️ {article.author}</span>
                <span>
                  📅 {new Date(article.created_at).toLocaleDateString("id-ID")}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {articles.length === 0 && (
        <p className="text-center text-gray-500 mt-20">Belum ada artikel 😔</p>
      )}
    </div>
  );
}
