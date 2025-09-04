export interface Strategy {
  strategy_id: number;
  organ: string;
  title: string;
  description: string;
  type: 'CAF' | 'TAX' | 'IMP' | 'SUB' | 'YOLO' | 'FAS' | 'COM' | 'PUB';
  daily_saving: number;
  how_to_step: string;
}

// CAF(카페인 파산 꺼비) 전략 더미 데이터
export const CAF_STRATEGY_DATA: Strategy[] = [
  {
    strategy_id: 1,
    organ: '개인',
    title: '집/사무실 드립 1잔으로 대체',
    description: '카페 커피 대신 집 혹은 사무실에서 드립커피로 바꾸기',
    type: 'CAF',
    daily_saving: 3700,
    how_to_step: '전기포트로 물 끓이기 → 드립백 준비 → 천천히 추출하기'
  },
  {
    strategy_id: 2,
    organ: '개인',
    title: '편의점 원두커피로 대체',
    description: '브랜드 카페 대신 편의점 머신 커피로 변경',
    type: 'CAF',
    daily_saving: 3000,
    how_to_step: '편의점 방문 → 원하는 원두 선택 → 머신 커피 추출'
  },
  {
    strategy_id: 3,
    organ: '개인',
    title: '라떼→아메리카노로 변경',
    description: '평소 마시던 라떼 대신 아메리카노로 변경하기',
    type: 'CAF',
    daily_saving: 1500,
    how_to_step: '카페 방문 → 아메리카노 주문 → 시럽/토핑 추가 자제'
  },
  {
    strategy_id: 4,
    organ: '개인',
    title: '사이즈 다운(Tall 선택)',
    description: '평소보다 한 사이즈 작은 음료 주문하기',
    type: 'CAF',
    daily_saving: 1000,
    how_to_step: '메뉴 확인 → Tall 사이즈 선택 → 주문 완료'
  },
  {
    strategy_id: 5,
    organ: '개인',
    title: '시럽/샷 추가 안함',
    description: '추가 시럽이나 샷 주문하지 않기',
    type: 'CAF',
    daily_saving: 600,
    how_to_step: '기본 메뉴만 주문 → 추가 옵션 거절 → 기본맛 즐기기'
  },
  {
    strategy_id: 6,
    organ: '개인',
    title: '텀블러 할인 받기',
    description: '개인 텀블러 지참해서 할인 혜택 받기',
    type: 'CAF',
    daily_saving: 300,
    how_to_step: '텀블러 준비 → 카페 방문 → 할인 요청'
  },
  {
    strategy_id: 7,
    organ: '개인',
    title: '디저트(케이크/쿠키) 빼기',
    description: '커피와 함께 주문하던 디저트 생략하기',
    type: 'CAF',
    daily_saving: 2500,
    how_to_step: '커피만 주문 → 디저트 메뉴 보지 않기 → 유혹 이겨내기'
  },
  {
    strategy_id: 8,
    organ: '개인',
    title: '동료와 1잔 나눠 마시기(스플릿)',
    description: '큰 사이즈 주문해서 동료와 나눠 마시기',
    type: 'CAF',
    daily_saving: 2250,
    how_to_step: '동료와 상의 → 큰 사이즈 주문 → 컵 나눠서 마시기'
  },
  {
    strategy_id: 9,
    organ: '개인',
    title: '동네 2,500원 카페로 브랜드 다운시프트',
    description: '프랜차이즈 대신 동네 저렴한 카페 이용',
    type: 'CAF',
    daily_saving: 2000,
    how_to_step: '동네 카페 찾기 → 가격 비교 → 저렴한 곳 방문'
  },
  {
    strategy_id: 10,
    organ: '개인',
    title: '앱/영수증 쿠폰 사용',
    description: '카페 앱이나 영수증 쿠폰 적극 활용하기',
    type: 'CAF',
    daily_saving: 700,
    how_to_step: '앱 설치 → 쿠폰 확인 → 결제 시 쿠폰 사용'
  },
];

// 기간 단축 정보를 포함한 확장 타입 (나중에 백엔드에서 받을 예정)
export interface StrategyWithReduction extends Strategy {
  daily_reduction: number;
  weekly_reduction: number;
}

// 임시로 기간 단축 정보 매핑
export const getStrategyReduction = (strategyId: number) => {
  const reductionMap: { [key: number]: { daily: number; weekly: number } } = {
    1: { daily: 0.6, weekly: 3.9 },
    2: { daily: 0.4, weekly: 3.0 },
    3: { daily: 0.2, weekly: 1.5 },
    4: { daily: 0.1, weekly: 1.2 },
    5: { daily: 0.1, weekly: 0.6 }, 
    6: { daily: 0.1, weekly: 0.3 }, 
    7: { daily: 0.4, weekly: 2.7 },
    8: { daily: 0.3, weekly: 2.4 },
    9: { daily: 0.3, weekly: 2.1 },
    10: { daily: 0.1, weekly: 0.6 }
  };
  
  return reductionMap[strategyId] || { daily: 0, weekly: 0 };
};