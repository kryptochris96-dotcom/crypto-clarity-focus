import { CheckCircle, TrendingUp, Shield, MessageSquare, Users, Hand } from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      icon: CheckCircle,
      title: "Verständliche Marktanalysen",
      description: "Regelmäßige, klar verständliche Analysen der wichtigsten Kryptomärkte und Charts ohne komplizierte Fachsprache."
    },
    {
      icon: TrendingUp,
      title: "Mittel- & Langfristige Strategien",
      description: "Fokus auf nachhaltige Handlungsbereiche und Beobachtungsstrategien für langfristigen Erfolg."
    },
    {
      icon: Shield,
      title: "Transparente Einschätzungen",
      description: "Persönliche Markteinschätzungen, die nachvollziehbar und transparent kommuniziert werden."
    },
    {
      icon: MessageSquare,
      title: "Schnelle Telegram-Updates",
      description: "Sofortige Benachrichtigungen bei relevanten Marktbewegungen direkt über unsere Telegram-Plattform."
    },
    {
      icon: Users,
      title: "Professionelle Analysten",
      description: "Erfahrene Experten mit jahrelanger Marktexpertise arbeiten täglich an präzisen und fundierten Analysen."
    },
    {
      icon: Hand,
      title: "Geld bleibt in deiner Hand",
      description: "Du behältst die volle Kontrolle über deine Investitionen. Wir liefern nur Informationen - dein Geld bleibt bei dir."
    }
  ]

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Warum uns unzählige Kunden vertrauen
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unsere bewährten Methoden und transparenten Analysen helfen Tradern dabei, informierte Entscheidungen zu treffen und langfristig erfolgreich zu sein.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-card p-8 rounded-xl border border-border hover:border-accent transition-colors">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}