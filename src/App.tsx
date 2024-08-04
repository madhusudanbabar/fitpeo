import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

const App = () => (
  <div className="flex items-start bg-[#1F2028]">
    <Sidebar />
    <div className="screen">
      <Topbar />
      <main className="card">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit
        rem soluta nobis tenetur eaque praesentium cupiditate et debitis at, ab
        nam esse iusto dolores sunt, dolor quidem eveniet deserunt. Ducimus!
      </main>
    </div>
  </div>
);

export default App;
