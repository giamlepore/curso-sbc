'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    content: "Nossos usuários estão impressionados. É intuitivo. Não tem distrações. Estou muito feliz que fizemos a mudança.",
    author: "Sarah Flynn",
    role: "Smart Passive Income",
    avatar: "/placeholder.svg"
  },
  {
    content: "O SBC incorpora o que muitas outras plataformas não têm - comunidade! Fiquei impressionada com a generosidade dos meus colegas criadores de cursos que compartilharam suas configurações e dicas, e instantaneamente me senti parte do grupo. Isso, e o fato de termos um ótimo acesso à equipe de suporte, faz do SBC a melhor plataforma de comunidade do mercado.",
    author: "Caroline Guntur",
    role: "OrganizingPhotos.net, SearchingScandinavia.com",
    avatar: "/placeholder.svg"
  },
  {
    content: "The key here is that SBC brings a technical way to centralize and service a community. It's offering growth by way of shrinking! A consolidation of tech & location in exchange for the potential of better connection and servability.",
    author: "Melissa Tal",
    role: "Liminal",
    avatar: "/placeholder.svg"
  },
  {
    content: "For SBC in particular, there are a lot of things I love, but here are the things that sealed the deal for me when I was comparing community platforms (and I compared a lot): Clean design and flexible structure. SBC was one of the platforms I felt best enabled the structure I was going for. I personally think the folks building SBC are thinking about community in a more holistic way than some of the other tools on the market - they're thinking beyond a 'forum'.",
    author: "Noele Flowers",
    role: "Community Education Manager",
    avatar: "/placeholder.svg"
  },
  {
    content: "I considered using something else but SBC was the winner imo. It's the perfect balance of functionality, design & price. Plus the team is super helpful & responsive.",
    author: "Mackenzie Child",
    role: "Founder @ Flowmingo",
    avatar: "/placeholder.svg"
  }
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft
      const slideWidth = scrollRef.current.clientWidth
      const newActiveSlide = Math.round(scrollPosition / slideWidth)
      setActiveSlide(newActiveSlide)
    }
  }

  return (
    <section className="py-24 bg-[#0d1117]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#238636]/10 border border-[#238636]/20">
            <span className="text-[#2ea043] text-sm font-medium">Depoimentos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            Amado por milhares de
            <br />
            <span className="text-[#58a6ff]">criadores e marcas</span>
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 -mx-4 px-4 scroll-smooth hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-none w-full md:w-[600px] snap-center"
            >
              <div className="bg-[#161b22] p-8 rounded-lg border border-[#30363d] hover:border-[#58a6ff]/50 transition-colors group">
                <div className="mb-6">
                  {/* Quote icon */}
                  <svg
                    className="h-6 w-6 text-[#58a6ff] opacity-50 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#30363d] group-hover:border-[#58a6ff] transition-colors">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                scrollRef.current?.scrollTo({
                  left: index * (scrollRef.current.clientWidth + 24),
                  behavior: 'smooth'
                })
              }}
              className={cn(
                "transition-all duration-300",
                activeSlide === index
                  ? "w-8 h-2 bg-[#58a6ff] rounded-full"
                  : "w-2 h-2 bg-[#30363d] hover:bg-[#58a6ff]/50 rounded-full"
              )}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

