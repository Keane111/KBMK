import { Card, CardContent } from "@/components/ui/card"

export function ArticlesSection() {
  const articles = [
    {
      id: 1,
      title: "Event name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      title: "Event name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      title: "Event name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 4,
      title: "Event name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ]

  return (
    <section id="articles" className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="text-left mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Articles</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Card key={article.id} className="bg-background">
              <CardContent className="p-6">
                <div className="bg-muted rounded-lg h-48 flex items-center justify-center mb-4">
                  <span className="text-muted-foreground font-medium">Upload Images</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{article.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{article.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
