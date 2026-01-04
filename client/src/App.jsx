import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage.jsx";
import SubmitIdeaPage from "./pages/SubmitIdeaPage.jsx";
import RulesAndRegulations from "./Components/RulesAndRegulations.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/submit" element={<SubmitIdeaPage />} />
        {/* <Route path="/rules" element={<RulesAndRegulations />} /> */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
