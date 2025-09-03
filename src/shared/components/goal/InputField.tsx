import { type ChangeEvent } from "react";

interface InputFieldProps {
  title: string;
  desc: string;
  value: string; 
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  hasBorder?: boolean;
}

const InputField = ({title, desc, value, onChange, hasBorder = false}: InputFieldProps) => {
  return (
    <div className='mb-28'>
      <h2 className='mb-1 font-bold text-16'>{title}</h2>
      <p className='mb-1 font-medium text-gray-500 text-12'>{desc}</p>
      <div className='flex items-end'>
        <input 
          type="text"
          value={value}
          onChange={onChange}
          className={`w-[138px] px-2 py-3 bg-gray-100 rounded-4 text-16 font-bold focus:outline-none focus:border-primary-300 ${
            hasBorder ? 'border-2 border-primary-500' : 'border border-gray-300'
          } `}
          placeholder='금액 입력'
        />
        <span className='ml-16 font-semibold text-gray-600 text-14'>만원</span>
      </div>
    </div>
  )
}

export default InputField;