import Spot from "./components/spot";
import Navbar from "./components/navbar";
import { cover } from "./components/spots.data";
import "./styles/App.css";
import "./styles/utils.css";
import Features from "./components/features";
import Download from "./components/download";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Spot {...cover} />
      <Features />
      <Download />
    </div>
  );
}

export default App;
