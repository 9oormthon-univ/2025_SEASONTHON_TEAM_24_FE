// import { Plus } from "lucide-react";
// import { useNavigate } from 'react-router';
// import homeEmpty from "../../assets/home-assets/home-empty.svg";

// // 전략 컴포넌트
// function HomeStrategy() {
//   const navigate = useNavigate();
//   function navigateToStrategyList() {
//     console.log("전략 리스트 페이지로 이동");
//     // 실제 구현시 라우터 사용 예정
//     navigate('/strategyList')
//   }
//   return (
//     <div className="mt-10 -mx-[16px]">
//       <div className="flex items-center px-5 py-8 bg-primary-100">
//         <h3 className="font-semibold text-gray-900 text-14">현재 진행 중인 전략(0/3)</h3>
//       </div>
//       <section className="px-5 py-5 bg-white">
//         {/* <div className="flex items-center justify-center px-16 py-12 mb-8 border border-gray-200 rounded-8">
//           <div className="flex-shrink-0 w-[64px] h-[67px] mr-4 bg-orange-400 rounded-8"></div>
//           <div className="flex-1 ml-2">
//             <h4 className="mb-1 font-bold text-left text-gray-900 text-16">진행 중인 도전이 없어요</h4>
//             <p className="text-gray-500 text-14">이러다 또 텅장...</p>
//           </div>
//         </div> */}
//         <img src={homeEmpty} alt="진행 중인 도전이 없어요" className="flex-shrink-0 w-full h-auto mb-1 mr-4" />
//         <button
//           onClick={navigateToStrategyList}
//           className="flex items-center justify-center w-full py-3 bg-primary-500 rounded-8"
//         >
//           <span className="text-white text-12">도전 추가하기</span>
//           <Plus className="text-white w-[15px] h-[15px]" />
//         </button>
//       </section>
//     </div>
//   );
// }

// export default HomeStrategy;
import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router";
import homeEmpty from "../../assets/home-assets/home-empty.svg";
import StrategyCard from "../../components/strategy/strategyCard";
import Modal from "../../components/strategy/Modal";
import { CAF_STRATEGY_DATA, type Strategy } from "../../../data/strategy";

// 진행중인 전략 타입
interface ActiveStrategy extends Strategy {
  isCompleted: boolean;
  strategyType: "daily" | "weekly";
}

function HomeStrategy() {
  const navigate = useNavigate();
  const [activeStrategies, setActiveStrategies] = useState<ActiveStrategy[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedStrategy, setSelectedStrategy] = useState<ActiveStrategy | null>(null);

  // 초기 데이터 로딩 (실제로는 API에서 가져올 예정)
  useEffect(() => {
    // 임시 데이터 - 실제로는 사용자의 활성 전략을 API에서 가져와야 함
    const mockActiveStrategies: ActiveStrategy[] = [
      {
        ...CAF_STRATEGY_DATA[0],
        isCompleted: false,
        strategyType: "daily",
      },
      {
        ...CAF_STRATEGY_DATA[1],
        isCompleted: true,
        strategyType: "daily",
      },
    ];

    // 예시: 전략이 있는 경우와 없는 경우를 테스트하려면 빈 배열로 변경
    setActiveStrategies(mockActiveStrategies);
    // setActiveStrategies([]); // 빈 상태 테스트용
  }, []);

  function navigateToStrategyList() {
    console.log("전략 리스트 페이지로 이동");
    navigate("/strategyList");
  }

  function handleStrategyCardClick(strategy: ActiveStrategy) {
    console.log("전략 카드 클릭:", strategy.title);
    // 전략 상세 페이지로 이동하거나 다른 액션 수행
  }

  function handleCheckClick(strategy: ActiveStrategy) {
    console.log("체크 버튼 클릭:", strategy.title);
    setSelectedStrategy(strategy);
    setShowModal(true);
  }

  function handleModalConfirm() {
    if (!selectedStrategy) return;

    console.log(`${selectedStrategy.title} 주간 전략으로 승급`);

    // 전략을 주간으로 변경
    setActiveStrategies((prev) =>
      prev.map((strategy) =>
        strategy.strategy_id === selectedStrategy.strategy_id
          ? { ...strategy, strategyType: "weekly", isCompleted: true }
          : strategy
      )
    );
    closeModal();
  }
  function closeModal() {
    setShowModal(false);
    setSelectedStrategy(null);
  }
  function handleModalCancel() {
    if (!selectedStrategy) return;

    console.log(`${selectedStrategy.title} 전략 삭제`);

    // 전략 삭제
    setActiveStrategies((prev) => prev.filter((strategy) => strategy.strategy_id !== selectedStrategy.strategy_id));

    setShowModal(false);
    setSelectedStrategy(null);
  }

  return (
    <div className="mt-10 -mx-[16px]">
      <div className="flex items-center px-5 py-8 bg-primary-100">
        <h3 className="font-semibold text-gray-900 text-14">현재 진행 중인 전략({activeStrategies.length}/3)</h3>
      </div>

      <section className="px-5 py-5 bg-white">
        {/* 진행중인 전략이 없는 경우 */}
        {activeStrategies.length === 0 ? (
          <>
            <img src={homeEmpty} alt="진행 중인 도전이 없어요" className="w-full h-auto mb-8" />
            <button
              onClick={navigateToStrategyList}
              className="flex items-center justify-center w-full py-3 bg-primary-500 rounded-8"
            >
              <span className="text-white text-12">도전 추가하기</span>
              <Plus className="text-white w-[15px] h-[15px] ml-1" />
            </button>
          </>
        ) : (
          /* 진행중인 전략이 있는 경우 */
          <>
            <div className="mb-4 space-y-3">
              {activeStrategies.map((strategy) => (
                <StrategyCard
                  key={strategy.strategy_id}
                  strategy={strategy}
                  onClick={() => handleStrategyCardClick(strategy)}
                  isActive={true}
                  showCheckButton={strategy.strategyType === "daily"}
                  onCheckClick={() => handleCheckClick(strategy)}
                  isCompleted={strategy.isCompleted}
                />
              ))}
            </div>

            {/* 3개 미만일 때 추가 버튼 */}
            {activeStrategies.length < 3 && (
              <button
                onClick={navigateToStrategyList}
                className="flex items-center justify-center w-full py-3 bg-primary-500 rounded-8"
              >
                <span className="text-white text-12">도전 추가하기</span>
                <Plus className="text-white w-[15px] h-[15px] ml-1" />
              </button>
            )}
          </>
        )}
      </section>

      {/* 모달 컴포넌트 */}
      <Modal
        isOpen={showModal}
        strategy={selectedStrategy}
        onConfirm={handleModalConfirm}
        onCancel={handleModalCancel}
        onClose={closeModal}
      />
    </div>
  );
}

export default HomeStrategy;
