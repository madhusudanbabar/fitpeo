import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

const App = () => (
  <div className="flex items-start bg-[#1F2028]">
    <Sidebar />
    <Topbar />
  </div>
);

export default App;
