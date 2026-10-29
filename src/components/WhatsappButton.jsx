import { MessageCircle } from "lucide-react";
import { buildGeneralEnquiryMessage, buildWhatsAppUrl } from "../utils/whatsapp";

const WhatsAppButton = () => {
  // This floating CTA is now a WhatsApp enquiry shortcut instead of a cart-style purchase action.
  const whatsappURL = buildWhatsAppUrl(buildGeneralEnquiryMessage());

  return (
    <div className="fixed bottom-8 right-6 z-50 group">
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="accent"
        className="flex items-center justify-center bg-brand-orange hover:bg-brand-orange/90 text-white p-4 rounded-full shadow-lg glow-orange transition-all duration-300 hover:scale-110 active:scale-95 border border-white/10"
      >
        <MessageCircle size={28} className="animate-pulse" />
      </a>

      <span className="absolute right-16 bottom-3.5 bg-brand-dark-card border border-white/5 text-stone-300 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none whitespace-nowrap">
        Order on WhatsApp
      </span>
    </div>
  );
};

export default WhatsAppButton;
