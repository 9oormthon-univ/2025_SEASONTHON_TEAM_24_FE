import { useState } from "react";
import { useNavigate } from "react-router";
// import { useAuthStore } from "../../stores/authStore";
import axios from "axios";
import InputField from "../../shared/components/goal/InputField";
import MainCharacter from "../../shared/assets/svg/mainCharacter1.svg";

function GoalSetting() {
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [savingGoal, setSavingGoal] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  // const { token } = useAuthStore();

  async function submitGoal() {
    setIsLoading(true);

    try {
      const baseURL = import.meta.env.VITE_API_BASE_URL;
      const refreshToken = localStorage.getItem("refreshToken");

      console.log("사용할 refreshToken:", refreshToken);

      const headers = {
        "Content-Type": "application/json",
        ...(refreshToken && { Authorization: `Bearer ${refreshToken}` }),
      };
      const res = await axios.post(`${baseURL}/api/users/required-days`, {
        monthlyPay: Number(monthlyIncome),
        monthlyCost: 0,
        targetPrice: Number(savingGoal),
      }, {headers});
      if (res.data.statusCode === 200) {
        const calculatedDays = res.data.data.days;
        console.log("계산 일수 : ", calculatedDays);

        navigate("/goal-result", {
          state: {
            monthlyIncome: Number(monthlyIncome),
            savingGoal: Number(savingGoal),
            calculatedDays: calculatedDays,
          },
        });
      } else {
        throw new Error(res.data.message || "FAIL");
      }
    } catch (err) {
      console.error("API 호출 에러", err);
      alert("오류가 발생해습니다.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleNext() {
    console.log("월 수입 : ", monthlyIncome);
    console.log("목표 저금 금액 : ", savingGoal);

    if(!monthlyIncome || !savingGoal) {
      alert("모든 필드를 입력해주세요!");
      return;
    }
    
    // refreshToken 확인
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      alert('로그인이 필요합니다.');
      navigate('/login');
      return;
    }
    
    submitGoal();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="py-28">
        <img src={MainCharacter} alt="꺼비" className="w-[70px] mb-1" />
        <h1 className="font-semibold text-gray-900 text-18">당신의 금융 생활에 대해 알고 싶어요!</h1>
      </div>
      <InputField
        title="월 수익"
        desc="월 수익의 10%를 저금해요!"
        value={monthlyIncome}
        onChange={(e) => setMonthlyIncome(e.target.value)}
      />
      <InputField
        title="올해 저금 목표"
        desc="목표 금액은 최대 2000만원까지 설정할 수 있어요"
        value={savingGoal}
        onChange={(e) => setSavingGoal(e.target.value)}
      />
      <div>
        <button
          onClick={handleNext}
          className="w-full py-3 font-medium text-white transition-colors bg-primary-500 mt-[74px] text-12 rounded-8"
        >
          {isLoading ? "계산 중..." : "다음"}
        </button>
      </div>
    </div>
  );
}

export default GoalSetting;
