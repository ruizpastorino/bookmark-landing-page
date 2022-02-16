import Banner from "./components/banner";
import Navbar from "./components/navbar";
import "./styles/App.css";
import "./styles/utils.css"

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Banner/>
    </div>
  );
}

export default App;
