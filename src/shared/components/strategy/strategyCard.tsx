import { type Strategy, getStrategyReduction } from '../../../data/strategy'

interface StrategyCardProps {
  strategy: Strategy;    // 전략 데이터 객체
  onClick: () => void;   // 카드 클릭 시 실행할 함수
  isActive?: boolean;    // 진행중인 전략인지 여부
}

function StrategyCard({ 
  strategy, 
  onClick, 
  isActive = false 
  }: StrategyCardProps) {
  const reduction = getStrategyReduction(strategy.strategy_id);

  return (
    <div
      onClick={onClick} 
      className='border border-gray-200 rounded-8 p-[16px] mb-2 bg-white cursor-pointer'
    >
      {/* 상태 배지 */}
      {isActive && (
        <div>
          <span className='bg-primary-100 text-primary-500 text-12 font-bold rounded-[6px] px-[6px] py-[2px] '>진행중</span>
        </div>
      )}
      {/* 전략 제목 */}
      <h3 className='py-2 font-bold text-gray-900 text-16'>
        {strategy.title}
      </h3>
      {/* 절약 효과 */}
      {/* <div className='flex'>
        <span className='text-gray-600 text-12'>하루면</span>
        <span className='text-primary-500 text-12'>-{reduction.daily}일</span>
      </div>
      <div className="text-lg text-primary-300">|</div>
      <div className='flex'>
        <span className='text-gray-600 text-12'>한달이면</span>
        <span className='text-primary-500 text-12'>-{reduction.weekly}일</span>
      </div> */}
      <div className='flex'>
        <span className='text-gray-600 text-12'>하루면 </span>
        <span className='text-primary-500 text-12'>-{reduction.daily}일</span>
        <span className="px-1 text-12 text-primary-300">|</span>
        <span className='text-gray-600 text-12'>한달이면 </span>
        <span className='text-primary-500 text-12'>-{reduction.weekly}일</span>
      </div>
      
    </div>
  )
}

export default StrategyCard
