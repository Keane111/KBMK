"use client";

import { useEffect, useState } from "react";

interface Article {
  id: string;
  title: string;
  content: string;
  category: string;
  image_url: string;
  created_at: string;
}

export default function ArticleSection() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch("/api/articles")
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error("❌ Gagal ambil artikel:", err));
  }, []);

  // Ambil 4 artikel terbaru saja
  const latestArticles = articles.slice(0, 4);
  const mainArticle = latestArticles[0];
  const sideArticles = latestArticles.slice(1, 4);

  return (
  <section
  className="py-16 px-6"
  style={{ backgroundColor: "#404040ff", background: "#404040ff !important" }}
>

      <div className="max-w-6xl mx-auto">
  
       

        {latestArticles.length === 0 ? (
          <p className="text-center text-gray-500">Belum ada artikel 😔</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {/* 🥇 Artikel utama (terbaru) */}
            {mainArticle && (
              <a
                href={`/articles/${mainArticle.id}`}
                className="block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300"
              >
                <img
                  src={mainArticle.image_url || "/placeholder.jpg"}
                  alt={mainArticle.title}
                  className="w-full h-72 object-cover"
                />
                <div className="p-6">
                  <span className="text-red-600 font-semibold uppercase text-sm">
                    {mainArticle.category}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 mb-3">
                    {mainArticle.title}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {mainArticle.content.split(" ").slice(0, 30).join(" ")}...
                  </p>
                </div>
              </a>
            )}

            {/* 📰 3 Artikel lainnya */}
            <div className="grid grid-cols-1 gap-6">
              {sideArticles.map((article) => (
                <a
                  key={article.id}
                  href={`/articles/${article.id}`}
                  className="block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="flex">
                    <img
                      src={article.image_url || "/placeholder.jpg"}
                      alt={article.title}
                      className="w-32 h-32 object-cover"
                    />
                    <div className="p-4">
                      <span className="text-red-600 font-semibold uppercase text-xs">
                        {article.category}
                      </span>
                      <h4 className="text-lg font-semibold mt-1 mb-2">
                        {article.title}
                      </h4>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {article.content.split(" ").slice(0, 20).join(" ")}...
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* 📁 Tombol ke halaman semua artikel */}
        <div className="text-center mt-12">
          <a
            href="/articles"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            📚 Lihat Semua Artikel
          </a>
        </div>
      </div>
    </section>
  );
}
