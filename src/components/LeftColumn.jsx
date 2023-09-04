import CardItem from "./CardItem";
import AreaChartComponent from "./WeeklySchedule";
import Pomodoro from "./Pomodoro";
import Mygrades from "./Mygrades";
import WeeklySchedule from "./WeeklySchedule";
const LeftColumn = () => {
  return (
    <div className="w-full flex flex-col justify-between p-2">
      <div className="flex flex-col lg:flex-row gap-2 w-full">
        <Mygrades />
        <Pomodoro />
      </div>
      <div className="flex-auto w-full">
        <WeeklySchedule />
      </div>
    </div>
  );
};

export default LeftColumn;
