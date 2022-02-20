import { Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import GNB from "./components/GNB";
function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <GNB />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
