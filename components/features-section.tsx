'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Bell, MessageCircle, PlayCircle, Users, BookOpen, Video, Users2 } from 'lucide-react'

const features = [
  {
    id: 'home',
    title: 'Início',
    icon: Users,
    content: {
      title: 'Sua central de comando',
      description: 'Tenha uma visão geral de toda sua comunidade em um só lugar.',
      videoUrl: '/placeholder.mp4'
    }
  },
  {
    id: 'discussions',
    title: 'Discussões',
    icon: MessageCircle,
    content: {
      title: 'Discussões engajadas',
      description: 'Crie espaços para conversas significativas em sua comunidade.',
      videoUrl: '/placeholder.mp4'
    }
  },
  {
    id: 'events',
    title: 'Eventos',
    icon: Bell,
    content: {
      title: 'Eventos memoráveis',
      description: 'Organize eventos online e presenciais para sua comunidade.',
      videoUrl: '/placeholder.mp4'
    }
  },
  {
    id: 'live',
    title: 'Ao Vivo',
    icon: Video,
    content: {
      title: 'Transmissões ao vivo',
      description: 'Conecte-se em tempo real com sua audiência.',
      videoUrl: '/placeholder.mp4'
    }
  },
  {
    id: 'courses',
    title: 'Cursos',
    icon: BookOpen,
    content: {
      title: 'Cursos interativos',
      description: 'Crie e gerencie cursos online para sua comunidade.',
      videoUrl: '/placeholder.mp4'
    }
  },
  {
    id: 'chat',
    title: 'Bate-papo',
    icon: MessageCircle,
    content: {
      title: 'Chat em tempo real',
      description: 'Mantenha conversas instantâneas com membros.',
      videoUrl: '/placeholder.mp4'
    }
  },
  {
    id: 'members',
    title: 'Membros',
    icon: Users2,
    content: {
      title: 'Gestão de membros',
      description: 'Administre sua comunidade de forma eficiente.',
      videoUrl: '/placeholder.mp4'
    }
  }
]

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(features[0].id)

  return (
    <section className="py-20 bg-[#0d1117]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#238636]/10 border border-[#238636]/20">
            <span className="text-[#2ea043] text-sm font-medium">Recursos</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-100">
            Crie uma comunidade
            <br />
            <span className="text-[#58a6ff]">que você possa se orgulhar</span>
          </h2>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Button
                key={feature.id}
                variant={activeFeature === feature.id ? "default" : "ghost"}
                className={cn(
                  "gap-2 border border-[#30363d] hover:border-[#58a6ff]/50",
                  activeFeature === feature.id 
                    ? "bg-[#161b22] text-[#58a6ff] border-[#58a6ff]" 
                    : "bg-[#0d1117] text-gray-400 hover:text-gray-200 hover:bg-[#161b22]"
                )}
                onClick={() => setActiveFeature(feature.id)}
              >
                <Icon className="h-4 w-4" />
                {feature.title}
              </Button>
            )
          })}
        </div>

        {/* Feature Content */}
        <div className="max-w-4xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={cn(
                "transition-all duration-300",
                activeFeature === feature.id ? "block" : "hidden"
              )}
            >
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-100">
                  {feature.content.title}
                </h3>
                <p className="text-gray-400">
                  {feature.content.description}
                </p>
              </div>
              <Card className="overflow-hidden bg-[#161b22] border border-[#30363d] group hover:border-[#58a6ff]/50 transition-colors">
                <div className="aspect-video relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-[#0d1117]/80 to-transparent">
                    <PlayCircle className="h-16 w-16 text-[#58a6ff] opacity-75 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

