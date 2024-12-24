'use client'

import Link from 'next/link'
import { Users, BookOpen, Calendar, MessageCircle, Layers, CreditCard, Zap, LineChart, Trophy, Sparkles, LinkIcon, Mail, ChevronDown } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from '@/lib/utils'

const features = [
  {
    title: 'Discussões',
    description: 'Promova conversas envolventes',
    icon: Users,
    href: '/produto/discussoes'
  },
  {
    title: 'Cursos',
    description: 'Crie e ofereça cursos impulsionados pela comunidade',
    icon: BookOpen,
    href: '/produto/cursos'
  },
  {
    title: 'Eventos',
    description: 'Realize eventos virtuais, de qualquer lugar',
    icon: Calendar,
    href: '/produto/eventos'
  },
  {
    title: 'Chat',
    description: 'Aumente o engajamento com discussões',
    icon: MessageCircle,
    href: '/produto/chat'
  },
  {
    title: 'Personalização',
    description: 'Dê vida à visão da sua comunidade',
    icon: Layers,
    href: '/produto/personalizacao'
  },
  {
    title: 'Pagamentos',
    description: 'Cobre pelo acesso à sua comunidade e conteúdo',
    icon: CreditCard,
    href: '/produto/pagamentos'
  },
  {
    title: 'Automações',
    description: 'Automatize experiências personalizadas',
    icon: Zap,
    href: '/produto/automacoes'
  },
  {
    title: 'Relatórios',
    description: 'Obtenha todos os dados da sua comunidade',
    icon: LineChart,
    href: '/produto/relatorios'
  },
  {
    title: 'Gamificação',
    description: 'Use pontos e recompensas para manter seus membros engajados',
    icon: Trophy,
    href: '/produto/gamificacao',
    isNew: true
  },
  {
    title: 'IA para comunidades',
    description: 'Potencialize sua comunidade com o poder da inteligência artificial',
    icon: Sparkles,
    href: '/produto/ia'
  },
  {
    title: 'Integrações',
    description: 'Conecte suas ferramentas favoritas à SBC',
    icon: LinkIcon,
    href: '/produto/integracoes'
  },
  {
    title: 'Marketing Hub',
    description: 'Email, CRM, e automação de marketing',
    icon: Mail,
    href: '/produto/marketing',
    isNew: true
  }
]

export function ProductMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger 
            className="text-sm text-gray-400 hover:text-gray-100 transition-colors group"
          >
            Produto
            <ChevronDown className="h-4 w-4 group-hover:text-[#58a6ff] transition-colors" />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[600px] p-6 bg-[#161b22] border border-[#30363d] rounded-lg shadow-lg">
              <div className="mb-4 px-2">
                <h4 className="text-sm font-medium text-gray-400">Funcionalidades</h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature) => (
                  <Link
                    key={feature.title}
                    href={feature.href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#0d1117] hover:text-gray-100 focus:bg-[#0d1117] focus:text-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      <feature.icon className="h-4 w-4 text-[#58a6ff]" />
                      <div className="text-sm font-medium text-gray-300">
                        {feature.title}
                        {feature.isNew && (
                          <span className="ml-2 rounded-full bg-[#238636] px-2 py-0.5 text-[10px] font-medium text-white">
                            New
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                      {feature.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

