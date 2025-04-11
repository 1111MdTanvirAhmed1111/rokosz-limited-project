import Link from "next/link"
import { Instagram, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 pt-20 pb-10">
      <div className="container mx-auto w-fit">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="font-bold text-2xl tracking-tighter">NEXATECH</div>
            </Link>
            <p className="text-zinc-400 max-w-xs">
              Pioneering digital solutions that empower businesses to thrive in an ever-evolving technological
              landscape.
            </p>
            <div className="flex space-x-5">
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Resources</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Insights
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <address className="not-italic text-zinc-400 space-y-4">
              <p>123 Innovation Drive</p>
              <p>San Francisco, CA 94107</p>
              <p>hello@nexatech.com</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-8 text-center text-zinc-500 text-sm">
          <p>&copy; {new Date().getFullYear()} NexaTech Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
