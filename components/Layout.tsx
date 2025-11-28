import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { APP_NAME } from '../constants';

const NavLink: React.FC<{ to: string; label: string; isScrolled: boolean; mobile?: boolean; onClick?: () => void }> = ({ to, label, isScrolled, mobile, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const baseClasses = mobile
    ? "block px-4 py-3 text-lg font-medium transition-colors duration-300"
    : "relative px-2 py-1 text-sm font-medium tracking-widest uppercase transition-colors duration-300 hover:text-sky-500";
  
  const activeClasses = mobile
    ? "text-sky-600 bg-gray-50"
    : "text-sky-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-sky-500";

  const colorClasses = mobile 
    ? "text-gray-800" 
    : (isScrolled ? "text-slate-800" : "text-white");

  return (
    <Link 
      to={to} 
      className={`${baseClasses} ${isActive ? activeClasses : colorClasses}`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  // If not home, always show scrolled style (white background)
  const headerStyle = !isHome || isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6";
  const logoColor = !isHome || isScrolled ? "text-slate-900" : "text-white";
  const hamburgerColor = !isHome || isScrolled ? "text-slate-900" : "text-white";

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-800 bg-slate-50">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerStyle}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className={`text-2xl font-serif font-bold tracking-tighter z-50 transition-colors ${logoColor}`}>
            {APP_NAME}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" label="Home" isScrolled={!isHome || isScrolled} />
            <NavLink to="/rooms" label="Rooms" isScrolled={!isHome || isScrolled} />
            <NavLink to="/amenities" label="Amenities" isScrolled={!isHome || isScrolled} />
            <NavLink to="/reservation" label="Reservation" isScrolled={!isHome || isScrolled} />
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden z-50 focus:outline-none ${hamburgerColor}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} className="text-slate-900" /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden pt-24`}>
          <div className="flex flex-col space-y-2 px-6">
            <NavLink to="/" label="Home" isScrolled={true} mobile />
            <NavLink to="/rooms" label="Rooms" isScrolled={true} mobile />
            <NavLink to="/amenities" label="Amenities" isScrolled={true} mobile />
            <NavLink to="/reservation" label="Reservation" isScrolled={true} mobile />
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-white text-xl font-serif mb-6">{APP_NAME}</h3>
              <p className="mb-4 text-sm leading-relaxed">
                산과 바다가 만나는 곳,<br />
                당신의 가장 완벽한 휴식을 설계합니다.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-6">Contact</h4>
              <p className="text-sm mb-2">010-1234-5678</p>
              <p className="text-sm mb-2">info@joeunpension.com</p>
              <p className="text-sm">강원도 깊은산속 바다보이는길 123</p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-6">Social</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors"><Instagram size={24} /></a>
                <a href="#" className="hover:text-white transition-colors"><Facebook size={24} /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs">
            &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;