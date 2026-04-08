import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-stone-50 pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-serif font-extrabold text-emerald-950 sm:text-6xl"
          >
            Our Heritage
          </motion.h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-8 rounded-full mb-8" />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl font-serif text-emerald-800 italic leading-relaxed"
          >
            "Rooted in tradition. Crafted with love in Kasaragod."
          </motion.p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Elegant image representing Kerala spices/tradition */}
            <img 
              src="https://images.unsplash.com/photo-1596662951362-b91c015b3c3b?auto=format&fit=crop&q=80&w=1200" 
              alt="Kerala Spices and Ingredients" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/20 to-transparent" />
            
            <div className="absolute bottom-10 left-10 right-10">
              <div className="w-16 h-1 bg-amber-500 mb-6" />
              <h3 className="text-white font-serif text-3xl font-bold mb-2">Chittarikkal,</h3>
              <p className="text-stone-300 text-lg uppercase tracking-widest font-semibold">Kasaragod District</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-8 text-stone-600 text-lg leading-relaxed"
          >
            <p>
              Located in the scenic, culturally rich town of <strong className="text-emerald-900 font-bold">Chittarikkal</strong>, nested within the Kasaragod district of Northern Kerala, 
              <strong> Adam Food</strong> started with a profoundly simple vision: to bring the authentic, unfiltered taste 
              of Kerala's ancestral snacks to everyone's home.
            </p>
            <div className="pl-6 border-l-4 border-amber-500 my-8 py-2">
              <p className="text-xl font-serif text-emerald-900 italic">
                We believe that the best flavors come from the purest, earth-grown ingredients combined with centuries of culinary wisdom.
              </p>
            </div>
            <p>
              Our recipes are strictly passed down through generations. We use only locally sourced, cold-pressed coconut oil, farm-fresh spices, and traditional wood-fire inspired cooking methods 
              that preserve the natural crunch, golden color, and heavenly aroma. No artificial preservatives, just real food.
            </p>
            <p>
              From our famous perfectly-sliced transparent Banana Chips to the uniquely spicy crunch of our Kerala Mixture, every packet 
              that leaves our kitchen carries the warmth, hospitality, and soul of Northern Kerala. Experience the unmatched quality, 
              and taste the deeply rooted tradition.
            </p>
            
            <div className="pt-8 flex items-center gap-6">
              <div className="text-center">
                <p className="text-4xl font-serif font-bold text-emerald-900">25+</p>
                <p className="text-sm uppercase tracking-wider font-bold text-stone-500 mt-2">Varieties</p>
              </div>
              <div className="w-px h-16 bg-stone-300" />
              <div className="text-center">
                <p className="text-4xl font-serif font-bold text-emerald-900">100%</p>
                <p className="text-sm uppercase tracking-wider font-bold text-stone-500 mt-2">Natural</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
