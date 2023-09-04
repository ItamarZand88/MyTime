import Links from "./Links";
import Mygrades from "./Mygrades";
import TaskList from "./Tasklist";

const RightColumn = ({ user }) => {
  return (
    <div className="w-full p-2">
      <TaskList user={user} />
      <Links />
    </div>
  );
};

export default RightColumn;
