import {useState} from "react";
import InputField from '../../shared/components/goal/InputField';
import MainCharacter from "../../shared/assets/svg/mainCharacter1.svg"

function GoalSetting(){
  const [monthlyIncome, setMonthlyIncome ] = useState("");
  const [savingGoal, setSavingGoal] = useState("");

  const handleNext = () => {
    console.log("월 수입 : ", monthlyIncome);
    console.log("목표 저금 금액 : ", savingGoal);
  }
  
  return (
    <div className='min-h-screen bg-white'>
      <div className='py-28'>
        <img 
          src={MainCharacter}
          alt="꺼비"
          className='w-[70px] mb-1'
        />
        <h1 className='font-semibold text-gray-900 text-18'>
          당신의 금융 생활에 대해 알고 싶어요!
        </h1>
      </div>
      <InputField
        title="월 수익"
        desc="월 수익의 10%를 저금해요!"
        value={monthlyIncome}
        onChange={(e) => setMonthlyIncome(e.target.value)}
      />
      <InputField
        title="올해 저금 목표"
        desc="목표 금액은 최대 2000만원까지 설정할 수 있어요"
        value={savingGoal}
        onChange={(e) => setSavingGoal(e.target.value)}
      />
      <div>
        <button 
          onClick={handleNext}
          className="w-full py-3 font-medium text-white transition-colors bg-primary-500 mt-[74px] text-12 rounded-8"
        >다음</button>
      </div>
    </div>
  )
}

export default GoalSetting