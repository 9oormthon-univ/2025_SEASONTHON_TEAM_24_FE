import { useState } from 'react';
import StrategyCard from '../../shared/components/strategy/strategyCard'
import StrategyDetail from './StrategyDetail'
import {CAF_STRATEGY_DATA} from '../../data/strategy';
import Character from '../../shared/assets/svg/mainCharacter1.svg'

function StrategyListPage(){
  const [selectedStrategyId, setSelectedStrategyId] = useState<number | null>(null);

    function handleCardClick(strategy: any) {
    console.log('클릭된 전략:', strategy);
    setSelectedStrategyId(strategy.strategy_id);
  }

  function handleBackToList() {
    setSelectedStrategyId(null);
  }

  // 상세 페이지 표시
  if (selectedStrategyId) {
    return (
      <StrategyDetail
        strategyId={selectedStrategyId} 
        onBack={handleBackToList}
      />
    );
  }
  return (
    <div className='bg-white'>
      <div className='flex justify-between'>
        <div className='flex-1 mt-[40px]'>
          <p className='mb-2 font-semibold text-navy-100 text-14'>꺼비가 추천하는 방법</p>
          <h1 className='font-semibold text-gray-900 text-24'>
            통장을 막는 방법은<br />
            생각보다 많아요
          </h1>
        </div>
        <div className='flex-shrink-0 ml-2'>
          <img 
            src={Character} 
            alt="꺼비"
            className='w-[73px] h-[150px]'
          />
        </div>
      </div>
      <div className='my-3 -mx-[16px]'>
        <div className='flex items-center px-5 py-8 bg-navy-100'>
          <h3 className="font-bold text-white text-16">
            도전 목록
          </h3>
        </div>
      </div>
      <div className='px-4 py-6'>
        <div className='space-y-4'>
          {CAF_STRATEGY_DATA.map((strategy, index) => (
            <StrategyCard
              key={strategy.strategy_id}
              strategy={strategy}
              onClick={() => handleCardClick(strategy)}
              isActive={index === 0} // 첫 번째 카드만 진행중으로 표시
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default StrategyListPage
