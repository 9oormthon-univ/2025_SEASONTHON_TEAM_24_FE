import { useState } from "react";
import onboardingSvg1 from "../../shared/assets/onboarding-svg/onboarding1.svg";
import onboardingSvg2 from "../../shared/assets/onboarding-svg/onboarding2.svg";
import onboardingSvg3 from "../../shared/assets/onboarding-svg/onboarding3.svg";

// 온보딩 페이지 1: 서비스 소개
const OnboardingStep1 = ({ onNext }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200 -pb-[100px] -mx-[16px]">
      {/* 컨테이너 */}
      <div className="container flex flex-col items-center justify-center flex-1">
        {/* 온보딩 이미지 */}
        <div className="flex items-left justify-left w-150 h-100 -ml-[74px]">
          <img src={onboardingSvg1} alt="텅장메이트 온보딩 1" className="object-contain w-full h-full" />
        </div>

        {/* 텍스트 */}
        <div className="text-left mb-30">
          <h1 className="font-semibold text-primary-500 text-24">이 앱에 들어온 당신 ,</h1>
          <span className="font-semibold text-gray-600 text-24">지금처럼 살면 돈 못모아요.</span>
        </div>

        {/* 페이지 인디케이터 */}
        <div className="flex mt-10 mb-20 space-x-8">
          <div className="w-8 h-8 rounded-full bg-navy-100"></div>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>

        {/* CTA 버튼 */}
        <button
          onClick={onNext}
          className="w-full py-16 font-bold text-white transition-colors max-w-80 bg-primary-500 text-16 rounded-12 shadow-primary hover:bg-primary-600"
        >
          꺼비 만나러 가기
        </button>
      </div>
    </div>
  );
};

// 온보딩 페이지 2: 문제 인식
const OnboardingStep2 = ({ onNext }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200 -mb-[100px] -mx-[16px]">
      <div className="container flex flex-col items-center justify-center flex-1 px-16 mx-auto py-60">
        {/* 온보딩 이미지 */}
        {/* 텍스트 */}
        <div className="text-left mb-30">
          <h1 className="font-semibold text-gray-600 text-24">
            내통장은 왜 늘 <span className="text-primary-500">텅장</span>일까요?
            <br />
          </h1>
          <span className="font-semibold text-navy-100 text-24">그 답은 소비습관에 있어요.</span>
        </div>
        <div className="flex items-center justify-center">
          <img src={onboardingSvg2} alt="텅장메이트 온보딩 2" className="object-contain w-full h-full" />
        </div>

        {/* 페이지 인디케이터 */}
        <div className="flex mb-20 space-x-8">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div className="w-8 h-8 rounded-full bg-navy-100"></div>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>

        {/* CTA 버튼 */}
        <button
          onClick={onNext}
          className="w-full py-16 font-bold text-white transition-colors max-w-80 bg-primary-500 text-16 rounded-12 shadow-primary hover:bg-primary-600"
        >
          꺼비 만나러 가기
        </button>
      </div>
    </div>
  );
};

// 온보딩 페이지 3: 솔루션 제안
const OnboardingStep3 = ({ onComplete }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200 -mb-[100px] -mx-[16px]">
      <div className="container flex flex-col items-center justify-center flex-1 px-16 mx-auto py-60">
        {/* 텍스트 */}
        <div className="text-left mb-30">
          <h1 className="mb-12 font-semibold text-gray-900 text-24">
            이제 소비 메이트, 꺼비가
            <br />
            <span className='text-navy-100'>소비 구멍</span>을 막아드릴게요.
          </h1>
        </div>
        {/* 온보딩 이미지 */}
        <div className="relative flex items-center justify-center">
          <img src={onboardingSvg3} alt="텅장메이트 온보딩 3" className="object-contain w-full h-[400px]" />
        </div>

        {/* 페이지 인디케이터 */}
        <div className="flex mb-20 space-x-8">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div className="w-8 h-8 rounded-full bg-navy-100"></div>
        </div>

        {/* CTA 버튼 */}
        <button
          onClick={onComplete}
          className="w-full py-16 font-bold text-white transition-colors max-w-80 bg-primary-500 text-16 rounded-12 shadow-primary hover:bg-primary-600"
        >
          꺼비 만나러 가기
        </button>
      </div>
    </div>
  );
};

// 온보딩 플로우 관리 컴포넌트
const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleComplete = () => {
    // 온보딩 완료 후 목표 설정 페이지로 이동
    console.log("온보딩 완료! 목표 설정으로 이동");
    // 실제 구현시에는 navigate('/goal-setting') 사용
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <OnboardingStep1 onNext={handleNext} />;
      case 2:
        return <OnboardingStep2 onNext={handleNext} />;
      case 3:
        return <OnboardingStep3 onComplete={handleComplete} />;
      default:
        return <OnboardingStep1 onNext={handleNext} />;
    }
  };

  return renderCurrentStep();
};

export default OnboardingFlow;
