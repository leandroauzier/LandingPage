"use client";

import { Zap, AtSign, X, Globe, Share2, Mail, Phone } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

const socialLinks = [
  { icon: AtSign, href: "#", label: "Instagram" },
  { icon: X, href: "#", label: "Twitter / X" },
  { icon: Globe, href: "#", label: "LinkedIn" },
  { icon: Share2, href: "#", label: "Compartilhar" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Lumina<span className="text-violet-400"> Studio</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs mb-6">
              Agência criativa especializada em landing pages, identidade visual e
              estratégia digital para empresas que querem se destacar.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-white/5 flex items-center justify-center text-slate-500 hover:text-violet-400 hover:border-violet-500/30 transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-600 mb-5">
              Navegação
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-slate-500 hover:text-slate-200 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-600 mb-5">
              Contato
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:leandroauzier02@gmail.com"
                  className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-200 transition-colors"
                >
                  <Mail className="w-4 h-4 text-violet-500 shrink-0" />
                  leandroauzier02@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5596981114744"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-200 transition-colors"
                >
                  <Phone className="w-4 h-4 text-violet-500 shrink-0" />
                  (96) 98111-4744
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="https://wa.me/5596981114744"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 text-white text-xs font-semibold hover:from-violet-500 hover:to-pink-500 transition-all duration-200"
              >
                Solicitar Orçamento →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Lumina Creative Studio. Todos os direitos reservados.
          </p>
          <p className="text-xs text-slate-700">
            Feito com elegância e propósito.
          </p>
        </div>
      </div>
    </footer>
  );
}
