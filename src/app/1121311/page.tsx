"use client";

import { useState, useEffect } from "react";

interface Article {
  id: string;
  title: string;
  content: string;
  category: string;
  author: string;
  image_url: string;
  created_at: string;
}

export default function AdminPage() {
  // 📤 Form state
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Article");
  const [author, setAuthor] = useState("Admin");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // 📥 Data artikel
  const [articles, setArticles] = useState<Article[]>([]);
  const [loadingArticles, setLoadingArticles] = useState(false);

  // 🔁 Ambil semua artikel saat pertama kali dibuka
  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    setLoadingArticles(true);
    const res = await fetch("/api/articles");
    const data = await res.json();
    setArticles(data);
    setLoadingArticles(false);
  };

  // ✅ Publish artikel baru
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const res = await fetch("/api/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        content,
        category,
        author,
        image_url: imageUrl,
      }),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      setMessage("✅ Artikel berhasil dipublish!");
      setTitle("");
      setContent("");
      setCategory("Article");
      setImageUrl("");
      fetchArticles(); // 🔁 refresh daftar artikel
    } else {
      setMessage(`❌ Gagal: ${data.error || "Terjadi kesalahan"}`);
    }
  };

  // 🗑️ Hapus artikel
  const handleDelete = async (id: string) => {
    if (!confirm("⚠️ Yakin ingin menghapus artikel ini?")) return;

    const res = await fetch("/api/articles", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    const result = await res.json();

    if (res.ok) {
      alert("🗑️ Artikel berhasil dihapus!");
      fetchArticles();
    } else {
      alert("❌ Gagal menghapus artikel: " + result.error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">🛠️ Admin - Publish Artikel</h1>

        {/* 📤 Form Tambah Artikel */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">📄 Judul Artikel</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Masukkan judul..."
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">📁 Kategori</label>
            <select
              className="w-full border rounded px-3 py-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Article">Article</option>
              <option value="News">News</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">✍️ Penulis</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Nama penulis..."
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">🖼️ URL Gambar</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://example.com/gambar.jpg"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">📝 Konten Artikel</label>
            <textarea
              className="w-full border rounded px-3 py-2 h-40"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Tulis isi artikel..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            {loading ? "⏳ Menyimpan..." : "📤 Publish Artikel"}
          </button>

          {message && <p className="mt-3 text-center text-lg">{message}</p>}
        </form>
      </div>

      {/* 📜 Daftar Artikel */}
      <div className="max-w-5xl mx-auto mt-16 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">📚 Semua Artikel</h2>

        {loadingArticles ? (
          <p className="text-center text-gray-500">⏳ Memuat artikel...</p>
        ) : articles.length === 0 ? (
          <p className="text-center text-gray-500">📭 Belum ada artikel</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-3">Judul</th>
                <th className="p-3">Kategori</th>
                <th className="p-3">Penulis</th>
                <th className="p-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr key={article.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-semibold">{article.title}</td>
                  <td className="p-3">{article.category}</td>
                  <td className="p-3">{article.author}</td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleDelete(article.id)}
                      className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                    >
                      🗑️ Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
