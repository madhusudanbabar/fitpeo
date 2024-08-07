import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import "./App.css";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import Stats, { StatsProps } from "./components/Stats";
import Profit from "./components/Profit/Profit";
import Barchart from "./components/Barchart";
import Goals from "./components/Goals";

const App = () => {
  const stats: StatsProps[] = [
    {
      icon: faShoppingBag,
      label: "Total orders",
      quantity: "75",
      delta: 3,
      color: "blue",
    },
    {
      icon: faShoppingBag,
      label: "Total delivered",
      quantity: "70",
      delta: -3,
      color: "green",
    },
    {
      icon: faShoppingBag,
      label: "Total cancelled",
      quantity: "05",
      delta: 3,
      color: "red",
    },
    {
      icon: faShoppingBag,
      label: "Total revenue",
      quantity: "$12k",
      delta: -3,
      color: "pink",
    },
  ];

  return (
    <div className="w-screen bg-zinc-400">
      <div className="flex items-start bg-[#1F2028] max-w-screen-xl mx-auto">
        <Sidebar />
        <div className="w-full">
          <Topbar />
          <div className="bg-zinc-950 p-4">
            <h1 className="text-xl font-bold leading-loose mb-4">Dashboard</h1>
            <main className="main">
              <div className="flex gap-4">
                {stats.map((stat) => (
                  <Stats {...stat} />
                ))}
              </div>
              <Profit />
              <div className="bg-zinc-800 rounded-md p-4">
                <Barchart />
              </div>
              <Goals />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
