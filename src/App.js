import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import WomanPage from "./Views/WomanPage";
import ManPage from "./Views/ManPage";
import SalePage from "./Views/SalePage";
import HomePage from "./Views/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="root">
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/man-page" element={<ManPage />} />
        <Route path="/woman-page" element={<WomanPage />} />
        <Route path="/sale-page" element={<SalePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
