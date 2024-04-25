import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Rules from "./pages/rules";
import Scoreboard from "./pages/scoreboard"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/pages/rules' element={<Rules/>} ></Route>
      <Route path='/pages/scoreboard' element={<Scoreboard/>}></Route>
    </Routes>
  );
}

export default App;
