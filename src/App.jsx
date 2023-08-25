import { BrowserRouter, Routes, Route } from "react-router-dom";

import Achievements from "./components/Achievements";
import Work from "./components/Work";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/experience" element={<Work />} />
      </Routes>
    </>
  );
}

export default App;
