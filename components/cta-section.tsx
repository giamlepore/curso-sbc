import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShieldCheck } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-[#0d1117] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM38.284 0l7.9 7.9-1.415 1.413-9.9-9.9h3.415zM20.686 0l-7.9 7.9 1.415 1.413 9.9-9.9h-3.415zM9.414 0L8 1.414l5.657 5.657 1.414-1.414L9.414 0zm41.172 0L52 1.414l-5.657 5.657-1.414-1.414L50.586 0z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="relative max-w-4xl mx-auto bg-[#161b22] border border-[#30363d] rounded-lg p-12 text-center">
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#58a6ff] via-[#a371f7] to-[#238636] opacity-20 blur-xl" />
          
          <div className="relative">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#238636]/10 border border-[#238636]/20">
              <span className="text-[#2ea043] text-sm font-medium">Comece Agora</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
              Pronto para começar?
            </h2>

            <div className="flex max-w-md mx-auto gap-3 mb-6">
              <Input 
                type="email" 
                placeholder="Insira seu endereço de e-mail"
                className="bg-[#0d1117] border-[#30363d] text-gray-100 placeholder:text-gray-500 focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff]"
              />
              <Button 
                className="bg-[#238636] hover:bg-[#2ea043] text-white border-none whitespace-nowrap px-8 transition-colors"
              >
                Comece os seus 14 dias grátis
              </Button>
            </div>

            <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#238636]" />
              Experimente a SBC, sem precisar de cartão de crédito
            </p>

            {/* Trust Badges */}
            <div className="mt-8 pt-8 border-t border-[#30363d]">
              <div className="flex justify-center items-center gap-8 opacity-50 hover:opacity-100 transition-opacity">
                {/* Add your trust badges/logos here */}
                <div className="text-gray-500 text-sm">Mais de 10.000 criadores confiam na SBC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

