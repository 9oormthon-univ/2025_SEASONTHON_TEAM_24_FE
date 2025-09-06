import { type Strategy } from '../../../data/strategy';
import modalCharacter from "../../assets/character/CAF.svg"; // 모달용 캐릭터 SVG

interface StrategyCompletionModalProps {
  isOpen: boolean;
  strategy: Strategy | null;
  onConfirm: () => void;    // "네!" 버튼 클릭
  onCancel: () => void;     // "아니요!" 버튼 클릭
  onClose: () => void;      // 모달 닫기 (배경 클릭 등)
}

function StrategyCompletionModal({
  isOpen,
  strategy,
  onConfirm,
  onCancel,
  onClose
}: StrategyCompletionModalProps) {
  if (!isOpen || !strategy) return null;

  function handleBackgroundClick(e: React.MouseEvent) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackgroundClick}
    >
      <div className="w-[350px] max-w-sm p-6 mx-3 bg-white rounded-8">
        {/* 캐릭터 이미지 */}
        <div className="flex justify-center mb-4">
          <img 
            src={modalCharacter} 
            alt="완료 축하" 
            className="w-[180px] h-[180px]"
          />
        </div>

        {/* 제목 */}
        <h3 className="mb-2 font-bold text-center text-gray-900 text-20">
          오늘도 완료!
        </h3>

        {/* 설명 텍스트 */}
        <p className="mb-6 text-center text-gray-900 text-14">
          <span className='text-14 text-navy-100'>"{strategy.title}"</span>을<br />
          이번 주에 계속 도전할까요?
        </p>

        {/* 버튼 영역 */}
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-3 font-medium text-gray-700 transition-colors border border-gray-200 rounded-8 text-14 hover:bg-gray-100"
          >
            아니요!
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-3 font-medium text-white transition-colors bg-primary-500 rounded-8 text-14 hover:bg-primary-600"
          >
            네!
          </button>
        </div>
      </div>
    </div>
  );
}

export default StrategyCompletionModal;