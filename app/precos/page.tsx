'use client'

import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HeroSection } from '@/components/hero-section'
import { Layout } from '@/components/layout'
import { Switch } from "@/components/ui/switch"
import { useState } from 'react'

const plans = [
  {
    name: 'Profissional',
    price: 189,
    originalPrice: 299,
    description: 'Acesse as principais features para construir sua comunidade, tudo em um só lugar',
    features: [
      'Crie versões pagas e gratuitas do seu conteúdo',
      'Sistema de indicações entre usuários e afiliados',
      'Certificados ao concluir módulos',
      'Sistema de gamificação com ranking e recompensas',
      'Cursos interativos',
      'Vídeos curtos (Shorts)',
      'Gestão completa de membros',
      'Relatórios de acesso e engajamento'
    ],
    additionalFeatures: [
      'Acompanhamento de progresso dos alunos',
      'Questionários e testes interativos',
      'Sistema de prêmios por indicação',
      'Certificados personalizados',
      'Dashboard de análise de engajamento',
      'Relatórios de conclusão de módulos',
      'Gestão de conteúdo gratuito e pago',
      'Métricas de desempenho dos alunos'
    ]
  },
  {
    name: 'Business',
    price: 449,
    originalPrice: 749,
    description: 'Escale sua comunidade com automações e personalização avançada',
    popular: true,
    features: [
      'Automação de liberação de conteúdo',
      'Personalização avançada de certificados',
      'API para integração com outras plataformas',
      'Sistema avançado de gamificação',
      'Relatórios personalizados',
      'Automação de notificações',
      'Múltiplos administradores',
      'Suporte prioritário'
    ],
    additionalFeatures: [
      'Migração assistida de conteúdo',
      'Treinamento da equipe',
      'Consultoria de implementação'
    ]
  },
  {
    name: 'Enterprise',
    price: 997,
    originalPrice: 1497,
    description: 'Solução completa para grandes organizações com necessidades específicas',
    dark: true,
    features: [
      'Ambiente dedicado e customizado',
      'Integrações personalizadas',
      'API exclusiva',
      'Suporte 24/7',
      'SLA garantido',
      'Backup dedicado',
      'Infraestrutura exclusiva',
      'Segurança avançada'
    ],
    additionalFeatures: [
      'Implementação white-label completa',
      'Gerente de sucesso dedicado',
      'Treinamento in-company'
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
  const [annualStates, setAnnualStates] = useState<{ [key: string]: boolean }>(
    plans.reduce((acc, plan) => ({ ...acc, [plan.name]: true }), {})
  )

  const getMonthlyPrice = (annualPrice: number) => {
    return Math.round(annualPrice * 1.25)
  }

  return (
    <Layout>
      <div>
        <div className="container mx-auto px-4 pb-24 pt-32">
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
                  
                  {typeof plan.price === 'number' && (
                    <div className="flex items-center justify-center gap-3 mt-4">
                      <span className={`text-sm font-medium px-2 py-1 rounded ${
                        annualStates[plan.name] 
                          ? `${plan.dark ? 'bg-white/10' : 'bg-green-500'} ${plan.dark ? 'text-white' : 'text-gray-900'}`
                          : 'text-gray-400'
                      }`}>
                        Anual
                      </span>
                      <Switch
                        checked={!annualStates[plan.name]}
                        onCheckedChange={(checked) => 
                          setAnnualStates(prev => ({
                            ...prev,
                            [plan.name]: !checked
                          }))
                        }
                        className="data-[state=checked]:bg-gray-200 data-[state=unchecked]:bg-green-500"
                      />
                      <span className={`text-sm font-medium px-2 py-1 rounded ${
                        !annualStates[plan.name]
                          ? `${plan.dark ? 'bg-white/10' : 'bg-gray-100'} ${plan.dark ? 'text-white' : 'text-gray-900'}`
                          : 'text-gray-400'
                      }`}>
                        Mensal
                      </span>
                    </div>
                  )}

                  <div className="mt-4">
                    {typeof plan.price === 'number' ? (
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold">
                          R${annualStates[plan.name] ? plan.price : getMonthlyPrice(plan.price)}
                        </span>
                        <span className="ml-2 text-sm text-muted-foreground line-through">
                          {plan.originalPrice 
                            ? `R$${annualStates[plan.name] ? plan.originalPrice : getMonthlyPrice(plan.originalPrice)}`
                            : ''}
                        </span>
                        <span className="ml-2 text-sm text-muted-foreground">
                          /{annualStates[plan.name] ? 'mês' : 'mês'}
                        </span>
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
                    onClick={() => window.location.href = 'https://wa.me/5561999798448'}
                  >
                    14 dias de teste gratuito
                  </Button>
                  {typeof plan.price === 'number' && (
                    <Button 
                      variant="link" 
                      className="w-full mt-2 text-sm"
                      onClick={() => window.location.href = 'https://wa.me/5561999798448'}
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
                        <li key={feature} className="flex items-center gap-2">
                          <Check className={`shrink-0 h-4 w-4 ${plan.dark ? 'text-white' : 'text-[#4f46e5]'}`} />
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
                            <li key={feature} className="flex items-center gap-2">
                              <Check className={`shrink-0 h-4 w-4 ${plan.dark ? 'text-white' : 'text-[#4f46e5]'}`} />
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
    </Layout>
  )
}