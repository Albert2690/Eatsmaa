import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Sparkles, Star, Flame, Coffee, ArrowRight } from 'lucide-react';
import ProductDetailModal from '../components/ProductDetailModal';
import { Link } from 'react-router-dom';
import { buildProductEnquiryMessage, openWhatsAppEnquiry } from '../utils/whatsapp';

// Import our premium generated assets
import heroProductImg from '../assets/hero_product.png';
import mixtureProductImg from '../assets/mixture_product.png';
import tapiocaProductImg from '../assets/tapioca_product.png';

const snacksList = [
  { id: 1, name: "Banana Chips (Coconut Oil)", price: "₹120", category: "Chips", desc: "Classic ultra-thin golden banana chips fried in cold-pressed coconut oil.", img: heroProductImg },
  { id: 2, name: "Tapioca Chips", price: "₹100", category: "Chips", desc: "Thinly sliced cassava root fried to crunchy perfection.", img: tapiocaProductImg },
  { id: 3, name: "Kerala Mixture (Spicy)", price: "₹150", category: "Mixture", desc: "Crispy fried noodles, peanuts, cashews, and curry leaves in standard local spices.", img: mixtureProductImg },
  { id: 4, name: "Sweet Mixture", price: "₹140", category: "Mixture", desc: "Traditional sweet and salty mix with crispy nodes and fried nuts.", img: mixtureProductImg },
  { id: 5, name: "Jackfruit Chips", price: "₹180", category: "Chips", desc: "Sweet and crisp chips made from hand-sliced fresh Kasaragod jackfruits.", img: heroProductImg },
  { id: 6, name: "Traditional Achappam", price: "₹90", category: "Traditional", desc: "Delicate, crispy rose cookies made with coconut milk and sesame seeds.", img: heroProductImg },
  { id: 7, name: "Spicy Kuzhalappam", price: "₹95", category: "Traditional", desc: "Tube-shaped rice flour snacks spiced with cumin, garlic, and onion.", img: heroProductImg },
  { id: 8, name: "Ari Murukku", price: "₹85", category: "Traditional", desc: "Crispy rice flour curls seasoned with sesame and cumin seeds.", img: heroProductImg },
  { id: 9, name: "Butter Murukku", price: "₹110", category: "Traditional", desc: "Melt-in-mouth soft fried rice rings prepared with rich local butter.", img: heroProductImg },
  { id: 10, name: "Sarkkara Varatti", price: "₹140", category: "Sweets", desc: "Thick banana chunks coated in melted jaggery, ginger, and cardamom powder.", img: heroProductImg },
  { id: 11, name: "Classic Pakkavada", price: "₹110", category: "Traditional", desc: "Crispy fried ribbon-like gram flour chips spiced with chili and garlic.", img: heroProductImg },
  { id: 12, name: "Ribbon Pakkavada", price: "₹115", category: "Traditional", desc: "Thin ribbon pakkavada with a spicy, garlicky aromatic bite.", img: heroProductImg },
  { id: 13, name: "Sweet Peanut Candy", price: "₹80", category: "Sweets", desc: "Crispy peanut brittle bar bound in organic concentrated jaggery.", img: heroProductImg },
  { id: 14, name: "Avalose Podi", price: "₹130", category: "Sweets", desc: "Traditional roasted rice powder blend with grated coconut and cumin.", img: heroProductImg },
  { id: 15, name: "Unniyappam (Dry)", price: "₹150", category: "Sweets", desc: "Soft-centered sweet fried dumplings made of rice, banana, and jaggery.", img: heroProductImg },
  { id: 16, name: "Masala Peanuts", price: "₹90", category: "Nuts", desc: "Bold, spicy batter-coated roasted peanuts.", img: mixtureProductImg },
  { id: 17, name: "Roasted Cashews", price: "₹350", category: "Nuts", desc: "Premium grade whole cashews slow roasted in standard sea salt.", img: mixtureProductImg },
  { id: 18, name: "Salted Peanuts", price: "₹85", category: "Nuts", desc: "Crunchy double-roasted peanuts seasoned lightly with sea salt.", img: mixtureProductImg },
  { id: 19, name: "Karasev", price: "₹120", category: "Traditional", desc: "Spiced chickpea flour snack sticks seasoned with ground black pepper.", img: heroProductImg },
  { id: 20, name: "Spicy Thattai", price: "₹110", category: "Traditional", desc: "Flat rice flour disc crackers containing split bengal gram and spices.", img: heroProductImg },
  { id: 21, name: "Butter Cheeda", price: "₹135", category: "Traditional", desc: "Tiny fried seed-like rice flour balls seasoned with coconut oil.", img: heroProductImg },
  { id: 22, name: "Sweet Cheeda", price: "₹140", category: "Sweets", desc: "Sweetened version of crunchy cheeda ball cookies glazed in sugar.", img: heroProductImg },
  { id: 23, name: "Pottukadalai Urundai", price: "₹90", category: "Sweets", desc: "Roasted gram flour sweet balls bound tightly with jaggery syrup.", img: heroProductImg },
  { id: 24, name: "Sesame Ellu Unda", price: "₹100", category: "Sweets", desc: "Healthy sesame seeds rolled into traditional sweet energy balls.", img: heroProductImg }
];

const categories = ["All", "Chips", "Traditional", "Mixture", "Sweets", "Nuts"];

// Interactive Spotlight banana chips flavor variations
const spotlightFlavors = [
  {
    id: "original",
    name: "Classic Coconut Oil",
    bgClass: "from-brand-orange/20 to-brand-orange/5 border-brand-orange/20",
    glowColor: "glow-orange",
    tagline: "ANCESTRAL CRISP",
    desc: "Our legendary, perfectly sliced banana chips fried in 100% cold-pressed coconut oil. Authentic, aromatic, and crispy.",
    price: "₹120",
    color: "#FF5A00"
  },
  {
    id: "pepper",
    name: "Black Pepper & Salt",
    bgClass: "from-stone-800/60 to-stone-900/40 border-stone-700",
    glowColor: "shadow-[0_0_30px_rgba(255,255,255,0.05)]",
    tagline: "ELEVATED SPICE",
    desc: "Seasoned generously with hand-ground black pepper from local Kasaragod hills and organic sea salt. Intensely fragrant.",
    price: "₹130",
    color: "#E2E8F0"
  },
  {
    id: "peri",
    name: "Fiery Peri-Peri",
    bgClass: "from-red-950/40 to-red-900/10 border-red-800/30",
    glowColor: "shadow-[0_0_30px_rgba(239,68,68,0.15)]",
    tagline: "MODERN FUSION",
    desc: "A bold, modern twist combining thin banana chips with dried red chili peppers, paprika, and wild herbs. Explosively hot.",
    price: "₹135",
    color: "#EF4444"
  }
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeSpotlight, setActiveSpotlight] = useState(spotlightFlavors[0]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductEnquiry = (product) => {
    // This is the "add to bag" replacement: open WhatsApp with the product prefilled for manual order handling.
    openWhatsAppEnquiry(buildProductEnquiryMessage(product));
  };

  const filteredSnacks = selectedCategory === "All"
    ? snacksList
    : snacksList.filter(snack => snack.category === selectedCategory);

  return (
    <div className="min-h-screen bg-brand-dark pt-16 pb-24 relative overflow-hidden select-none">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-brand-lime/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 1. Header Hero */}
        <div className="text-center py-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-lime text-xs font-bold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>24 Varieties Packed Fresh</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-white tracking-normal"
          >
            DISCOVER THE COLLECTIONS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-400 text-lg max-w-2xl mx-auto font-medium"
          >
            Handpicked, traditional recipes cooked using wood-fire heat and premium cold-pressed coconut oil, delivered straight from Kasaragod to your door.
          </motion.p>
        </div>

        {/* 2. Interactive Spotlight Component */}
        <section className="mb-32">
          <h2 className="text-stone-500 font-display font-bold text-xs uppercase tracking-widest mb-8 text-center">
            FLAVOR SPOTLIGHT: BANANA CHIPS
          </h2>

          <div className="glass rounded-[3rem] border border-white/5 overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative shadow-2xl">
            {/* Background color shifting wrapper */}
            <div className={`absolute inset-0 bg-gradient-to-br transition-all duration-700 opacity-20 pointer-events-none ${activeSpotlight.bgClass}`} />
            
            {/* Spotlight Left: Flavor selector & description */}
            <div className="p-8 md:p-16 lg:col-span-7 flex flex-col justify-between space-y-8 relative z-10 text-left">
              <div className="space-y-4">
                <span className="text-brand-orange text-xs font-bold tracking-widest uppercase block animate-pulse">
                  {activeSpotlight.tagline}
                </span>
                <h3 className="text-3xl sm:text-5xl font-display font-bold text-white leading-tight">
                  {activeSpotlight.name}
                </h3>
                <p className="text-stone-400 text-base leading-relaxed max-w-lg">
                  {activeSpotlight.desc}
                </p>
                <div className="text-3xl font-display font-bold text-brand-lime pt-4 block">
                  {activeSpotlight.price}
                </div>
              </div>

              {/* Selector Tabs */}
              <div className="flex flex-wrap gap-3 pt-6 border-t border-white/5">
                {spotlightFlavors.map((fl) => (
                  <button
                    key={fl.id}
                    onClick={() => setActiveSpotlight(fl)}
                    data-cursor="pointer"
                    className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-300 ${
                      activeSpotlight.id === fl.id
                        ? 'bg-white border-white text-brand-dark shadow-lg'
                        : 'bg-white/5 border-white/5 text-stone-400 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {fl.id === "original" && <Star className="w-3.5 h-3.5 inline mr-1.5 fill-current" />}
                    {fl.id === "peri" && <Flame className="w-3.5 h-3.5 inline mr-1.5 fill-current" />}
                    {fl.id === "pepper" && <Coffee className="w-3.5 h-3.5 inline mr-1.5 fill-current" />}
                    {fl.name.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Spotlight Right: Large floating package */}
            <div className="lg:col-span-5 flex items-center justify-center p-8 relative overflow-hidden bg-white/2 border-t lg:border-t-0 lg:border-l border-white/5">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSpotlight.id}
                  initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 0.8, opacity: 0, rotate: 10 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="w-56 sm:w-64 cursor-pointer relative z-10"
                >
                  <img
                    src={heroProductImg}
                    alt={activeSpotlight.name}
                    className="w-full h-auto drop-shadow-[0_25px_45px_rgba(0,0,0,0.8)]"
                    style={{
                      filter: activeSpotlight.id === "pepper" 
                        ? "contrast(1.1) brightness(0.9) grayscale(0.25)" 
                        : activeSpotlight.id === "peri" 
                        ? "hue-rotate(330deg) saturate(1.4)" 
                        : "none"
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* 3. Category Filter Navigation Bar */}
        <section className="mb-16">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                data-cursor="pointer"
                className={`relative px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'text-white bg-brand-orange border border-brand-orange shadow-lg glow-orange'
                    : 'text-stone-400 bg-white/5 border border-white/5 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span>{cat}</span>
                {selectedCategory === cat && (
                  <motion.div
                    layoutId="active-category-pill"
                    className="absolute inset-0 rounded-full border border-white/20"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </section>

        {/* 4. Products Grid */}
        <section className="mb-32">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredSnacks.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedProduct(product)}
                  className="bg-brand-dark-card rounded-3xl overflow-hidden border border-white/5 hover:border-brand-orange/20 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col justify-between h-[450px]"
                >
                  {/* Photo Section */}
                  <div className="relative h-52 bg-white/2 p-6 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                    <img
                      src={product.img}
                      alt={product.name}
                      className="h-36 object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500"
                      style={{
                        filter: product.category === "Sweets" 
                          ? "hue-rotate(45deg) saturate(1.1)" 
                          : product.category === "Nuts" 
                          ? "hue-rotate(280deg)" 
                          : "none"
                      }}
                    />
                    <span className="absolute top-4 right-4 bg-brand-dark border border-white/10 text-stone-500 text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>

                  {/* Details Section */}
                  <div className="p-6 flex-grow flex flex-col justify-between text-left">
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-white text-lg leading-tight group-hover:text-brand-orange transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-stone-500 text-xs line-clamp-2 leading-relaxed">
                        {product.desc}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="h-[1px] bg-white/5 w-full" />
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-[9px] text-stone-600 font-bold uppercase tracking-wider block">Price</span>
                          <span className="text-xl font-display font-bold text-brand-lime">{product.price}</span>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleProductEnquiry(product);
                          }}
                          data-cursor="accent"
                          aria-label={`Enquire about ${product.name} on WhatsApp`}
                          className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-brand-orange group-hover:border-brand-orange text-stone-400 group-hover:text-white transition-all duration-300"
                        >
                          <ShoppingBag className="w-4.5 h-4.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* 5. Promotional Limited Edition Section */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[3rem] bg-gradient-to-r from-brand-lime/10 via-brand-lime/5 to-transparent border border-brand-lime/20 p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 text-left relative overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            <div className="space-y-4 max-w-xl">
              <span className="text-brand-lime text-xs font-bold uppercase tracking-widest block animate-pulse">
                NEW LAUNCH & LIMITED EDITION
              </span>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
                KASARAGOD SARKKARA VARATTI
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Enjoy a legendary local festival treat. Extra thick banana wedges slow cooked and coated in premium double-refined jaggery, crushed mountain ginger, and spiced green cardamom powder. Fried in 100% pure coconut oil.
              </p>
              <div className="flex items-center gap-6 pt-4">
                <div>
                  <span className="text-3xl font-display font-bold text-white">₹140</span>
                  <span className="text-stone-500 text-xs block font-semibold">Limited 200g Pack</span>
                </div>
                <button
                  onClick={() => handleProductEnquiry(snacksList.find(s => s.id === 10))}
                  data-cursor="pointer"
                  className="px-6 py-3 rounded-full bg-brand-lime hover:bg-brand-lime/90 text-brand-dark text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
                >
                  Order on WhatsApp
                </button>
              </div>
            </div>

            {/* Visual element representing local dessert */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center shrink-0">
              <div className="absolute w-full h-full rounded-full border border-dashed border-brand-lime/20 animate-spin-slow pointer-events-none" />
              <img
                src={heroProductImg}
                alt="Sarkkara Varatti product mockup"
                className="w-40 sm:w-52 object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)] rotate-12"
                style={{ filter: "hue-rotate(45deg) saturate(1.2) contrast(1.1)" }}
              />
            </div>
          </motion.div>
        </section>

        {/* 6. Wholesale & Inquiry CTA Section */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-normal leading-tight">
              WHOLESALE & BULK INQUIRIES
            </h2>
            <p className="text-stone-400 text-base max-w-xl mx-auto">
              Planning an event, running a grocery store, or searching for premium corporate gifting solutions? Contact our sales team for custom packaging and bulk discount details.
            </p>
            <Link
              to="/contact"
              data-cursor="accent"
              className="inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-widest bg-white hover:bg-brand-orange hover:text-white text-brand-dark rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
            >
              Get Bulk Pricing <ArrowRight className="ml-2 w-4.5 h-4.5" />
            </Link>
          </div>
        </section>

      </div>

      {/* Product Detail Modal Side Drawer */}
      <ProductDetailModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}
      />
    </div>
  );
}
