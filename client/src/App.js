import "./App.css";
import Navbar from "./component/Navbar";
import Deshbord from "./component/deshbord";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Deshbord />} />
      </Routes>
    </div>
  );
}

export default App;
