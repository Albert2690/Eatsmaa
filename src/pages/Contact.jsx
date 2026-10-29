import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Send, Plus, Minus, HelpCircle, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: "What makes Eatsmaa snacks different?",
      a: "Our snacks are prepared strictly using ancestral recipes, cooked slowly over traditional wood-fire hearths, and fried in 100% pure cold-pressed coconut oil. We source all raw ingredients (plantains, jackfruit, tapioca) directly from micro-farmers in Chittarikkal, Kasaragod."
    },
    {
      q: "Do you ship pan-India and internationally?",
      a: "Yes! We ship across India using express shipping partners (delivery in 3-5 business days). For international shipments or exports (mainly UAE, UK, and USA), please send a request using our contact form or contact us directly on WhatsApp."
    },
    {
      q: "Are there any artificial colors or preservatives?",
      a: "Absolutely not. We take pride in clean eating. Our snacks are seasoned using organic sea salt, turmeric, chili powder, black pepper, and cardamom. No MSG, no artificial food colorings, and zero chemical preservatives."
    },
    {
      q: "Can I place custom seasoning or bulk event orders?",
      a: "Yes! For events, weddings, or wholesale orders exceeding 10kg, we can customize packaging sizes and adjust spice or sweetness levels to fit your menu requirements. Get in touch via the form below or email us."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-brand-dark pt-16 pb-24 relative overflow-hidden select-none">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-lime/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 1. Hero Header */}
        <div className="text-center py-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-lime text-xs font-bold uppercase tracking-wider"
          >
            <HelpCircle className="w-3.5 h-3.5 text-brand-orange" />
            <span>Connect & Support</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-white tracking-normal"
          >
            LET'S CHAT CHIPS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-400 text-lg max-w-xl mx-auto font-medium"
          >
            Have a question about a batch, bulk orders, or just want to tell us how much you loved the banana chips? We are here.
          </motion.p>
        </div>

        {/* 2. Form & Info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-start text-left">
          
          {/* Contact Details & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-display font-bold text-white leading-tight">
                CONTACT INFORMATION
              </h2>
              <p className="text-stone-500 text-sm leading-relaxed">
                Drop by our spice valley headquarters or contact our customer support team directly using the details below.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="glass rounded-2xl p-6 border border-white/5 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center shrink-0 text-brand-orange">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-sm">Headquarters</h4>
                  <p className="text-stone-400 text-xs mt-1 leading-relaxed">
                    Eatsmaa Food Center, Chittarikkal,<br/>Kasaragod District, Kerala, 671326
                  </p>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 border border-white/5 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-brand-lime/10 border border-brand-lime/20 flex items-center justify-center shrink-0 text-brand-lime">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-sm">Phone Support</h4>
                  <p className="text-stone-400 text-xs mt-1">
                    +91 75609 02502
                  </p>
                  <p className="text-stone-500 text-[10px] mt-0.5 uppercase tracking-wide">
                    Mon - Sat (9:00 AM - 6:00 PM IST)
                  </p>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 border border-white/5 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center shrink-0 text-brand-orange">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-sm">Email Support</h4>
                  <p className="text-stone-400 text-xs mt-1">
                    hello@eatsmaa.com
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <h4 className="text-stone-500 font-bold uppercase tracking-widest text-xs">Follow Us</h4>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  data-cursor="pointer"
                  className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-white border border-white/5 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  data-cursor="pointer"
                  className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-white border border-white/5 transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Premium Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-brand-dark-card border border-white/5 rounded-[2.5rem] p-8 md:p-12 relative shadow-2xl overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  exit={{ opacity: 0, y: -20 }}
                >
                  <h3 className="text-2xl font-display font-bold text-white mb-8">
                    SEND A MESSAGE
                  </h3>

                  {/* Name field */}
                  <div className="relative">
                    <label 
                      className={`absolute left-5 transition-all duration-300 pointer-events-none font-bold text-xs uppercase tracking-wider ${
                        focusedField === 'name' || formData.name 
                          ? '-top-2.5 bg-brand-dark-card px-2 text-brand-orange' 
                          : 'top-4.5 text-stone-500'
                      }`}
                    >
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 rounded-xl bg-transparent border border-white/10 text-white focus:outline-none focus:border-brand-orange transition-all font-semibold text-sm"
                    />
                  </div>

                  {/* Email field */}
                  <div className="relative">
                    <label 
                      className={`absolute left-5 transition-all duration-300 pointer-events-none font-bold text-xs uppercase tracking-wider ${
                        focusedField === 'email' || formData.email 
                          ? '-top-2.5 bg-brand-dark-card px-2 text-brand-orange' 
                          : 'top-4.5 text-stone-500'
                      }`}
                    >
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 rounded-xl bg-transparent border border-white/10 text-white focus:outline-none focus:border-brand-orange transition-all font-semibold text-sm"
                    />
                  </div>

                  {/* Subject field */}
                  <div className="relative">
                    <label 
                      className={`absolute left-5 transition-all duration-300 pointer-events-none font-bold text-xs uppercase tracking-wider ${
                        focusedField === 'subject' || formData.subject 
                          ? '-top-2.5 bg-brand-dark-card px-2 text-brand-orange' 
                          : 'top-4.5 text-stone-500'
                      }`}
                    >
                      Subject
                    </label>
                    <input 
                      type="text" 
                      name="subject"
                      required
                      value={formData.subject}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 rounded-xl bg-transparent border border-white/10 text-white focus:outline-none focus:border-brand-orange transition-all font-semibold text-sm"
                    />
                  </div>

                  {/* Message field */}
                  <div className="relative">
                    <label 
                      className={`absolute left-5 transition-all duration-300 pointer-events-none font-bold text-xs uppercase tracking-wider ${
                        focusedField === 'message' || formData.message 
                          ? '-top-2.5 bg-brand-dark-card px-2 text-brand-orange' 
                          : 'top-4.5 text-stone-500'
                      }`}
                    >
                      Message
                    </label>
                    <textarea 
                      name="message"
                      required
                      rows="4"
                      value={formData.message}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 rounded-xl bg-transparent border border-white/10 text-white focus:outline-none focus:border-brand-orange transition-all font-semibold text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    data-cursor="accent"
                    className="w-full py-4.5 rounded-xl bg-brand-orange hover:bg-brand-orange/95 text-white font-bold text-xs uppercase tracking-widest transition duration-300 hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 glow-orange"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-lime/10 border border-brand-lime/20 flex items-center justify-center text-brand-lime">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-bold text-white uppercase">
                      Message Dispatched
                    </h3>
                    <p className="text-stone-400 text-sm max-w-sm">
                      Thank you for contacting Eatsmaa. Our dispatch coordinators will review and reply within 24 hours.
                    </p>
                  </div>
                  <div className="w-24 h-1 bg-brand-orange rounded-full overflow-hidden relative">
                    <motion.div 
                      className="h-full bg-brand-lime"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* 3. Styled Google Map */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden border border-white/5 h-[400px] shadow-2xl relative"
          >
            {/* Dark/Grayscale Filter applied to iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15525.68884976779!2d75.3341381!3d12.338575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4762b70f803c5%3A0xa19c72c295b9d3b3!2sChittarikkal%2C%20Kerala!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2) brightness(0.9)" }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </section>

        {/* 4. Accordion FAQ Section */}
        <section className="mb-32 text-left max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">Help Center</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-normal leading-tight">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-brand-dark-card border border-white/5 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  data-cursor="pointer"
                  className="w-full px-6 py-5 flex items-center justify-between text-white hover:text-brand-orange transition-colors font-display font-bold text-sm uppercase tracking-wide text-left"
                >
                  <span>{faq.q}</span>
                  <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    {activeFaq === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-stone-400 text-sm leading-relaxed border-t border-white/2 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
