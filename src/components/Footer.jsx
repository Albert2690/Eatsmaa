import { Link } from 'react-router-dom';
import { ShoppingBag, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-stone-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <ShoppingBag className="h-6 w-6 text-amber-500" />
              <span className="font-serif font-bold text-2xl text-stone-50">Adam Food</span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm mb-6">
              Bringing you the authentic taste of Kerala snacks. Made with pure coconut oil, love, and tradition in Chittarikkal, Kasaragod.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-amber-500 hover:text-stone-900 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-amber-500 hover:text-stone-900 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-stone-50 mb-6 tracking-wide uppercase text-sm">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-amber-400 text-sm transition-colors">Home Experience</Link></li>
              <li><Link to="/products" className="hover:text-amber-400 text-sm transition-colors">All Snacks</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 text-sm transition-colors">Our History</Link></li>
              <li><a href="#" className="hover:text-amber-400 text-sm transition-colors">Track Order</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-stone-50 mb-6 tracking-wide uppercase text-sm">Visit Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <span>Adam Food Center,<br/>Chittarikkal, Kasaragod Dist,<br/>Kerala, 671326</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-5 w-5 text-amber-500 shrink-0" />
                +91 75609 02502
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-5 w-5 text-amber-500 shrink-0" />
                hello@adamfood.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-emerald-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <p className="text-stone-400">
            &copy; {new Date().getFullYear()} Adam Food. All rights reserved.
          </p>
          <div className="flex gap-6 text-stone-400">
            <a href="#" className="hover:text-stone-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-200 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
