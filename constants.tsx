import React from 'react';
import { Waves, Utensils, BedDouble, Droplets, Coffee, Flame } from 'lucide-react';
import { Amenity, Room } from './types';

// --- Brand Concept & Copywriting ---

export const APP_NAME = "The Joeun";
export const FULL_NAME = "더조은 펜션";

export const SLOGANS = [
  "산의 품에서 바다를 꿈꾸다.",
  "단 한 사람을 위한, 완벽한 고립.",
  "하늘과 바다가 맞닿은 프라이빗 인피니티."
];

export const MAIN_CTA = "당신의 쉼을 예약하세요";

export const BRAND_STORY = `
더조은 펜션은 깊은 산속의 고요함과 끝없이 펼쳐진 바다의 광활함을 동시에 품은 유일한 안식처입니다.
우리는 단순히 잠을 자는 공간이 아닌, 일상에 지친 당신의 영혼이 치유받을 수 있는 시간을 제공합니다.
오직 당신만을 위해 준비된 셰프의 디너, 별이 쏟아지는 밤의 수영, 그리고 최고급 침구에서의 아침.
이 모든 순간이 당신의 기억 속에 영원히 머물기를 바랍니다.
`;

// --- Rooms Data ---

export const ROOMS: Room[] = [
  {
    id: 'sunrise',
    name: '선라이즈 스위트',
    engName: 'Sunrise Suite',
    description: "동해의 붉은 태양이 가장 먼저 깃드는 객실입니다. 화이트와 내추럴 우드 톤의 인테리어가 따뜻한 아침의 시작을 알립니다. 전면 통유리창을 통해 침대에 누워 일출을 감상할 수 있으며, 넓은 테라스에서는 숲의 피톤치드와 바다 내음을 동시에 느낄 수 있습니다. 사랑하는 연인과 함께 새로운 시작을 꿈꾸기에 가장 완벽한 공간입니다.",
    features: ["킹사이즈 프리미엄 베드", "독립형 오션뷰 테라스", "몰튼 브라운 어메니티", "다이슨 헤어드라이어"],
    price: "450,000 KRW",
    image: "https://picsum.photos/800/600?random=1"
  },
  {
    id: 'moonlight',
    name: '문라이트 빌라',
    engName: 'Moonlight Villa',
    description: "달빛이 바다 위로 은하수처럼 흐르는 밤의 낭만을 담았습니다. 다크 그레이와 딥 블루 톤의 차분한 인테리어는 깊은 휴식을 유도합니다. 프라이빗 인피니티 풀과 바로 연결되어 있어 밤수영을 즐기기에 최적화되어 있으며, 거실에 설치된 벽난로는 낭만적인 밤의 분위기를 한층 더 고조시킵니다.",
    features: ["개별 인피니티 풀 직통 연결", "실내 벽난로 (에탄올)", "뱅앤올룹슨 스피커", "와인 셀러 및 웰컴 와인"],
    price: "550,000 KRW",
    image: "https://picsum.photos/800/600?random=2"
  }
];

// --- Amenities Data ---

export const AMENITIES: Amenity[] = [
  {
    id: 'pool',
    title: '프라이빗 인피니티 풀',
    description: '숲속 허공에 떠 있는 듯한 환상적인 뷰. 사계절 미온수로 운영되어 계절에 상관없이 바다와 산을 바라보며 유영할 수 있습니다.',
    image: "https://picsum.photos/800/600?random=3",
    icon: <Waves className="w-6 h-6" />
  },
  {
    id: 'dinner',
    title: '셰프의 웰컴 디너',
    description: '미슐랭 출신 셰프가 제철 지역 식재료로 준비하는 파인 다이닝 코스. 객실 내 다이닝 룸에서 프라이빗하게 서브됩니다.',
    image: "https://picsum.photos/800/600?random=4",
    icon: <Utensils className="w-6 h-6" />
  },
  {
    id: 'bedding',
    title: '최고급 구스 침구',
    description: '구름 위에 누운 듯한 포근함. 헝가리산 프리미엄 구스 다운과 100수 순면 커버가 당신의 숙면을 책임집니다.',
    image: "https://picsum.photos/800/600?random=5",
    icon: <BedDouble className="w-6 h-6" />
  },
  // Added 3 Special Services
  {
    id: 'floating',
    title: '플로팅 브렉퍼스트',
    description: '인피니티 풀 위에서 즐기는 특별한 아침 식사. 갓 구운 빵과 신선한 과일, 향긋한 커피가 물 위로 배달됩니다. (사전 예약 필수)',
    image: "https://picsum.photos/800/600?random=6",
    icon: <Coffee className="w-6 h-6" />
  },
  {
    id: 'spa',
    title: '프라이빗 아로마 스파',
    description: '천연 아로마 오일과 함께하는 자쿠지 스파. 여행의 피로를 풀고 몸과 마음의 균형을 되찾는 힐링 타임을 가져보세요.',
    image: "https://picsum.photos/800/600?random=7",
    icon: <Droplets className="w-6 h-6" />
  },
  {
    id: 'bonfire',
    title: '별빛 불멍 서비스',
    description: '테라스에 준비된 전용 화로대에서 즐기는 불멍의 시간. 타닥타닥 타오르는 장작 소리와 쏟아지는 별빛이 잊지 못할 추억을 선사합니다.',
    image: "https://picsum.photos/800/600?random=8",
    icon: <Flame className="w-6 h-6" />
  }
];