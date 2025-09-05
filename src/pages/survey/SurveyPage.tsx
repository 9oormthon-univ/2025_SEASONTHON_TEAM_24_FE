import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import {MOCK_SURVEY_QUESTIONS } from '../../data/mockSurveyData';

import survey1 from '../../shared/assets/survey-svg/survey1.svg';
import survey2 from '../../shared/assets/survey-svg/survey2.svg';
import survey3 from '../../shared/assets/survey-svg/survey3.svg';
import survey4 from '../../shared/assets/survey-svg/survey4.svg';
import survey5 from '../../shared/assets/survey-svg/survey5.svg';
import survey6 from '../../shared/assets/survey-svg/survey6.svg';
import survey7 from '../../shared/assets/survey-svg/survey7.svg';
import survey8 from '../../shared/assets/survey-svg/survey8.svg';
import survey9 from '../../shared/assets/survey-svg/survey9.svg';
import survey10 from '../../shared/assets/survey-svg/survey10.svg';
import defaultImg from '../../shared/assets/svg/mainCharacter1.svg';


interface SurveyOption {
  type: string;
  title: string;
}

interface SurveyQuestion {
  surveyId: number;
  title: string;
  options: SurveyOption[];
}

interface SurveyAnswer {
  surveyId: number;
  optionType: string;
}

// 이미지 매핑 객체
const questionImages: { [key: number]: string } = {
  1: survey1,
  2: survey2,
  3: survey3,
  4: survey4,
  5: survey5,
  6: survey6,
  7: survey7,
  8: survey8,
  9: survey9,
  10: survey10,
};

function SurveyPage(){
  const navigate = useNavigate();

  const [questions, setQuestions] = useState<SurveyQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<SurveyAnswer[]>([]);

  useEffect(() => {
    loadQuestions();
  }, []);

  /**
   * @param Survey Get fnc
   */

  /* async function getQuestions() {
    setLoading(true);
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/surveys/full`);
      if(res.data.statusCode === 200){
        const surveyData = res.data.data;
        setQuestions(res.data.data.questions);
      } else {
        throw new Error('서베이 로드 실패')
      } 
    } catch(err) {
      console.error('error', err);
    } finally {
      setLoading(false);
    }
  } */

  // 목업 데이터 로드
  function loadQuestions() {
    setLoading(true);
    
    setTimeout(() => {
      setQuestions(MOCK_SURVEY_QUESTIONS);
      setLoading(false);
    }, 500);
  }

  // loading
  if(loading) {
    return (
      <div className='flex items-center justify-center'>
        <div className='text-center'>
          <div>
            <p className='text-primary-400'>질문을 불러오는 중...</p>
          </div>
        </div>
      </div>
    )
  }

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  // 선택지 클릭 처리
  function handleChoiceClick(option: SurveyOption) {
    // 현재 답변 생성
    const currentAnswer: SurveyAnswer = {
      surveyId: currentQuestion.surveyId,
      optionType: option.type
    };

    const newAnswers = [...answers, currentAnswer];

    // 마지막 질문이면 서베이 완료 처리
    if (isLastQuestion) {
      handleSurveyComplete(newAnswers);
    } else {
      // 답변 저장하고 다음 질문으로
      setAnswers(newAnswers);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

  // 질문 이미지 가져오기
  function getQuestionImg(surveyId: number): string {
    return questionImages[surveyId] || defaultImg;
  }

  /**
   * 
   * @param 서베이 답변 제출 
   */

  /* async function submitAnswer(finalAnswers: SurveyAnswer[]) {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/surveys/responses`, {
        type: "FULL",
        answers: finalAnswers
      });
      if(res.data.statusCode === 200) {
        console.log('서베이 제출 성공', res.data);

        // 결과 페이지로 이동
        navigate('/survey/result', { 
          state: { 
            completed: res.data.data.completed,
            savedCount: res.data.data.savedCount,
            character: {
              code: responseData.code,
              name: responseData.name,
              desc: responseData.desc,
              trait: responseData.trait
            },
            answers: finalAnswers
          } 
        });
      } else {
        throw new Error("서베이 제출 실패");
      } 
    } catch(err) {
      console.error("서베이 제출 에러", err);
      alert("서베이 제출 실패");
    }
  } */

    // 서베이 완료 처리
  function handleSurveyComplete(finalAnswers: SurveyAnswer[]) {
    console.log('서베이 완료!');
    console.log('전체 답변:', finalAnswers);
    
    // 결과 페이지로 이동
    navigate('/survey/result', { 
      state: { 
        completed: true,
        answersCount: finalAnswers.length,
        answers: finalAnswers
      } 
    });
  }


  return (
    <div className="flex items-center justify-center bg-white ">
      <div className="w-full max-w-md bg-white">
        {/* 질문 번호 */}
        <div className="mb-6 text-center">
          <span className="inline-flex items-center justify-center mt-[38px] mb-8 font-semibold text-24 text-navy-100">
            Q{currentQuestionIndex + 1}
          </span>
          <h1 className="font-semibold leading-relaxed text-gray-800 text-24">
            {currentQuestion.title}
          </h1>
        </div>
        <div className="flex justify-center mb-6">
          <img 
            src={getQuestionImg(currentQuestion.surveyId)} 
            alt={`질문 ${currentQuestion.surveyId}`}
            className="object-cover w-[200px]"
          />
        </div>

        {/* 선택지 버튼들 */}
        <div className="space-y-4">
          {currentQuestion.options.map((option) => (
            <button
              key={option.type}
              onClick={() => handleChoiceClick(option)}
              className="w-full py-3 mb-16 text-center transition-colors duration-200 border border-primary-500 bg-primary-100 hover:bg-primary-200 rounded-8"
            >
              <span className="font-medium text-gray-800">
                {option.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SurveyPage
