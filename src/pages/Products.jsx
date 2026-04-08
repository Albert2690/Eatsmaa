import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const snacksList = [
  { id: 1, name: "Banana Chips", price: "₹120", category: "Chips" },
  { id: 2, name: "Tapioca Chips", price: "₹100", category: "Chips" },
  { id: 3, name: "Kerala Mixture (Spicy)", price: "₹150", category: "Mixture" },
  { id: 4, name: "Sweet Mixture", price: "₹140", category: "Mixture" },
  { id: 5, name: "Jackfruit Chips", price: "₹180", category: "Chips" },
  { id: 6, name: "Achappam", price: "₹90", category: "Traditional" },
  { id: 7, name: "Kuzhalappam", price: "₹95", category: "Traditional" },
  { id: 8, name: "Ari Murukku", price: "₹85", category: "Murukku" },
  { id: 9, name: "Butter Murukku", price: "₹110", category: "Murukku" },
  { id: 10, name: "Sarkkara Varatti", price: "₹140", category: "Sweet" },
  { id: 11, name: "Pakkavada", price: "₹110", category: "Traditional" },
  { id: 12, name: "Ribbon Pakkavada", price: "₹115", category: "Traditional" },
  { id: 13, name: "Peanut Candy", price: "₹80", category: "Sweet" },
  { id: 14, name: "Avalose Podi", price: "₹130", category: "Powder" },
  { id: 15, name: "Unniyappam (Dry)", price: "₹150", category: "Sweet" },
  { id: 16, name: "Masala Peanuts", price: "₹90", category: "Nuts" },
  { id: 17, name: "Roasted Cashews", price: "₹350", category: "Nuts" },
  { id: 18, name: "Salted Peanuts", price: "₹85", category: "Nuts" },
  { id: 19, name: "Karasev", price: "₹120", category: "Traditional" },
  { id: 20, name: "Thattai", price: "₹110", category: "Traditional" },
  { id: 21, name: "Cheeda", price: "₹135", category: "Traditional" },
  { id: 22, name: "Sweet Cheeda", price: "₹140", category: "Sweet" },
  { id: 23, name: "Pottukadalai Urundai", price: "₹90", category: "Sweet" },
  { id: 24, name: "Ellu Unda (Sesame)", price: "₹100", category: "Sweet" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Products() {
  return (
    <div className="min-h-screen bg-stone-50 pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-serif font-bold text-emerald-950 sm:text-5xl"
          >
            Authentic Collections
          </motion.h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full mb-6" />
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-600 max-w-2xl mx-auto"
          >
            Handpicked and freshly prepared snacks, bringing the essence of Kasaragod straight to your home.
          </motion.p>
        </div>

        {/* Products Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {snacksList.map((product) => (
            <motion.div 
              key={product.id}
              variants={itemVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <img 
                  src={`https://placehold.co/400x300/f0fdf4/166534?text=${encodeURIComponent(product.name)}`}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-stone-50/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold tracking-wide text-emerald-800 shadow-sm border border-stone-200">
                  {product.category}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col relative">
                <h3 className="text-lg font-bold text-emerald-950 mb-2 line-clamp-2 pr-8">
                  {product.name}
                </h3>
                <div className="w-8 h-8 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center absolute right-6 top-6 text-emerald-900 group-hover:bg-amber-500 group-hover:text-amber-950 group-hover:border-amber-500 transition-colors">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                
                <div className="mt-auto flex items-end justify-between pt-6 border-t border-stone-100">
                  <div>
                    <p className="text-xs text-stone-500 font-medium uppercase tracking-wider mb-1">Price</p>
                    <span className="text-2xl font-black text-amber-600">{product.price}</span>
                  </div>
                  <button className="text-sm font-bold text-emerald-900 hover:text-amber-600 transition-colors uppercase tracking-wider">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </div>
  );
}
