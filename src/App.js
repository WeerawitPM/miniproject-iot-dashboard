import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/sidebar';
import Realtime from './pages/dashboard/realtime/realtime';
import Weekly from './pages/dashboard/weekly/weekly';
import Home from './pages/home/home';
import ReportDay from './pages/report/day/reportday';
import Monthly from './pages/dashboard/monthly/monthly';
import Yearly from './pages/dashboard/yearly/yearly';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Home />} />
          <Route path="Realtime" element={<Realtime />} />
          <Route path="Weekly" element={<Weekly />} />
          <Route path="Monthly" element={<Monthly />} />
          <Route path="Yearly" element={<Yearly />} />
          <Route path="ReportDay" element={<ReportDay />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
