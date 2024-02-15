import './App.css';
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Inventery from './pages/Inventery/Inventery';
import HigherOrder from './pages/HigherOrder/HigherOrder';

function App() {
  return (
    <Routers>
      <Routes>
        <Route path='/' element={<Inventery/>} />
        <Route path='higher-order' element={<HigherOrder/>} />
      </Routes>
    </Routers>
  );
}

export default App;
