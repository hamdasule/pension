import React from 'react';
import { motion } from 'framer-motion';
import { AMENITIES } from '../constants';

const Amenities: React.FC = () => {
  return (
    <div className="pt-24 pb-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h1 className="font-serif text-4xl md:text-5xl text-slate-900 mb-4">Amenities & Services</h1>
          <p className="text-slate-500">
            당신의 휴식을 완벽하게 만들어줄 특별한 경험들.<br/>
            섬세한 배려가 깃든 서비스를 만나보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AMENITIES.map((amenity, index) => (
            <motion.div 
              key={amenity.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white group overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video overflow-hidden relative">
                 <img 
                    src={amenity.image} 
                    alt={amenity.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                 />
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-sky-600">
                    {amenity.icon}
                  </div>
                  <h3 className="text-xl font-serif text-slate-900">{amenity.title}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;