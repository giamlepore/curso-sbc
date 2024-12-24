import Link from 'next/link'

const footerLinks = {
  website: {
    title: 'WEBSITE',
    links: [
      { label: 'Início', href: '/' },
      { label: 'Preços', href: '/pricing' },
      { label: 'Carreiras', href: '/careers' },
      { label: 'Programa de afiliados', href: '/affiliate' },
      { label: 'Programa de parceiros', href: '/partner' },
      { label: 'SBC Plus', href: '/plus' }
    ]
  },
  features: {
    title: 'RECURSOS',
    links: [
      { label: 'Discussões', href: '/features/discussions' },
      { label: 'Cursos', href: '/features/courses' },
      { label: 'Eventos', href: '/features/events' },
      { label: 'Chat', href: '/features/chat' },
      { label: 'Personalização', href: '/features/customization' },
      { label: 'Pagamentos', href: '/features/payments' },
      { label: 'Fluxos de trabalho', href: '/features/workflows' },
      { label: 'Análises', href: '/features/analytics' },
      { label: 'Gamificação', href: '/features/gamification' },
      { label: 'IA da Comunidade', href: '/features/ai' },
      { label: 'Integrações', href: '/features/integrations' },
      { label: 'Hub de Marketing', href: '/features/marketing' }
    ]
  },
  resources: {
    title: 'RECURSOS',
    links: [
      { label: 'Base de Conhecimento', href: '/resources/knowledge-base' },
      { label: 'Atualizações do Produto', href: '/resources/updates' },
      { label: 'Blog', href: '/blog' },
      { label: 'Central de Eventos', href: '/resources/events' },
      { label: 'Histórias de Clientes', href: '/resources/stories' },
      { label: 'Comunidade de clientes', href: '/community' },
      { label: 'Migração de pagamento', href: '/resources/payment-migration' },
      { label: 'Especialistas SBC', href: '/experts' }
    ]
  },
  access: {
    title: 'ACESSO',
    links: [
      { label: 'Entrar', href: '/login' },
      { label: 'Comece seu teste grátis', href: '/trial' }
    ]
  },
  legal: {
    title: 'LEGAL',
    links: [
      { label: 'Termos', href: '/terms' },
      { label: 'Política de Privacidade', href: '/privacy' },
      { label: 'Política de Cookies', href: '/cookies' },
      { label: 'DPA', href: '/dpa' }
    ]
  }
}

export function Footer() {
  return (
    <footer className="bg-[#0d1117] border-t border-[#30363d] pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link 
              href="/" 
              className="text-2xl font-bold text-gray-100 hover:text-[#58a6ff] transition-colors inline-block mb-4"
            >
              SBC
            </Link>
            <p className="text-gray-400 max-w-sm">
              A plataforma completa de comunidade para criadores e marcas.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {['twitter', 'github', 'discord', 'youtube'].map((social) => (
                <Link
                  key={social}
                  href={`https://${social}.com/sbc`}
                  className="text-gray-400 hover:text-[#58a6ff] transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  {/* You can add social icons here */}
                </Link>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div 
              key={key} 
              className={key === 'features' ? 'lg:col-span-1' : ''}
            >
              <h3 className="font-semibold text-xs text-gray-400 mb-4 tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#58a6ff] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#30363d]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} SBC. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <Link 
                href="/status" 
                className="text-sm text-gray-400 hover:text-[#58a6ff] transition-colors flex items-center gap-2"
              >
                <span className="h-2 w-2 rounded-full bg-[#238636]" />
                Status do Sistema
              </Link>
              <select 
                className="bg-[#161b22] border border-[#30363d] rounded-md text-sm text-gray-400 px-2 py-1 focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff]"
              >
                <option value="pt-BR">Português (BR)</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

