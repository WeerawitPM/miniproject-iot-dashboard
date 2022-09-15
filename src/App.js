import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/sidebar';
import Realtime from './pages/dashboard/realtime/realtime';
import Weekly from './pages/dashboard/weekly/weekly';
import Home from './pages/home/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Home />} />
          <Route path="Realtime" element={<Realtime />} />
          <Route path="Weekly" element={<Weekly />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
