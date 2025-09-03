import {useState} from "react";

const InputField = ({title, desc, value, onChange, hasBorder = false}) => {
  return (
    <div className='mb-28'>
      <h2 className='mb-1 font-bold text-16'>{title}</h2>
      <p className='font-medium text-gray-500 text-12'>{desc}</p>
      <div className='flex'>
        <input 
          type="text"
          value={value}
          onChange={onChange}
          className={`flex-1 px-4 py-3 bg-gray-100 rounded-4 text-base focus:outline-none focus:border-primary-300 ${
            hasBorder ? 'border-4 border-primary-500' : 'border border-gray-300'
          } `}
          placeholder='금액 입력'
        />
        <span className='ml-16 font-semibold text-gray-600 text-14'>만원</span>
      </div>
    </div>
  )
}

function goalSet(){
  const [monthlyIncome, setMonthlyIncome ] = useState("");
  const [savingGoal, setSavingGoal] = useState("");

  const handleNext = () => {
    console.log("월 수입 : ", monthlyIncome);
    console.log("목표 저금 금액 : ", savingGoal);
  }
  
  return (
    <div className='min-h-screen bg-white'>
      <div className='py-28'>
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
        onChange={(e) => setMonthlyIncome(e.target.value)}
      />
    </div>
  )
}

export default goalSet