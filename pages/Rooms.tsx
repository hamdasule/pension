import React from 'react';
import { motion } from 'framer-motion';
import { ROOMS } from '../constants';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Rooms: React.FC = () => {
  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h1 className="font-serif text-4xl md:text-5xl text-slate-900 mb-4">Rooms</h1>
          <p className="text-slate-500">
            오직 한 팀만을 위해 준비된 두 가지 타입의 프라이빗 독채.<br/>
            당신의 취향에 맞는 휴식을 선택하세요.
          </p>
        </div>

        <div className="space-y-32">
          {ROOMS.map((room, index) => (
            <div key={room.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              
              <motion.div 
                className="w-full md:w-1/2 aspect-[4/3] bg-gray-200 relative overflow-hidden shadow-2xl"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                 <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
              </motion.div>

              <motion.div 
                className="w-full md:w-1/2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="mb-4">
                  <span className="text-sky-600 font-bold tracking-widest text-xs uppercase">{room.engName}</span>
                  <h2 className="text-3xl font-serif text-slate-900 mt-2">{room.name}</h2>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-8">
                  {room.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-700">
                      <Check size={16} className="text-sky-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <span className="text-xl font-serif text-slate-900">{room.price} <span className="text-sm text-slate-400 font-sans">/ 1박</span></span>
                  <Link 
                    to="/reservation"
                    className="px-6 py-3 bg-slate-900 text-white text-sm hover:bg-sky-700 transition-colors"
                  >
                    예약하기
                  </Link>
                </div>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;