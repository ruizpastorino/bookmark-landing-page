import "./styles/App.css";
import "./styles/utils.css";
import './styles/css/all.css'
import Spot from "./components/common/spot";
import Navbar from "./components/navigation/navbar";
import { cover } from "./components/common/spots.data";
import Features from "./components/features/index";
import Download from "./components/download/index";
import FAQ from "./components/faq/index";
import Contact from './components/contact/index.js'
import Footer from "./components/common/footer";

function App() {
  return (
<>
    <div className="app-container">
      <Navbar />
      <Spot {...cover} />
      <Features />
      <Download />
      <FAQ />
    </div>
      <Contact/>
      <Footer/>
</>
  );
}

export default App;
