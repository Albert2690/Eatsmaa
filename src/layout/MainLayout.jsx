import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsappButton';
import CustomCursor from '../components/CustomCursor';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-dark">
      <CustomCursor />
      <Navbar />
      <main className="flex-grow pt-16">
        <Outlet />
        <WhatsAppButton />
      </main>
      <Footer />
    </div>
  );
}
