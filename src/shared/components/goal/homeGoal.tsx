import small from "../../assets/home-assets/small.svg"
function homeGoal() {
  /**
   * 금액 포맷 함수 formatAmount
   * @param amount - 금액 숫자
   * @returns 포맷된 금액 문자열 (예: 1,000원, 10,000원, 1만2,000원)
   */
  function formatAmount(amount: number) {
    if (amount >= 10000) {
      return `${Math.floor(amount / 10000)}만${
        amount % 10000 ? (amount % 10000).toLocaleString() : ""
      }원`;
    }
    return `${amount.toLocaleString()}원`;
  }
  // 임시 하드코딩 데이터
  const targetAmount = 3000000; // 300만원
  const monthlySalary = 2000000; // 월급 200만원
  const savingRate = 0.1; // 저축률 10%
  const monthlyTarget = monthlySalary * savingRate; // 월 저축 목표 (20만원)

  // 목표 달성 기간 계산
  const requiredSavings = Math.ceil(targetAmount / monthlyTarget); // 15회 저축
  const totalDays = (requiredSavings - 1) * 30; // 14개월 = 420일 (첫 저축은 오늘이므로 -1)
  const shortenedDays = 121.5; // 전략 단축 기간(임시 300일)
  const remainingDays = totalDays - shortenedDays; // 남은 기간 (450일)

  // 진행률 계산 (단축된 일수 기준)
  const percentage = (shortenedDays / totalDays) * 100;

  return (
    <div className="mt-24 bg-white">
      <div className="font-medium text-left">
        <h1 className="text-gray-900 text-24">텅장메이트와</h1>
      </div>

      {/* 목표 금액 & D-day */}
      <div className="mb-24 font-medium text-left">
        <h2 className="text-24">
          <span className="text-primary-500">
            {Math.floor(targetAmount / 10000)}
          </span>
          {/* 단위 변환 : 30,000원 -> 3만원 */}
          <span className="text-gray-900">만원 모으기 </span>
          {/* <span className="text-primary-200">D-{Math.round(remainingDays)}</span> */}
          <span className="text-primary-500">D-{remainingDays}</span>
        </h2>
      </div>

      {/* 한 달에 저금하기 */}
      <div className="mb-8 text-left">
        <p className="text-gray-500 text-14">
          한 달에 {formatAmount(monthlyTarget)}씩 저금하기
        </p>
      </div>

      {/* 진행률 바 */}
      <div className="mb-4">
        <div className="relative">
          <div className="w-full h-[16px] bg-gray-100 rounded-4">
            <div
              className="relative h-[16px] rounded-4 bg-primary-500"
              style={{ width: `${Math.min(percentage, 100)}%` }}
            >
              {/* 아이콘 (진행 지점) */}
              {percentage > 0 && (
                <img 
                  src={small} 
                  alt="진행 상태" 
                  className="absolute w-[20px] h-[20px] -right-[9px] -top-[8px]"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 9월 저금 금액 10% 확보 */}
      <div className="flex justify-start">
        <div className="mt-2 px-2 py-0.5 text-white rounded-full bg-primary-500 text-12">
          9월 저금 금액 10% 확보
        </div>
      </div>
    </div>
  );
}

export default homeGoal;
