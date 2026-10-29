import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, CheckCircle2 } from "lucide-react";
import { buildProductEnquiryMessage, openWhatsAppEnquiry } from "../utils/whatsapp";

export default function ProductDetailModal({ isOpen, onClose, product }) {
  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!product) return null;

  // Mock extended details for a professional product card
  const flavors = product.flavors || [
    { label: "Crunch", val: 95 },
    { label: "Spice", val: product.category === "Spicy" || product.name.includes("Spicy") || product.name.includes("Mixture") ? 85 : 10 },
    { label: "Sweetness", val: product.category === "Sweet" || product.name.includes("Sweet") || product.name.includes("Achappam") ? 75 : 5 },
    { label: "Coconut Aroma", val: 90 },
  ];

  const nutrition = product.nutrition || [
    { label: "Energy", val: "540 kcal", pct: 27 },
    { label: "Carbohydrates", val: "48g", pct: 16 },
    { label: "Fats (Cold-Pressed Coconut)", val: "32g", pct: 41 },
    { label: "Proteins", val: "6g", pct: 12 },
  ];

  const ingredients = product.ingredients || [
    "Locally sourced premium plantains/lentils",
    "Pure cold-pressed Kerala coconut oil",
    "Traditional sea salt",
    "Organic turmeric & heritage spice blend",
    "Fresh hand-picked curry leaves"
  ];

  const handleWhatsAppOrder = () => {
    // The old cart flow is replaced with a WhatsApp enquiry so the team can confirm the order manually.
    openWhatsAppEnquiry(buildProductEnquiryMessage(product));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-dark/80 backdrop-blur-md z-50 cursor-pointer"
          />

          {/* Drawer Container */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 250 }}
            className="fixed top-0 right-0 h-full w-full max-w-lg bg-brand-dark-card border-l border-white/5 shadow-2xl z-50 flex flex-col overflow-y-auto"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between sticky top-0 bg-brand-dark-card/90 backdrop-blur-md z-10">
              <div className="flex items-center gap-2 text-brand-orange text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4 animate-spin-slow" />
                <span>Product Spotlight</span>
              </div>
              <button
                onClick={onClose}
                data-cursor="pointer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors text-stone-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-8 flex-grow space-y-8">
              {/* Product Pack / Showcase */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-brand-orange/10 to-brand-lime/10 border border-white/5 p-8 flex items-center justify-center group shadow-inner">
                <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
                <motion.img
                  initial={{ scale: 0.8, rotate: -5 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.1, type: "spring" }}
                  src={product.img || `https://placehold.co/400x300/141416/ffffff?text=${encodeURIComponent(product.name)}`}
                  alt={product.name}
                  className="max-h-56 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 right-4 bg-brand-orange text-brand-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {product.category || "Premium"}
                </span>
              </div>

              {/* Title & Info */}
              <div>
                <h2 className="text-3xl font-display font-bold text-white leading-tight mb-2">
                  {product.name}
                </h2>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-3xl font-display font-bold text-brand-lime">
                    {product.price}
                  </span>
                  <span className="text-sm text-stone-500 line-through">
                    ₹{(parseInt(product.price.replace("₹", "")) * 1.25).toFixed(0)}
                  </span>
                  <span className="text-xs text-brand-orange font-bold bg-brand-orange/10 px-2 py-0.5 rounded border border-brand-orange/20">
                    SAVE 20%
                  </span>
                </div>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {product.desc || "Our flagship snack, crafted using ancestral secrets passed down through generations. Cooked exclusively in pure cold-pressed coconut oil, creating an unforgettable crispy snap with natural authentic local flavor."}
                </p>
              </div>

              {/* Flavor Profile Slider Metrics */}
              <div className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/5">
                <h3 className="text-sm font-display font-bold text-white uppercase tracking-wider">
                  Flavor Profile
                </h3>
                <div className="space-y-3">
                  {flavors.map((fl, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-stone-400">{fl.label}</span>
                        <span className="text-white">{fl.val}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${fl.val}%` }}
                          transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
                          className={`h-full rounded-full ${
                            fl.label === "Spice" ? "bg-brand-orange" : fl.label === "Sweetness" ? "bg-amber-400" : "bg-brand-lime"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ingredients */}
              <div className="space-y-4">
                <h3 className="text-sm font-display font-bold text-white uppercase tracking-wider">
                  Authentic Ingredients
                </h3>
                <ul className="grid grid-cols-1 gap-2 text-stone-400 text-sm">
                  {ingredients.map((ing, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0" />
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nutrition Facts */}
              <div className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/5">
                <h3 className="text-sm font-display font-bold text-white uppercase tracking-wider">
                  Nutrition Highlights (per 100g)
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {nutrition.map((nut, idx) => (
                    <div key={idx} className="p-3 bg-brand-dark rounded-xl border border-white/5 flex flex-col justify-between">
                      <span className="text-xs text-stone-500 mb-1 font-medium">{nut.label}</span>
                      <span className="text-lg font-bold text-white">{nut.val}</span>
                      <span className="text-[10px] text-brand-lime font-bold mt-1 uppercase">
                        {nut.pct}% DV
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Checkout Drawer Button */}
            <div className="p-6 border-t border-white/5 sticky bottom-0 bg-brand-dark-card z-10 flex gap-4">
              <button
                onClick={handleWhatsAppOrder}
                data-cursor="accent"
                className="flex-grow py-4 rounded-full bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-sm uppercase tracking-widest shadow-lg glow-orange hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Order on WhatsApp
              </button>
              <button
                onClick={onClose}
                className="px-6 py-4 rounded-full border border-white/10 hover:border-white/20 text-stone-400 hover:text-white text-sm uppercase font-bold transition-all"
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
