import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Leaf, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const steps = [
    {
      icon: <Leaf className="w-8 h-8 text-emerald-600" />,
      title: "Finest Ingredients",
      desc: "We source authentic spices and plantains directly from local farmers in Kasaragod."
    },
    {
      icon: <Flame className="w-8 h-8 text-amber-500" />,
      title: "Traditional Cooking",
      desc: "Fried in pure, cold-pressed coconut oil using age-old ancestral recipes."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
      title: "Sealed Fresh",
      desc: "Our premium packaging locks in the aroma and crunch for your ultimate satisfaction."
    }
  ];

  const bestsellers = [
    { name: "Kerala Banana Chips", desc: "Thin, crispy, and fried in pure coconut oil.", img: "https://placehold.co/400x300/f0fdf4/166534?text=Banana+Chips" },
    { name: "Spicy Kerala Mixture", desc: "A burst of spices, peanuts, and crunch in every bite.", img: "https://placehold.co/400x300/f0fdf4/166534?text=Kerala+Mixture" },
    { name: "Sweet Achappam", desc: "Traditional rose cookies with a hint of sesame.", img: "https://placehold.co/400x300/f0fdf4/166534?text=Achappam" }
  ];

  return (
    <div className="flex flex-col w-full bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center bg-emerald-950 overflow-hidden">
        {/* Background Image / Overlay */}
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=2000" 
            alt="Spices and ingredients" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/50 border border-emerald-800 text-amber-400 text-sm font-semibold mb-6 backdrop-blur-sm">
                <Star className="w-4 h-4" /> Based in Chittarikkal, Kerala
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-50 tracking-tight mb-8 leading-[1.1]">
                The Gold Standard of <span className="text-amber-500 italic">Kerala Snacks.</span>
              </h1>
              <p className="text-xl text-stone-300 mb-10 leading-relaxed max-w-xl">
                Experience the authentic crunch and heritage of Northern Kerala. Handcrafted snacks, fried in pure coconut oil to perfection.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <Link 
                  to="/products"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-emerald-950 bg-amber-500 hover:bg-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-300 hover:scale-105"
                >
                  Explore Collections
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 border border-stone-400 text-base font-medium rounded-full text-stone-200 hover:bg-stone-800 hover:border-stone-300 transition-all duration-300"
                >
                  Discover Our Story
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy / Process Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-serif font-bold text-emerald-950 sm:text-4xl">The Adam Food Difference</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-emerald-100 border-t-2 border-dashed border-emerald-200" />
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-stone-50 border-8 border-stone-100 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300 group-hover:bg-emerald-50">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-emerald-950 mb-4">{step.title}</h3>
                <p className="text-stone-600 leading-relaxed max-w-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-emerald-950 sm:text-4xl mb-4">Our Bestsellers</h2>
              <p className="text-stone-600 text-lg">Taste the most loved snacks from our collection.</p>
            </div>
            <Link to="/products" className="hidden sm:flex items-center text-emerald-700 font-semibold hover:text-emerald-900 transition-colors">
              View All <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestsellers.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-stone-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <img src={item.img} alt={item.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-emerald-950 mb-3">{item.name}</h3>
                  <p className="text-stone-600 mb-6 line-clamp-2">{item.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Best Choice</span>
                    <button className="text-amber-500 font-bold pointer-events-none group-hover:text-amber-600 transition-colors">
                      Shop Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center sm:hidden">
            <Link to="/products" className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-900 transition-colors">
              View All Snacks <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Newsletter / CTA */}
      <section className="py-24 bg-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="currentColor" fillOpacity="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern)"/>
          </svg>
        </div>
        {/* <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold text-stone-50 mb-6"
          >
            Join the Adam Food Family
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-emerald-100 mb-10 max-w-2xl mx-auto"
          >
            Subscribe to get updates on seasonal specialities, exclusive offers, and behind-the-scenes stories from Kasaragod.
          </motion.p>
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="px-6 py-4 rounded-full w-full max-w-sm bg-stone-50 border-0 focus:ring-2 focus:ring-amber-500 outline-none text-emerald-900"
            />
            <button type="submit" className="px-8 py-4 rounded-full bg-amber-500 text-emerald-950 font-bold hover:bg-amber-400 transition-colors whitespace-nowrap">
              Subscribe Now
            </button>
          </motion.form>
        </div> */}
      </section>
    </div>
  );
}
