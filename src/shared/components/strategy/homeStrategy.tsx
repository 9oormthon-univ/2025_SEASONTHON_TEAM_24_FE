import { Plus } from "lucide-react";
import { useNavigate } from 'react-router';
import homeEmpty from "../../assets/home-assets/home-empty.svg";

// 전략 컴포넌트
function HomeStrategy() {
  const navigate = useNavigate();
  function navigateToStrategyList() {
    console.log("전략 리스트 페이지로 이동");
    // 실제 구현시 라우터 사용 예정
    navigate('/strategyList')
  }
  return (
    <div className="mt-10 -mx-[16px]">
      <div className="flex items-center px-5 py-8 bg-primary-100">
        <h3 className="font-semibold text-gray-900 text-14">현재 진행 중인 전략(0/3)</h3>
      </div>
      <section className="px-5 py-5 bg-white">
        {/* <div className="flex items-center justify-center px-16 py-12 mb-8 border border-gray-200 rounded-8">
          <div className="flex-shrink-0 w-[64px] h-[67px] mr-4 bg-orange-400 rounded-8"></div>
          <div className="flex-1 ml-2">
            <h4 className="mb-1 font-bold text-left text-gray-900 text-16">진행 중인 도전이 없어요</h4>
            <p className="text-gray-500 text-14">이러다 또 텅장...</p>
          </div>
        </div> */}
        <img src={homeEmpty} alt="진행 중인 도전이 없어요" className="flex-shrink-0 w-full h-auto mb-1 mr-4" />
        <button
          onClick={navigateToStrategyList}
          className="flex items-center justify-center w-full py-3 bg-primary-500 rounded-8"
        >
          <span className="text-white text-12">도전 추가하기</span>
          <Plus className="text-white w-[15px] h-[15px]" />
        </button>
      </section>
    </div>
  );
}

export default HomeStrategy;
