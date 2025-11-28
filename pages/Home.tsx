import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SLOGANS, MAIN_CTA, BRAND_STORY, AMENITIES, ROOMS } from '../constants';
import { ChevronRight, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        {/* Background Image/Video Placeholder */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://picsum.photos/1920/1080?random=10')` 
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-white/90 tracking-[0.2em] text-sm md:text-base uppercase mb-4">The Private Sanctuary</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-tight">
              {SLOGANS[0]}
            </h1>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.8 }}
          >
            <Link 
              to="/reservation"
              className="group inline-flex items-center gap-2 border border-white/50 px-8 py-3 text-white hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              <span>{MAIN_CTA}</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white to-transparent" />
        </motion.div>
      </section>

      {/* Brand Story Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="font-serif text-3xl md:text-4xl text-slate-800 mb-8">{SLOGANS[1]}</h3>
            <p className="text-slate-600 leading-loose text-lg whitespace-pre-line">
              {BRAND_STORY}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-sky-600 uppercase mb-2">Accommodations</h2>
              <h3 className="font-serif text-3xl md:text-4xl text-slate-900">당신에게 맞는 휴식의 형태</h3>
            </div>
            <Link to="/rooms" className="text-slate-500 hover:text-sky-600 flex items-center gap-1 mt-4 md:mt-0 transition-colors">
              모든 객실 보기 <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ROOMS.map((room) => (
              <Link to="/rooms" key={room.id} className="group relative overflow-hidden block aspect-[4/3] cursor-pointer">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                     style={{ backgroundImage: `url(${room.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h4 className="text-2xl font-serif mb-2">{room.name}</h4>
                  <p className="text-white/80 text-sm line-clamp-2">{room.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Amenities */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-sky-400 uppercase mb-3">Special Offer</h2>
            <h3 className="font-serif text-3xl md:text-4xl">{SLOGANS[2]}</h3>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {AMENITIES.slice(0,3).map((amenity, idx) => (
               <div key={amenity.id} className="text-center p-6 border border-white/10 hover:border-white/30 transition-colors bg-white/5 backdrop-blur-sm">
                 <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-900/50 text-sky-300 mb-6">
                   {amenity.icon}
                 </div>
                 <h4 className="text-xl font-serif mb-4">{amenity.title}</h4>
                 <p className="text-slate-400 text-sm leading-relaxed">{amenity.description}</p>
               </div>
             ))}
           </div>
           
           <div className="mt-16 text-center">
             <Link 
                to="/amenities"
                className="inline-block border-b border-sky-400 text-sky-400 pb-1 hover:text-white hover:border-white transition-colors"
              >
                더 많은 서비스 보기
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;