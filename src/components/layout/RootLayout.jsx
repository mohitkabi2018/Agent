import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const RootLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#1A1A1A] overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#2C2C2C]" />
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <Navbar />
        <main className="flex-1 w-full">
          <div className="w-full h-full">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
