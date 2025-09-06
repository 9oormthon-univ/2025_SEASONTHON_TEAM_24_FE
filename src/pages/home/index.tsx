// import { Navigate } from "react-router";
// import { useAuthStore } from "../../stores/authStore";
import HomeGoal from "../../shared/components/goal/homeGoal";
import HomeStrategy from "../../shared/components/strategy/homeStrategy";
import WeeklyRecord from "../../shared/components/goal/weeklyRecord";

function Home() {
  // const { isLoggedIn, isOnboardingCompleted } = useAuthStore()

  // // 로그인하지 않은 사용자는 로그인 페이지로
  // if (!isLoggedIn) {
  //   return <Navigate to="/login" replace />;
  // }

  // // 로그인했지만 온보딩을 완료하지 않은 사용자는 목표 설정으로
  // if (!isOnboardingCompleted) {
  //   return <Navigate to="/goal-setting" replace />;
  // }
  return (
    <div>
      <HomeGoal />
      <HomeStrategy />
      <WeeklyRecord />
    </div>
  );
}

export default Home;
