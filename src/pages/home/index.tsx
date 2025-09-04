import HomeGoal from "../../shared/components/goal/homeGoal";
import HomeStrategy from "../../shared/components/strategy/homeStrategy";
import WeeklyRecord from "../../shared/components/goal/weeklyRecord";

function Home() {
  return (
    <div>
      <HomeGoal />
      <HomeStrategy />
      <WeeklyRecord />
    </div>
  );
}

export default Home;
