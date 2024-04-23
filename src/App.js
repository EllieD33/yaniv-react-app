import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Rules from "./pages/rules";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/pages/rules' element={<Rules/>} ></Route>
    </Routes>
  );
}

export default App;
