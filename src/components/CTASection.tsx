import { MessageCircle, CheckCircle } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-24 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-foreground mb-8">
          Bereit für professionelle Krypto-Analysen?
        </h2>
        <p className="text-xl text-muted-foreground mb-12">
          Tritt unserem exklusiven Telegram-Kanal bei und erhalte täglich präzise Marktanalysen von unseren Experten.
        </p>

        <div className="bg-card p-8 rounded-2xl border border-border max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-[#0088cc]/10 p-4 rounded-full">
              <MessageCircle className="h-8 w-8 text-[#0088cc]" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-card-foreground mb-6">
            Telegram Premium Analysen
          </h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center text-left">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-muted-foreground">Täglich präzise Marktanalysen und Charts</span>
            </div>
            <div className="flex items-center text-left">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-muted-foreground">Sofortige Updates bei wichtigen Marktbewegungen</span>
            </div>
            <div className="flex items-center text-left">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-muted-foreground">Persönliche Einschätzungen unserer Experten</span>
            </div>
            <div className="flex items-center text-left">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-muted-foreground">Langfristige Strategien für nachhaltigen Erfolg</span>
            </div>
          </div>

          <button className="w-full bg-[#0088cc] hover:bg-[#0088cc]/90 text-white font-semibold py-4 px-8 rounded-xl transition-colors flex items-center justify-center gap-3">
            <MessageCircle className="h-5 w-5" />
            Jetzt Telegram-Kanal beitreten
          </button>
        </div>
      </div>
    </section>
  )
}