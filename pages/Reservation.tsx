import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ROOMS } from '../constants';

const Reservation: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, send data to backend here.
  };

  return (
    <div className="pt-24 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-slate-900 mb-4">Reservation</h1>
          <p className="text-slate-500">
            가장 편안한 쉼을 위한 첫걸음.<br/>
            원하시는 날짜와 객실을 문의해주시면 신속하게 안내해 드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="bg-slate-50 p-8 md:p-10 rounded-lg"
          >
            {submitted ? (
              <div className="h-full flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-serif text-slate-900 mb-2">문의가 접수되었습니다.</h3>
                <p className="text-slate-500">담당자가 확인 후 입력하신 연락처로<br/>빠른 시일 내에 연락드리겠습니다.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-sky-600 hover:text-sky-700 underline text-sm">추가 문의하기</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Name</label>
                  <input type="text" required className="w-full bg-white border border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:border-sky-500" placeholder="성함" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Contact</label>
                  <input type="tel" required className="w-full bg-white border border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:border-sky-500" placeholder="연락처 (010-0000-0000)" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div>
                     <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Room Type</label>
                     <select className="w-full bg-white border border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:border-sky-500">
                       <option value="">객실 선택</option>
                       {ROOMS.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
                     </select>
                   </div>
                   <div>
                     <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Date</label>
                     <input type="date" className="w-full bg-white border border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:border-sky-500" />
                   </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-white border border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:border-sky-500 resize-none" placeholder="문의사항이나 요청사항을 적어주세요."></textarea>
                </div>
                <button type="submit" className="w-full bg-slate-900 text-white py-4 font-medium hover:bg-sky-700 transition-colors">
                  예약 문의 보내기
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center space-y-8 p-4"
          >
            <div>
              <h3 className="font-serif text-2xl text-slate-900 mb-4">Reservation Info</h3>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li>• 체크인 15:00 / 체크아웃 11:00</li>
                <li>• 기준 인원 2인 (최대 2인, 영유아 포함)</li>
                <li>• 웰컴 디너는 18:00 또는 19:00 중 선택 가능합니다.</li>
                <li>• 픽업 서비스는 입실 3일 전까지 신청 가능합니다.</li>
              </ul>
            </div>
            
            <div className="pt-8 border-t border-slate-100">
               <h3 className="font-serif text-2xl text-slate-900 mb-4">Bank Account</h3>
               <p className="text-slate-600">
                 <span className="font-bold text-slate-800">더조은은행</span> 123-456-789012<br/>
                 예금주: 더조은펜션
               </p>
            </div>

            <div className="pt-8 border-t border-slate-100">
              <p className="text-xs text-slate-400 leading-relaxed">
                * 본 사이트는 포트폴리오용 데모 사이트이며, 실제 예약은 이루어지지 않습니다.<br/>
                * Gemini API를 사용한 Chat Widget을 테스트해보세요.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;