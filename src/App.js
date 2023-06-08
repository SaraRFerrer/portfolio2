import { Routes, Route } from "react-router-dom";

/* Pages */
import Layout from "./components/Layout";
import Home from "./pages/home";
import Resume from "./pages/resume";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="resume" element={<Resume />} />
      </Route>
    </Routes>
  );
}

export default App;
