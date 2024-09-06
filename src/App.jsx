import HomePage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import CreatePage from "./Pages/CreatePage";
import NavBar from "./components/Navbar";

function App() {
  return (
    <main className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </main>
  );
}

export default App;
