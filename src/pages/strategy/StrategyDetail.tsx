import {CAF_STRATEGY_DATA, getStrategyReduction} from '../../data/strategy';
import { ChevronLeft } from 'lucide-react';

interface StrategyDetailPageProps {
  strategyId: number;
  onBack?: () => void;
}

function StrategyDetail({strategyId, onBack}: StrategyDetailPageProps){
  const strategy = CAF_STRATEGY_DATA.find(s => s.strategy_id === strategyId);
  if(!strategy) {
    return <div>전략을 찾을 수 없습니다.</div>
  }
  const reduction = getStrategyReduction(strategy.strategy_id);

  function handleStartChallenge() {
    console.log('도전 시작:', strategy.title);
    // TODO: 도전 시작 로직
    alert(`"${strategy.title}" 도전을 시작했습니다!`);
  }
  const monthlySaving = strategy.daily_saving * 28;
  return (
    <div className='py-[30px]'>
      <div className='bg-white'>
        <button
          onClick={onBack}
        >
          <ChevronLeft className='w-9 h-9' />
        </button>
      </div>
      <div className='px-4 py-6'>
        <div className='bg-white border rounded-8 border-navy-100 rounded-8 px-[16px] py-[12px] shadow-primary'>
          {/* 데일리 태그 */}
          <div className='mb-2'>
            <span className='px-2 py-1 text-white rounded-8 bg-navy-100 text-12'>데일리</span>
          </div>
          <div className='mb-2'>
            {/* 전략 제목 */}
            <h1 className='font-bold text-gray-900 text-16 mb-[1px]'>{strategy.title}</h1>
            {/* 전략 설명 */}
            <p className='font-medium text-gray-700 text-12'>{strategy.description}</p>
          </div>
          {/* 기간 단축 효과 */}
          <div className='flex mt-[24px]'>
            <span className='text-gray-600 text-12'>하루면 </span>
            <span className='text-primary-500 text-12'>-{reduction.daily}일</span>
            <span className="px-1 text-gray-500 text-12">|</span>
            <span className='text-gray-600 text-12'>한달이면 </span>
            <span className='text-primary-500 text-12'>-{reduction.weekly}일</span>
          </div>
        </div>
        {/* 절약 효과 정보 */}
        <div className="px-2 mt-20 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">하루 실천 절약액</span>
            <span className="font-bold text-orange-500">{strategy.daily_saving}원</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">한 달 실천 절약액</span>
            <span className="font-bold text-orange-500">{monthlySaving}원</span>
          </div>
        </div>
      </div>
      <button
        onClick={handleStartChallenge}
        className='w-full py-3 font-semibold text-white bg-primary-500 text-12 rounded-8'
      >도전 시작하기</button>
    </div>
  )
}

export default StrategyDetail
