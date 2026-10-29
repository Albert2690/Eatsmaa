import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion';
import { ArrowRight, Star, Leaf, Flame, ShieldCheck, Zap, Sparkles, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductDetailModal from '../components/ProductDetailModal';

// Import our premium generated assets
import heroProductImg from '../assets/hero_product.png';
import mixtureProductImg from '../assets/mixture_product.png';
import tapiocaProductImg from '../assets/tapioca_product.png';
import ingredientsImg from '../assets/ingredients_showcase.jpg';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [activeProduct, setActiveProduct] = useState(null);
  const heroRef = useRef(null);

  // Parallax elements scroll tracking
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroTextY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse tilt tracking for central 3D package
  const springX = useSpring(0, { stiffness: 100, damping: 10 });
  const springY = useSpring(0, { stiffness: 100, damping: 10 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientWidth, clientHeight } = document.documentElement;
      const x = (e.clientX / clientWidth - 0.5) * 30; // Max tilt 30deg
      const y = (e.clientY / clientHeight - 0.5) * 30;
      springX.set(x);
      springY.set(y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [springX, springY]);

  // Preloader progress simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Leaf className="w-6 h-6 text-brand-lime" />,
      title: "100% Pure Sourcing",
      desc: "Authentic, raw farm-fresh plantains and jackfruit harvested from local kasaras in Northern Kerala."
    },
    {
      icon: <Flame className="w-6 h-6 text-brand-orange" />,
      title: "Wood-Fired Frying",
      desc: "Cooked slowly using heritage wood-fire systems to retain the natural coconut-infused flavor and golden crunch."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-lime" />,
      title: "Obsidian Fresh Pack",
      desc: "Premium air-tight nitrogen protection seals that lock in the fragrance, crunch, and authentic spices."
    }
  ];

  const featuredCollection = [
    {
      id: 1,
      name: "Heritage Banana Chips",
      price: "₹120",
      category: "Chips",
      desc: "Ultra-thin golden slices of fresh Kerala bananas, deep fried to a legendary crisp in pure cold-pressed coconut oil.",
      img: heroProductImg,
      flavors: [
        { label: "Crunch", val: 98 },
        { label: "Spice", val: 12 },
        { label: "Coconut Aroma", val: 95 }
      ],
      nutrition: [
        { label: "Energy", val: "542 kcal", pct: 27 },
        { label: "Fats", val: "33g", pct: 42 },
        { label: "Carbs", val: "55g", pct: 18 }
      ]
    },
    {
      id: 2,
      name: "Spicy Kerala Mixture",
      price: "₹150",
      category: "Spicy",
      desc: "A hot, bold blend of crispy boondi, fried peanuts, local cashews, and curry leaves glazed in standard Kasaragod spices.",
      img: mixtureProductImg,
      flavors: [
        { label: "Crunch", val: 92 },
        { label: "Spice", val: 90 },
        { label: "Coconut Aroma", val: 80 }
      ],
      nutrition: [
        { label: "Energy", val: "525 kcal", pct: 26 },
        { label: "Fats", val: "29g", pct: 38 },
        { label: "Carbs", val: "42g", pct: 14 }
      ]
    },
    {
      id: 3,
      name: "Vibrant Tapioca Chips",
      price: "₹100",
      category: "Chips",
      desc: "Hand-sliced premium cassava root chips seasoned lightly with organic sea salt, chili, and turmeric powder.",
      img: tapiocaProductImg,
      flavors: [
        { label: "Crunch", val: 95 },
        { label: "Spice", val: 30 },
        { label: "Coconut Aroma", val: 75 }
      ],
      nutrition: [
        { label: "Energy", val: "480 kcal", pct: 24 },
        { label: "Fats", val: "24g", pct: 31 },
        { label: "Carbs", val: "61g", pct: 20 }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Anand R.",
      role: "Snack Connoisseur",
      text: "The Banana Chips are incredibly thin and taste exactly like the traditional ones fried in wood-fired setups. This is the new gold standard of Kerala snacks!",
      stars: 5
    },
    {
      name: "Sneha Kurian",
      role: "Fitness Coach",
      text: "I was skeptical at first, but knowing they fry exclusively in cold-pressed coconut oil without artificial chemical additives sold me. Pure, clean flavor.",
      stars: 5
    },
    {
      name: "John Mathew",
      role: "Expat, UAE",
      text: "Whenever I visit home, I pack 10 bags of Eatsmaa's Spicy Mixture. It has that authentic local chili fire that you simply cannot buy anywhere else.",
      stars: 5
    }
  ];

  return (
    <div className="w-full bg-brand-dark overflow-hidden select-none">
      {/* 1. Loading Preloader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-brand-dark z-[9999] flex flex-col items-center justify-center px-6"
          >
            <div className="max-w-md w-full space-y-6 text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display font-bold text-4xl text-white tracking-widest uppercase"
              >
                CRAFTING CRUNCH
              </motion.h2>
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-brand-orange rounded-full"
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeInOut" }}
                />
              </div>
              <div className="flex justify-between text-xs text-stone-500 font-bold uppercase tracking-widest">
                <span>Authentic Spices</span>
                <span>{progress}%</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[90vh] md:min-h-screen flex items-center pt-20 overflow-hidden bg-grid-pattern bg-brand-dark"
      >
        {/* Dynamic Background Gradients */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-brand-lime/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 w-full py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Hero Left Content */}
          <motion.div 
            style={{ y: heroTextY, opacity: heroOpacity }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-lime text-xs font-bold uppercase tracking-wider backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-orange animate-spin-slow" />
              <span>Chittarikkal, Kerala Heritage</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold text-white leading-tight tracking-normal">
              CRUNCH THE<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-400 to-brand-lime">
                EXTRAORDINARY
              </span>
            </h1>

            <p className="text-stone-400 text-lg md:text-xl max-w-xl leading-relaxed font-medium">
              Experience the addictive, wood-fired crunch of Northern Kerala's finest snacks. Handcrafted, packed fresh, and fried strictly in 100% pure cold-pressed coconut oil.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link
                to="/products"
                data-cursor="accent"
                className="inline-flex items-center justify-center px-8 py-4.5 text-sm font-bold uppercase tracking-wider rounded-full text-white bg-brand-orange hover:bg-brand-orange/90 shadow-lg glow-orange transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Shop Collections
                <ArrowRight className="ml-3 w-4 h-4" />
              </Link>
              <a
                href="#story"
                data-cursor="pointer"
                className="inline-flex items-center justify-center px-8 py-4.5 text-sm font-bold uppercase tracking-wider rounded-full text-stone-300 border border-white/10 hover:border-white/20 hover:text-white transition-all duration-300 hover:bg-white/5"
              >
                Our Heritage
              </a>
            </div>
          </motion.div>

          {/* Hero Right: 3D Tilting Product Mockup */}
          <motion.div 
            style={{ y: heroTextY, opacity: heroOpacity }}
            className="lg:col-span-5 flex items-center justify-center relative min-h-[400px] lg:min-h-[500px]"
          >
            {/* Background glowing circle */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-dashed border-white/10 flex items-center justify-center pointer-events-none"
            >
              <div className="w-64 h-64 rounded-full border border-dashed border-brand-orange/25" />
            </motion.div>

            {/* Central Mockup Bag with Mouse-driven Tilt */}
            <motion.div
              style={{
                rotateX: springY,
                rotateY: springX,
                transformStyle: "preserve-3d",
              }}
              data-cursor="text"
              data-cursor-text="CRUNCH"
              initial={{ scale: 0.7, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 2 }}
              transition={{ delay: 0.8, type: "spring", damping: 15 }}
              className="relative z-10 w-64 sm:w-80 cursor-pointer drop-shadow-[0_35px_50px_rgba(0,0,0,0.7)] hover:drop-shadow-[0_45px_60px_rgba(255,90,0,0.3)] transition-shadow duration-300"
            >
              <img 
                src={heroProductImg} 
                alt="Eatsmaa Banana Chips Bag" 
                className="w-full h-auto pointer-events-none select-none"
              />
            </motion.div>

            {/* Floating items around mockup */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 left-12 w-16 h-16 pointer-events-none z-20 drop-shadow-lg"
            >
              <div className="text-3xl rotate-12">🥥</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute bottom-16 right-10 w-20 h-20 pointer-events-none z-20 drop-shadow-md"
            >
              <div className="text-4xl -rotate-45">🌶️</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute top-20 right-4 w-12 h-12 pointer-events-none z-20 drop-shadow-sm"
            >
              <div className="text-2xl rotate-[30deg]">🍃</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10 pointer-events-none"
          style={{ opacity: heroOpacity }}
        >
          <span className="text-[10px] tracking-widest uppercase text-stone-500 font-bold">Scroll Down</span>
          <div className="w-[1px] h-10 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="w-full h-1/2 bg-brand-orange"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
            />
          </div>
        </motion.div>
      </section>

      {/* 3. Infinite running marquee text */}
      <section className="bg-brand-orange py-4 overflow-hidden border-y border-white/10 relative z-20">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex animate-marquee text-brand-dark font-display font-bold text-2xl md:text-4xl uppercase tracking-wider space-x-16 pr-16 select-none">
            <span>Addictive Crunch</span>
            <span>•</span>
            <span>100% Coconut Oil</span>
            <span>•</span>
            <span>Kasaragod Heritage</span>
            <span>•</span>
            <span>No Artificial Additives</span>
            <span>•</span>
            <span>Bold Spices</span>
            <span>•</span>
            <span>Freshly Packed</span>
            <span>•</span>
          </div>
          <div className="flex animate-marquee text-brand-dark font-display font-bold text-2xl md:text-4xl uppercase tracking-wider space-x-16 pr-16 select-none" aria-hidden="true">
            <span>Addictive Crunch</span>
            <span>•</span>
            <span>100% Coconut Oil</span>
            <span>•</span>
            <span>Kasaragod Heritage</span>
            <span>•</span>
            <span>No Artificial Additives</span>
            <span>•</span>
            <span>Bold Spices</span>
            <span>•</span>
            <span>Freshly Packed</span>
            <span>•</span>
          </div>
        </div>
      </section>

      {/* 4. Brand Story Section */}
      <section id="story" className="py-32 bg-brand-dark-card border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Story Image Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative h-[500px] rounded-3xl overflow-hidden border border-white/5 shadow-2xl group"
          >
            <img 
              src={ingredientsImg} 
              alt="Authentic Kerala Spices and Coconuts" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="w-12 h-1 bg-brand-orange mb-4 rounded" />
              <h4 className="text-2xl font-display font-bold text-white">Chittarikkal Valley</h4>
              <p className="text-stone-400 text-xs font-bold uppercase tracking-wider mt-1">Sourcing Rooted in Traditional Heritage</p>
            </div>
          </motion.div>

          {/* Story Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white tracking-normal leading-tight">
              OUR HERITAGE: THE ART OF THE<br/>
              <span className="text-brand-orange">PERFECT CRUNCH</span>
            </h2>
            
            <p className="text-stone-400 text-lg leading-relaxed">
            Nestled in the beautiful lush slopes of Chittarikkal, Kasaragod, <strong className="text-white">EATSMAA</strong> preserves generations of ancestral culinary secrets. We began with a commitment: to share the pure, unfiltered crunch of classic Malabar tea-shop snacks with the modern world.
            </p>

            <div className="border-l-4 border-brand-lime pl-6 my-6 italic text-stone-300 text-lg font-medium leading-relaxed bg-white/2 py-3 pr-4 rounded-r-lg">
              "We believe true taste lies in pure, organic coconut oil and wood-fired heat, preserving raw texture and earthy spice notes."
            </div>

            <p className="text-stone-400 text-base leading-relaxed">
              Our products are fried using traditional clay hearth setups. We source fresh plantains, tapioca, and premium lentils from local micro-farmers. Seasoned with hand-ground black pepper, organic red chilies, sea salt, and local spices. No preservatives, zero shortcuts.
            </p>

            <div className="pt-6 flex gap-10 border-t border-white/5">
              <div>
                <span className="text-4xl font-display font-bold text-brand-orange">100%</span>
                <p className="text-[10px] text-stone-500 font-bold uppercase tracking-widest mt-1">Natural Ingredients</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <span className="text-4xl font-display font-bold text-brand-lime">Kasaragod</span>
                <p className="text-[10px] text-stone-500 font-bold uppercase tracking-widest mt-1">Traditional Origin</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Featured Products Section */}
      <section className="py-32 bg-brand-dark relative">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
            <div className="space-y-4">
              <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">Addictive Bites</span>
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-white tracking-normal leading-tight">
                OUR HERO PACKS
              </h2>
            </div>
            <Link 
              to="/products" 
              data-cursor="pointer"
              className="inline-flex items-center text-brand-lime font-bold uppercase tracking-wider text-xs hover:text-white transition-colors gap-2"
            >
              Discover All Flavors <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCollection.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-brand-dark-card rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 shadow-lg transition-all duration-300 group cursor-pointer flex flex-col h-[520px]"
              >
                {/* Pack Image Container */}
                <div className="relative h-64 bg-gradient-to-b from-white/2 to-transparent p-6 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                  <img
                    src={product.img}
                    alt={product.name}
                    className="h-48 object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] group-hover:scale-105 group-hover:rotate-2 transition-transform duration-500"
                  />
                  <span className="absolute top-4 right-4 bg-brand-dark border border-white/10 text-stone-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>

                {/* Card Details */}
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-xl font-display font-bold text-white leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-stone-500 text-sm line-clamp-2">
                      {product.desc}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="h-[1px] bg-white/5 w-full" />
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-[10px] text-stone-600 font-bold uppercase tracking-wider block">Price</span>
                        <span className="text-2xl font-display font-bold text-brand-lime">{product.price}</span>
                      </div>
                      <button
                        onClick={() => setActiveProduct(product)}
                        data-cursor="accent"
                        className="px-6 py-3 rounded-full bg-brand-orange text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-orange/90 transition shadow-md"
                      >
                        Quick View
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us Section */}
      <section className="py-32 bg-brand-dark-card border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">Quality Standard</span>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white tracking-normal leading-tight">
              THE EATSMAA DIFFERENCE
            </h2>
            <p className="text-stone-500 text-sm font-medium">
              We stand apart from industrial snack companies through our ancestral standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="glass rounded-3xl p-8 border border-white/5 space-y-6 hover:border-brand-orange/20 transition-all duration-300 relative group"
              >
                {/* Glowing subtle border effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-brand-lime/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-brand-orange/10 group-hover:border-brand-orange/25 transition-colors duration-300">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-white">{feat.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Customer Love Section (Testimonials Carousel) */}
      <section className="py-32 bg-brand-dark relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">Testimonials</span>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white tracking-normal leading-tight">
              LOVED BY SNACKERS
            </h2>
          </div>

          {/* Testimonial slider: Draggable row */}
          <motion.div 
            data-cursor="pointer"
            data-cursor-text="DRAG"
            className="flex gap-8 overflow-x-auto pb-8 scrollbar-none snap-x"
          >
            {testimonials.map((test, idx) => (
              <div
                key={idx}
                className="min-w-[300px] md:min-w-[400px] flex-1 bg-brand-dark-card border border-white/5 rounded-3xl p-8 space-y-6 snap-center"
              >
                <div className="flex gap-1">
                  {[...Array(test.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <p className="text-stone-300 text-base leading-relaxed italic">
                  "{test.text}"
                </p>
                <div>
                  <h4 className="font-display font-bold text-white text-sm">{test.name}</h4>
                  <p className="text-stone-500 text-xs font-semibold">{test.role}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. Final CTA Section */}
      <section className="py-24 px-6 bg-brand-dark">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto bg-gradient-to-br from-brand-orange to-amber-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl glow-orange"
        >
          {/* Animated decorative graphics */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-brand-lime/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white leading-tight tracking-normal">
              JOIN THE CRUNCH CLUB
            </h2>
            <p className="text-white/80 text-base md:text-lg max-w-md mx-auto">
              Get notified of fresh batches, limited-edition snack launches, and exclusive member discounts.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="YOUR EMAIL ADDRESS" 
                required
                className="flex-grow px-6 py-4 rounded-full bg-brand-dark/30 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-white focus:bg-brand-dark/50 transition-all font-bold text-sm tracking-wide"
              />
              <button 
                type="submit"
                data-cursor="accent"
                className="px-8 py-4 rounded-full bg-white hover:bg-brand-lime hover:text-brand-dark text-brand-dark font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* Product Spotlight Detail Modal */}
      <ProductDetailModal
        isOpen={!!activeProduct}
        onClose={() => setActiveProduct(null)}
        product={activeProduct}
      />
    </div>
  );
}