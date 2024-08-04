import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import "./App.css";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import Stats, { StatsProps } from "./components/Stats";

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
    <div className="flex items-start bg-[#1F2028] w-screen">
      <Sidebar />
      <div className="screen w-full">
        <Topbar />
        <main className="main p-4 ">
          <div className="flex gap-4">
            {stats.map((stat) => (
              <Stats {...stat} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
