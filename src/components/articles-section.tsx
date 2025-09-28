"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type Article = {
  id: number
  title: string
  description: string
  image: string
  link: string
}

export function ArticlesSection() {
  const [articles, setArticles] = useState<Article[]>([
    {
      id: 1,
      title: "Event name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore...",
      image: "https://via.placeholder.com/400x200",
      link: "/articles/1",
    },
  ])

  const [newArticle, setNewArticle] = useState({
    title: "",
    description: "",
    image: "",
    link: "",
  })

  const handleUpload = () => {
    if (!newArticle.title || !newArticle.description || !newArticle.image) return
    setArticles([
      ...articles,
      {
        id: Date.now(),
        ...newArticle,
      },
    ])
    setNewArticle({ title: "", description: "", image: "", link: "" })
  }

  return (
    <section id="articles" className="bg-primary py-16 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-left mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Articles</h2>
        </div>

        {/* Upload Form */}
        <div className="bg-white p-6 rounded-lg mb-10">
          <h3 className="text-lg font-bold mb-4">Upload Artikel</h3>
          <Input
            type="text"
            placeholder="Judul artikel"
            value={newArticle.title}
            onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
            className="mb-3"
          />
          <Textarea
            placeholder="Isi artikel"
            value={newArticle.description}
            onChange={(e) => setNewArticle({ ...newArticle, description: e.target.value })}
            className="mb-3"
          />
          <Input
            type="text"
            placeholder="Link gambar (URL)"
            value={newArticle.image}
            onChange={(e) => setNewArticle({ ...newArticle, image: e.target.value })}
            className="mb-3"
          />
          <Input
            type="text"
            placeholder="Link artikel (opsional)"
            value={newArticle.link}
            onChange={(e) => setNewArticle({ ...newArticle, link: e.target.value })}
            className="mb-3"
          />
          <Button onClick={handleUpload}>Tambah Artikel</Button>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.link || "#"}
              className="transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <Card className="bg-background">
                <CardContent className="p-6">
                  <div className="rounded-lg h-48 flex items-center justify-center mb-4 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {article.description.split(".")[0]}.
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
