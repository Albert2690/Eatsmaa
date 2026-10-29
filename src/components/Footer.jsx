import { Link } from 'react-router-dom';
import { ShoppingBag, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/5 text-stone-400 mt-auto relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3" data-cursor="pointer">
              <div className="w-10 h-10 rounded-full bg-brand-orange text-brand-dark flex items-center justify-center">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <span className="font-display font-bold text-2xl text-white tracking-normal">EATSMAA</span>
            </Link>
            <p className="text-stone-500 text-sm leading-relaxed max-w-sm">
              Crafting the ultimate taste of traditional Kerala snacks. Fried to golden perfection in 100% cold-pressed coconut oil, straight from Chittarikkal, Kasaragod.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                data-cursor="pointer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all duration-300 border border-white/5"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                data-cursor="pointer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all duration-300 border border-white/5"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-display font-bold text-white tracking-wider uppercase text-xs">Explore</h3>
            <ul className="space-y-3">
              <li><Link to="/" data-cursor="pointer" className="hover:text-brand-orange text-sm transition-colors font-medium">Home Experience</Link></li>
              <li><Link to="/products" data-cursor="pointer" className="hover:text-brand-orange text-sm transition-colors font-medium">All Snacks</Link></li>
              <li><Link to="/contact" data-cursor="pointer" className="hover:text-brand-orange text-sm transition-colors font-medium">Contact & Support</Link></li>
              <li><a href="#" data-cursor="pointer" className="hover:text-brand-orange text-sm transition-colors font-medium">Track Order</a></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-display font-bold text-white tracking-wider uppercase text-xs">Headquarters</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                <span className="leading-relaxed">Eatsmaa Foods,<br/>Chittarikkal, Kasaragod Dist,<br/>Kerala, 671326</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-5 w-5 text-brand-orange shrink-0" />
                <span>+91 75609 02502</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-5 w-5 text-brand-orange shrink-0" />
                <span>hello@eatsmaa.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs gap-4 text-stone-600">
          <p>
            &copy; {new Date().getFullYear()} EATSMAA Foods. Created for world-class standards.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
