import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "+917560902502";
  const message = "Hello, I would like to know more about your services.";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-10 right-6 z-50 group">
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-emerald-950  hover:bg-accent-500 text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
      >
        <MessageCircle size={28} />
      </a>

      <span className="absolute right-16 bottom-3 bg-black text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition">
        Chat with us
      </span>
    </div>
  );
};

export default WhatsAppButton;