import AddBots from "../components/AddBots";
import LeaveAll from "../components/leaveAll";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100 items-start">

      {/* Add a bot in to a serveur */}
      <div className="">
        <AddBots/>
      </div>

      <div className="">
        <LeaveAll/>
      </div>

    </div>
  );
}
