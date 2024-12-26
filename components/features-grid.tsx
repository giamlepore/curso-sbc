'use client'

import { Check, ChevronRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState } from 'react'

const features = {
  comece: {
    title: 'Comece',
    color: 'text-[#58a6ff]',
    dotColor: 'bg-[#58a6ff]',
    items: [
      'Acesso gratuito aos membros',
      'Acesso pago aos membros',
      'Avaliações e testes',
      'Cursos imersivos',
      'Espaços privados',
      'Legendas automáticas de vídeos',
      'Diretório de membros',
      'Identidade visual personalizada'
    ]
  },
  engaje: {
    title: 'Engaje',
    color: 'text-[#238636]',
    dotColor: 'bg-[#238636]',
    items: [
      'Ranking de membros',
      'Sequência de acesso',
      'Programa de indicações com prêmios',
      'Comentários',
      'Testes e avaliações',
    ]
  },
  monetize: {
    title: 'Monetize',
    color: 'text-[#a371f7]',
    dotColor: 'bg-[#a371f7]',
    items: [
      'Use o seu próprio método de pagamento',
      'Use VIMEO ou YOUTUBE para hospedar seus vídeos',
      'Acesso controlado',
      'Testes gratuitos',
      'Libere cupons para usuários que concluíram aulas gratuitas',
    ]
  },
  escale: {
    title: 'Escale',
    color: 'text-[#f778ba]',
    dotColor: 'bg-[#f778ba]',
    items: [
      'Programa de indicações (use com membros ou afiliados)',
      'Veja quem assistiu suas aulas e quando',
      'Certificados constantes',
      'Veja quantos usuários ativos você teve por dia, em um calendário',
    ]
  }
}

export function FeaturesGrid() {
  const [emblaRef] = useEmblaCarousel({ align: 'start' })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const renderFeatures = () => {
    if (isMobile) {
      return (
        <div className="overflow-hidden relative" ref={emblaRef}>
          <div className="flex">
            {Object.entries(features).map(([key, category]) => (
              <div key={key} className="flex-[0_0_100%] min-w-0 pl-4 first:pl-0">
                <div className="space-y-6 pr-4 bg-[#161b22] border border-[#30363d] hover:border-[#58a6ff]/50 rounded-lg p-6 relative transition-colors">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${category.dotColor}`} />
                    <h3 className={`text-xl font-semibold ${category.color}`}>
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 group">
                        <Check className="h-5 w-5 mt-1 text-[#238636]" />
                        <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <ChevronRight className="h-6 w-6 text-gray-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }

    return (
      <div className="grid md:grid-cols-4 gap-6">
        {Object.entries(features).map(([key, category]) => (
          <div 
            key={key} 
            className="space-y-6 bg-[#161b22] border border-[#30363d] hover:border-[#58a6ff]/50 rounded-lg p-6 transition-all duration-200 hover:translate-y-[-2px]"
          >
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${category.dotColor}`} />
              <h3 className={`text-xl font-semibold ${category.color}`}>
                {category.title}
              </h3>
            </div>
            <ul className="space-y-4">
              {category.items.map((item) => (
                <li key={item} className="flex items-start gap-2 group">
                  <Check className="h-5 w-5 mt-1 text-[#238636]" />
                  <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )
  }

  return (
    <section className="py-20 bg-[#0d1117]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#238636]/10 border border-[#238636]/20">
            <span className="text-[#2ea043] text-sm font-medium">Recursos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">
            Tudo o que você precisa para
            <br />
            <span className="text-[#58a6ff]">começar agora mesmo</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Você sabe o que deseja para a sua comunidade. A SBC dá vida à sua visão - de
            forma rápida e descomplicada.
          </p>
        </div>
        {renderFeatures()}
      </div>
    </section>
  )
}

