import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, MessageCircle, Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-institutional text-institutional-foreground mt-24">
      <div className="container-site py-12 lg:py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-display text-xl mb-4">Colégio Santo André</div>
          <p className="text-sm opacity-80 leading-relaxed">
            Tradição, excelência acadêmica e formação humana desde a Educação Infantil ao Ensino Médio.
          </p>
        </div>

        <nav aria-label="Institucional">
          <h2 className="font-display text-base mb-4">Institucional</h2>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link to="/o-colegio" className="hover:underline underline-offset-4">O Colégio</Link></li>
            <li><Link to="/infraestrutura" className="hover:underline underline-offset-4">Infraestrutura</Link></li>
            <li><Link to="/vida-no-colegio" className="hover:underline underline-offset-4">Vida no Colégio</Link></li>
            <li><Link to="/matriculas" className="hover:underline underline-offset-4">Matrículas</Link></li>
          </ul>
        </nav>

        <nav aria-label="Ensino">
          <h2 className="font-display text-base mb-4">Ensino</h2>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link to="/ensino/educacao-infantil" className="hover:underline underline-offset-4">Educação Infantil</Link></li>
            <li><Link to="/ensino/fundamental-i" className="hover:underline underline-offset-4">Fundamental I</Link></li>
            <li><Link to="/ensino/fundamental-ii" className="hover:underline underline-offset-4">Fundamental II</Link></li>
            <li><Link to="/ensino/ensino-medio" className="hover:underline underline-offset-4">Ensino Médio</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-base mb-4">Contato</h2>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex gap-2"><MapPin className="size-4 mt-0.5 shrink-0" aria-hidden /><span>Endereço a definir</span></li>
            <li className="flex gap-2"><Phone className="size-4 mt-0.5 shrink-0" aria-hidden /><a href="tel:+5500000000000" className="hover:underline">(00) 0000-0000</a></li>
            <li className="flex gap-2"><MessageCircle className="size-4 mt-0.5 shrink-0" aria-hidden /><a href="https://wa.me/5500000000000" className="hover:underline">WhatsApp</a></li>
            <li className="flex gap-2"><Mail className="size-4 mt-0.5 shrink-0" aria-hidden /><a href="mailto:contato@colegiosantoandre.org.br" className="hover:underline">contato@colegiosantoandre.org.br</a></li>
          </ul>
          <div className="mt-4 flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="p-2 -ml-2 rounded-sm hover:bg-white/10"><Instagram className="size-5" /></a>
            <a href="#" aria-label="Facebook" className="p-2 rounded-sm hover:bg-white/10"><Facebook className="size-5" /></a>
            <a href="#" aria-label="YouTube" className="p-2 rounded-sm hover:bg-white/10"><Youtube className="size-5" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs opacity-80">
          <span>© {year} Colégio Santo André — Todos os direitos reservados.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:underline underline-offset-4">Política de Privacidade</a>
            <a href="#" className="hover:underline underline-offset-4">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
