import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import { ProductMenu } from './product-menu'
import Image from 'next/image'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0d1117]">
      <header className="fixed w-full z-50 bg-[#0d1117]/80 backdrop-blur-md border-b border-[#30363d]">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link 
                href="/" 
                className="text-xl font-bold text-gray-100 hover:text-[#58a6ff] transition-colors flex items-center gap-2 bg-black/40 px-3 py-1 rounded-lg"
              >
                <Image
                  src="/curio2.png"
                  alt="Curio"
                  width={120}
                  height={32}
                  className="h-10 w-auto"
                />
                <span>curiô</span>
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <ProductMenu />
                <div className="group relative flex items-center gap-1 text-sm text-gray-400 hover:text-gray-100 cursor-pointer transition-colors">
                  <span>Recursos</span>
                  <ChevronDown className="h-4 w-4 group-hover:text-[#58a6ff] transition-colors" />
                </div>
                <Link 
                  href="/precos" 
                  className="text-sm text-gray-400 hover:text-gray-100 transition-colors"
                >
                  Preços
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                href="/precos"
                className="text-sm text-gray-400 hover:text-gray-100 transition-colors md:hidden"
              >
                Preços
              </Link>
              <Button 
                className="bg-[#238636] hover:bg-[#2ea043] text-white border-none transition-colors"
              >
                Comece aqui
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}

