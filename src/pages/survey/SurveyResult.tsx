
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthStore } from '../../stores/authStore';

/**
 * 캐릭터 SVG 이미지 import
 */
import cafCharacter from "../../shared/assets/svg/mainCharacter1.svg";
import taxCharacter from "../../shared/assets/svg/mainCharacter1.svg";
import impCharacter from "../../shared/assets/svg/mainCharacter1.svg";
import subCharacter from "../../shared/assets/svg/mainCharacter1.svg";
import yoloCharacter from "../../shared/assets/svg/mainCharacter1.svg";
import fasCharacter from "../../shared/assets/svg/mainCharacter1.svg";

interface SurveyAnswer {
  surveyId: number;
  optionType: string;
}

interface Character {
  code: string;
  name: string;
  desc: string;
  trait: string;
}

interface ResultState {
  completed: boolean;
  savedCount?: number;
  character: Character;
  answers: SurveyAnswer[];
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

function SurveyResult() {
  const { completeOnboarding } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();
  const [character, setCharacter] = useState<Character | null>(null);

  const state = location.state as ResultState;

  // 초기 데이터 검증
  useEffect(() => {
    if (!state || !state.completed || !state.character) {
      navigate("/survey");
      return;
    }

    // navigate로 전달받은 실제 캐릭터 데이터 사용
    setCharacter(state.character);
  }, [state, navigate]);

  function getCharacterImage(code: string): string {
    return CHARACTER_IMAGES[code as keyof typeof CHARACTER_IMAGES] || cafCharacter;
  }

  function parseTraits(traitString: string): string[] {
    // trait 문자열을 배열로 변환 (쉼표로 구분된 문자열 처리)
    return traitString.split(',').map(trait => trait.trim().replace(/'/g, ''));
  }

  function handleGoHome() {
    completeOnboarding(); // 온보딩 완료 처리
    navigate("/");
  }

  // character가 없으면 로딩 상태
  if (!character) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <p className="text-primary-400">결과를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  const characterImage = getCharacterImage(character.code);
  const traits = parseTraits(character.trait);

  return (
    <div className="bg-white">
      <div className="text-center mt-[38px]">
        {/* 캐릭터 이름(제목) */}
        <h1 className="font-semibold text-gray-900 text-24">
          {character.name}
        </h1>
      </div>
      {/* 캐릭터 설명(부제목) */}
      <div className="mb-12 text-center">
        <p className="font-semibold text-14 text-navy-100">
          {character.desc}
        </p>
      </div>
      <div className="flex justify-center mb-12">
        <div className="w-[200] h-[200] flex items-center justify-center">
          <img 
            src={characterImage} 
            alt={character.name} 
            className="w-[200px] h-[200px]" 
          />
        </div>
      </div>

      {/* 말풍선 */}
      <div className="relative px-[16px] py-3 mb-8 border-2 border-primary-300 rounded-8 shadow-primary">
        <p className="text-left text-gray-500 text-14">
          <span className="font-semibold text-gray-900 text-14">
            '{character.name.trim()}'
          </span>와 함께하면 한 번의
          소비 전략으로 최대
          <span className="font-semibold text-primary-500 text-14">
            {/* {character?.savings}일 */}
          </span>을 줄일 수 있어요
        </p>
      </div>

      {/* 특징 리스트 */}
      <div className="mb-[24px] mt-[24px]">
        <ul className="text-12">
          {traits.map((trait, index) => (
            <li key={index} className="flex items-start text-gray-700 text-12">
              <span className="mr-2 text-gray-600">•</span>
              {trait}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleGoHome} className="w-full py-3 font-medium text-white bg-primary-500 text-12 rounded-8">
        텅장채우기
      </button>
    </div>
  );
}

export default SurveyResult;