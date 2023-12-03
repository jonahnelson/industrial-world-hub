import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Shops from './Controllers/Shops/View';
import StockMarket from './Controllers/StockMarket/View';

function App() {
  return (
    <div>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Shops />} />
          <Route path="stock-market" element={<StockMarket />} />
          <Route path="*" element={<div>No</div>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
