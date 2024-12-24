import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HeroSection } from '@/components/hero-section'
import { Layout } from '@/components/layout'

const plans = [
  {
    name: 'Profissional',
    price: 471,
    originalPrice: 559,
    description: 'Acesse as principais features para construir sua comunidade, tudo em um só lugar',
    features: [
      'Aceite pagamentos por Pix ou com parcelamento inteligente',
      'Perfis de membros detalhados',
      'Diretório de membros pesquisável',
      'Discussões',
      'Eventos',
      'Assinaturas pagas',
      'Resumo semanal da comunidade',
      'Gamificação',
      'Domínio personalizado'
    ],
    additionalFeatures: [
      'Cursos',
      'Transmissões ao vivo',
      'Salas ao vivo',
      'Membros ilimitados',
      'Marca personalizada',
      'Relatórios e análises',
      'Snippets de código personalizados',
      'Rastreamento de conversão',
      'Serviço de migração de pagamentos'
    ]
  },
  {
    name: 'Business',
    price: 1054,
    originalPrice: 1159,
    description: 'Escale sua comunidade com automações e personalização',
    popular: true,
    features: [
      'Automações',
      'Campos de perfil personalizados',
      'API de Membros Headless',
      'API de Administração',
      'Notificações por email com a sua marca',
      'Gerador de conteúdo de IA',
      'Transcrições automatizadas',
      'Pontuação por atividade'
    ],
    additionalFeatures: [
      'Serviço de migração de cursos'
    ]
  },
  {
    name: 'Enterprise',
    price: 1579,
    originalPrice: 2309,
    description: 'Gerencie seu negócio com acesso total, limites máximos e suporte prioritário',
    dark: true,
    features: [
      'Automações ilimitadas',
      'SSO',
      'Suporte prioritário',
      'Relatórios avançados',
      'Taxas de transação reduzidas',
      'Comunidade de teste (sandbox)',
      'Até 10 administradores e 100 moderadores'
    ],
    additionalFeatures: [
      'Implementação assistida',
      'Avaliações trimestrais',
      'Gerente de sucesso dedicado'
    ]
  },
  {
    name: 'Plus: App Personalizado',
    price: 'Sob Consulta',
    description: 'Tenha seu próprio aplicativo personalizado, com tudo feito pela nossa equipe',
    features: [
      'Seu próprio aplicativo pra Android e iOS',
      'Serviço de migração prioritário',
      'Equipe dedicada',
      'Acesso ao estúdio de design da SBC',
      'Notificações push personalizadas',
      'Oferece compra dentro do próprio aplicativo',
      'Limites maiores em todas as funcionalidades'
    ]
  }
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Black Friday Banner */}
      <div className="bg-[#1a103d] text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Black Friday: <span className="text-[#4f46e5]">Economize R$6.360 no plano Enterprise anual</span>
          </h1>
          <p className="text-gray-300">
            Teste gratuitamente sem precisar de cartão de crédito. Cancele a qualquer momento. Oferta válida até 23:59 de terça-feira, 3 de dezembro.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className={`relative ${plan.dark ? 'bg-[#1a103d] text-white' : ''}`}
            >
              <CardHeader>
                {plan.popular && (
                  <Badge className="absolute top-4 right-4 bg-[#4f46e5]">
                    MAIS POPULAR
                  </Badge>
                )}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <div className="mt-4">
                  {typeof plan.price === 'number' ? (
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">R${plan.price}</span>
                      <span className="ml-2 text-sm text-muted-foreground line-through">
                        R${plan.originalPrice}
                      </span>
                      <span className="ml-2 text-sm text-muted-foreground">/mês</span>
                    </div>
                  ) : (
                    <div className="text-2xl font-bold">{plan.price}</div>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent className="mt-4">
                <Button 
                  className={`w-full ${plan.dark ? 'bg-white text-[#1a103d] hover:bg-white/90' : ''}`}
                >
                  14 dias de teste gratuito
                </Button>
                {typeof plan.price === 'number' && (
                  <Button 
                    variant="link" 
                    className="w-full mt-2 text-sm"
                  >
                    Converse com nosso time de vendas
                  </Button>
                )}
                <div className="mt-6">
                  <p className="font-medium mb-4">
                    {plan.name === 'Business' || plan.name === 'Enterprise' 
                      ? 'Todos benefícios do Plano Professional, além de:'
                      : plan.name === 'Plus: App Personalizado'
                      ? 'Todos benefícios do Plano Enterprise, além de:'
                      : 'Principais funcionalidades:'}
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <Check className={`h-5 w-5 ${plan.dark ? 'text-white' : 'text-[#4f46e5]'}`} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.additionalFeatures && (
                    <>
                      <p className="font-medium mt-6 mb-4">
                        {plan.name === 'Business' || plan.name === 'Enterprise'
                          ? 'Somente no plano anual:'
                          : 'Além de:'}
                      </p>
                      <ul className="space-y-3">
                        {plan.additionalFeatures.map((feature) => (
                          <li key={feature} className="flex gap-2">
                            <Check className={`h-5 w-5 ${plan.dark ? 'text-white' : 'text-[#4f46e5]'}`} />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

