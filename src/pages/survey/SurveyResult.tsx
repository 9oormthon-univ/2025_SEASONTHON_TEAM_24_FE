import { useLocation, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
// import axios from 'axios';


/**
 * 캐릭터 SVG 이미지 import
 */
import cafCharacter from '../../shared/assets/svg/mainCharacter1.svg'
import taxCharacter from '../../shared/assets/svg/mainCharacter1.svg'
import impCharacter from '../../shared/assets/svg/mainCharacter1.svg'
import subCharacter from '../../shared/assets/svg/mainCharacter1.svg'
import yoloCharacter from '../../shared/assets/svg/mainCharacter1.svg'
import fasCharacter from '../../shared/assets/svg/mainCharacter1.svg'


interface SurveyAnswer {
  surveyId: number;
  optionType: string;
}

interface ResultState {
  completed: boolean;
  answersCount: number;
  answers: SurveyAnswer[];
}

interface CharacterRes {
  character_id: number;
  code: string;
  name: string;
  desc: string;
  traits: string[]; // 백엔드에서 받을 특징 리스트
  savings: string; // 백엔드에서 받을 절약 일수
}

// 캐릭터 코드별 이미지 매핑
const CHARACTER_IMAGES = {
  CAF: cafCharacter,
  TAX: taxCharacter,
  IMP: impCharacter,
  SUB: subCharacter,
  YOLO: yoloCharacter,
  FAS: fasCharacter,
};

// 목업 캐릭터 데이터 (백엔드 응답 형태)
const MOCK_CHARACTER_DATA: CharacterRes = {
  character_id: 1,
  code: 'CAF',
  name: '카페인 중독 꺼비',
  desc: '커피 살 돈으로 커피 머신을 하나 사겠다!',
  traits: [
    '소소한 일상 지출이 많음',
    '매일 커피와 간식 지출이 쌓여 텅장',
    '"이 정도는 괜찮지" 하다가 통장 잔액 증발'
  ],
  savings: '5'
};


function SurveyResult () {
  const location = useLocation();
  const navigate = useNavigate();
  const [character, setCharacter] = useState<CharacterRes | null>(null);

  const state = location.state as ResultState;

  // 초기 데이터 검증
  // 데이터 X -> 서베이로 돌려보냄
  // 데이터 O -> 결과 조회
  useEffect(() => {
    if (!state || !state.completed) {
      navigate('/survey');
      return;
    }

    getCharacterRes();
  }, [state, navigate]);

  async function getCharacterRes() {
    try {
    //   const res = await axios.post('/api/survey/result', {
    //     answer: state.answers
    //   });
    //   setCharacter(res.data.data);
    // }

    // 임시 목업 데이터 사용
      setCharacter(MOCK_CHARACTER_DATA);
    } catch(err) {
      console.error('캐릭터 결과 조회', err);
      setCharacter(MOCK_CHARACTER_DATA);
    }
  }

  function getCharacterImage(code: string): string {
    return CHARACTER_IMAGES[code as keyof typeof CHARACTER_IMAGES] || cafCharacter;
  }

    const characterImage = character ? getCharacterImage(character.code): cafCharacter;

  function handleGoHome() {
    navigate('/');
  }

  return (
    <div className='bg-white'>
      <div className='text-center mt-[38px]'>
        {/* 캐릭터 이름(제목) */}
        <h1 className="font-semibold text-gray-900 text-24">
          {character?.name}
        </h1>
      </div>
      {/* 캐릭터 설명(부제목) */}
      <div className='mb-12 text-center'>
        <p className='font-semibold text-14 text-navy-100'>
          {character?.desc}
        </p>
      </div>
      <div className='flex justify-center mb-12'>
        <div className='w-[200] h-[200] flex items-center justify-center'>
          <img 
            src={characterImage} 
            alt={character?.name}
            className='w-[200px] h-[200px]'
          />
        </div>
      </div>
      
      {/* 말풍선 */}
      <div className="relative px-[16px] py-3 mb-8 border-2 border-primary-300 rounded-8 shadow-primary">        
        <p className="text-left text-gray-500 text-14">
          <span className="font-semibold text-gray-900 text-14">'{character?.name.trim()}'</span>
          와 함께하면 한 번의 소비 전략으로 최대 
          <span className="font-semibold text-primary-500 text-14">{character?.savings}일</span>
          을 줄일 수 있어요
        </p>
      </div>

      {/* 특징 리스트 */}
      <div className="mb-[24px] mt-[24px]">
        <ul className='text-12'>
          {character?.traits.map((trait, index) => (
            <li key={index} className="flex items-start text-gray-700 text-12">
              <span className="mr-2 text-gray-600">•</span>
              {trait}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={handleGoHome}
        className='w-full py-3 font-medium text-white bg-primary-500 text-12 rounded-8'
      >
        텅장채우기
      </button>
    </div>
  )
}

export default SurveyResult
