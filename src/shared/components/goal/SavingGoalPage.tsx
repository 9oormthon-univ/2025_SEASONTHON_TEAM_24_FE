import MainCharacter from "../../assets/svg/mainCharacter2.svg"

function SavingGoalPage(){
  const handleFindGoal = () => {
    console.log("나의 꺼비 찾기 클릭")
  }
  return (
    <div className='mt-[38px]'>
      <div className='px-16 py-3 bg-white border border-primary-500 rounded-8 shadow-primary'>
        <p className="font-bold leading-relaxed text-gray-900 text-16">
          <span className="font-bold">1,000만원 모으기까지...</span><br/>
          현재 구조상 <span className="font-bold text-primary-600">n일</span> 걸려요
        </p>
      </div>
      <div className='mt-5'>
        <h1 className='mb-1 font-semibold text-gray-900 text-24'>
          그렇게는 못 모아...
        </h1>
        <p className='font-semibold text-navy-100 text-14'>
          나만의 꺼비를 찾고 소비 구멍을 막자
        </p>
      </div>
      <div className='mt-5 -mr-[16px]'>
        <img 
          src={MainCharacter} 
          alt="아련한 꺼비" 
          className='w-[400px] ml-auto'
        />
      </div>
            {/* 하단 버튼 */}
      <div>
        <button 
          onClick={handleFindGoal}
          className="w-full py-3 font-medium text-white transition-colors bg-primary-500 text-12 rounded-8"
        >나의 꺼비 찾기</button>
      </div>
    </div>
  )
}

export default SavingGoalPage
