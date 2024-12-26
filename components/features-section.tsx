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
      title: 'Crie versão paga e gratuita',
      description: 'Deixe aulas gratuitas e aulas pagas para sua comunidade.',
      videoUrl: '/freemium.mov'
    }
  },
  {
    id: 'discussions',
    title: 'Acompanhe indicações',
    icon: MessageCircle,
    content: {
      title: 'Permita que seus membros e afiliados indiquem outros membros',
      description: 'Permita indicações entre usuários e afiliados, crie prêmios e veja o status dos alunos que foram indicados.',
      videoUrl: '/referral.mov'
    }
  },
  {
    id: 'events',
    title: 'Certificados',
    icon: Bell,
    content: {
      title: 'Certificados constantes',
      description: 'Libere certificados ao concluir cada módulo, e engaje seus membros com a sua marca.',
      videoUrl: '/certificado.mov'
    }
  },
  {
    id: 'live',
    title: 'Gamifique',
    icon: Video,
    content: {
      title: 'Crie questionários e testes para atrair mais membros',
      description: 'Tenha um ranking de membros que mais se destacaram, e crie um sistema de recompensas para incentivar a participação.',
      videoUrl: '/Gamifique.mov'
    }
  },
  {
    id: 'courses',
    title: 'Cursos',
    icon: BookOpen,
    content: {
      title: 'Cursos interativos',
      description: 'Crie e gerencie cursos online para sua comunidade.',
      videoUrl: '/movie.mov'
    }
  },
  {
    id: 'chat',
    title: 'Shorts (Vídeos curtos)',
    icon: MessageCircle,
    content: {
      title: 'Coloque vídeos curtos para seus membros',
      description: 'Mantenha o engajamento mesmo que seus membros não tenham tempo de assistir a um vídeo inteiro.',
      videoUrl: '/shorts.mov'
    }
  },
  {
    id: 'members',
    title: 'Membros',
    icon: Users2,
    content: {
      title: 'Gestão de membros',
      description: 'Administre sua comunidade de forma eficiente. Veja quantos usuários acessaram, quantos assistiram, quem assistiu mais, e muito mais.',
      videoUrl: '/admin.mov'
    }
  }
]

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(features[0].id)

  return (
    <section id="features-section" className="py-20 bg-[#0d1117]">
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
                onClick={() => {
                  setActiveFeature(feature.id)
                  setTimeout(() => {
                    const video = document.querySelector(`#video-${feature.id}`) as HTMLVideoElement
                    if (video) {
                      video.currentTime = 0
                      video.play()
                      const overlay = video.nextElementSibling as HTMLDivElement
                      if (overlay) overlay.style.opacity = '0'
                    }
                  }, 0)
                }}
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
              <Card className={cn(
                "overflow-hidden bg-[#161b22] border border-[#30363d] group hover:border-[#58a6ff]/50 transition-colors mx-auto",
                feature.id === "members"
                  ? "max-w-[320px] md:max-w-[700px]"
                  : "max-w-[320px] md:max-w-[390px]"
              )}>
                <div className={cn(
                  "relative",
                  feature.id === "members" 
                    ? "aspect-[2336/1658]" 
                    : "aspect-[390/844]"
                )}>
                  <video
                    id={`video-${feature.id}`}
                    src={feature.content.videoUrl}
                    className="absolute inset-0 w-full h-full object-cover"
                    controls={false}
                    loop
                    muted
                    playsInline
                  />
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-[#0d1117]/80 to-transparent cursor-pointer group"
                    onClick={(e) => {
                      const video = e.currentTarget.previousElementSibling as HTMLVideoElement;
                      if (video.paused) {
                        video.play();
                        e.currentTarget.style.opacity = '0';
                      } else {
                        video.pause();
                        e.currentTarget.style.opacity = '1';
                      }
                    }}
                  >
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

