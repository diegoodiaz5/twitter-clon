import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./Components/WelcomePage/WelcomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
