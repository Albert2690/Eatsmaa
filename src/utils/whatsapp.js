const WHATSAPP_PHONE_NUMBER = "917560902502";

export const buildWhatsAppUrl = (message) => {
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const buildGeneralEnquiryMessage = () => {
  return "Hello, I would like to enquire about your snacks and place an order manually on WhatsApp.";
};

export const buildProductEnquiryMessage = (product) => {
  if (!product) {
    return buildGeneralEnquiryMessage();
  }

  const productName = product.name || "this product";
  const productPrice = product.price ? `\nPrice: ${product.price}` : "";
  const productCategory = product.category ? `\nCategory: ${product.category}` : "";

  return [
    "Hello, I would like to enquire about this product:",
    `Product: ${productName}`,
    productCategory.trim(),
    productPrice.trim(),
    "",
    "Please help me with availability, delivery, and manual order details."
  ]
    .filter(Boolean)
    .join("\n");
};

export const openWhatsAppEnquiry = (message) => {
  const url = buildWhatsAppUrl(message);
  window.open(url, "_blank", "noopener,noreferrer");
};
