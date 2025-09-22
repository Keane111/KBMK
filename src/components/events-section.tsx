import { Card, CardContent } from "@/components/ui/card"

export function EventsSection() {
  const upcomingEvents = [
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
  ]

  return (
    <section id="events" className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-left mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">Events</h2>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-primary mb-8">Upcoming</h3>

          <div className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <div className="bg-muted rounded-lg h-48 flex items-center justify-center mb-4">
                    <span className="text-muted-foreground font-medium">Upload Images</span>
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">Event name</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </CardContent>
              </Card>

              <div className="space-y-4">
                {upcomingEvents.slice(1).map((event) => (
                  <Card key={event.id} className="border-2 border-primary">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="bg-muted rounded-lg w-24 h-16 flex items-center justify-center flex-shrink-0">
                          <span className="text-muted-foreground text-xs">Upload Images</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-foreground mb-2">{event.title}</h4>
                          <p className="text-muted-foreground text-xs leading-relaxed">
                            {event.description.substring(0, 120)}...
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
