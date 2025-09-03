import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import {MOCK_SURVEY_QUESTIONS } from '../../data/mockSurveyData';

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

function SurveyPage(){
  const navigate = useNavigate();

  const [questions, setQuestions] = useState<SurveyQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<SurveyAnswer[]>([]);

  useEffect(() => {
    loadQuestions();
  }, []);

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
          <div className='w-12 h-12 mx-auto mb-4 border-b-2 border-blue-600 rounded-full animate-spin'>
            <p className='text-primary-500'>질문을 불러오는 중...</p>
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
