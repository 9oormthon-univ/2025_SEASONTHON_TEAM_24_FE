import React from 'react'
import { Plus } from "lucide-react"

// 전략 컴포넌트 
function homeStrategy(){
  function navigateToStrategyList() {
    console.log("전략 리스트 페이지로 이동");
    // 실제 구현시 라우터 사용 예정
    // navigateToStrategyList('/strategies');
  }
  return (
    <div className='mt-10 -mx-6'>
      <div className='bg-primary-100 flex items-center rounded-t-12 h-[48px] px-5'>
        <h3 className="font-semibold text-gray-900 text-20">
          현재 진행 중인 전략
        </h3>
      </div>
      <section className='px-6 py-3 bg-white'>
        <div className='h-[97px] mb-8 flex items-center bg-white rounded-8 border-gray-200'>
          <p className='px-5 text-left text-gray-600'>
            진행 중인 전략이 없어요<br/>
            이번 달도 텅장...
          </p>
        </div>
        <button onClick={navigateToStrategyList} className='flex items-center justify-center w-full py-3 bg-gray-200 rounded-12'>
          <Plus className="w-24 h-24 text-gray-700" />
        </button>
      </section>
    </div>
  )
}

export default homeStrategy
