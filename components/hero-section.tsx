'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HeroSection() {
  const handleClick = () => {
    const featuresSection = document.querySelector('#features-section')
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative bg-[#0d1117] py-24 overflow-hidden">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#161b22] to-[#0d1117]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#238636]/10 border border-[#238636]/20">
            <span className="text-[#2ea043] text-sm font-medium">Plataforma para Criadores</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-gray-100 mb-4 tracking-tight">
            A melhor plataforma de
            <br />
            cursos para{" "}
            <span className="text-[#58a6ff]">criadores</span>
          </h1>
          
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
            O menor custo para colocar o seu curso no ar, usando o seu próprio método de pagamento.
          </p>

          <div className="flex max-w-md mx-auto gap-2 -mb-16 md:mb-16 justify-center">
            {/* <Input 
              type="email" 
              placeholder="Insira seu endereço de e-mail"
              className="bg-[#161b22] border-[#30363d] text-gray-100 placeholder:text-gray-500 focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff]"
            /> */}
            <Button 
              className="bg-[#238636] hover:bg-[#2ea043] text-white border-none whitespace-nowrap px-8"
              onClick={handleClick}
            >
              Conheça agora
            </Button>
          </div>
          
          {/* Progress Stages */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-0 right-0 h-[1px] top-2 hidden md:block">
              <div className="h-full bg-gradient-to-r from-[#238636] via-[#58a6ff] to-[#238636]" />
            </div>

            {/* Stage Points */}
            <div className="relative hidden md:grid grid-cols-4 gap-4">
              {[
                {
                  title: "Comece",
                  description: "Escolha a opção que melhor se adapta ao seu curso"
                },
                {
                  title: "Informe",
                  description: "Em 2 dias úteis colocamos sua plataforma no ar, com a sua marca"
                },
                {
                  title: "Monetize",
                  description: "Use sua própria plataforma de pagamento, sem estar vinculado a plataforma"
                },
                {
                  title: "Escale",
                  description: "Use a plataforma para o início do seu negócio, com membros gratuitos e pagos"
                }
              ].map((stage, index) => (
                <div key={stage.title} className="flex flex-col items-center pt-8">
                  <div className="w-4 h-4 rounded-full bg-[#0d1117] ring-4 ring-[#161b22] border-2 border-[#58a6ff] mb-4" />
                  <h3 className="text-gray-100 font-semibold mb-2">{stage.title}</h3>
                  <p className="text-gray-400 text-sm text-center max-w-[250px] leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

