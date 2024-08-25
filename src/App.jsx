import './App.css';
import Clients from './assets/Pages/Clients/Clients';
import DeliveryMans from './assets/Pages/DeliveryMans/DeliveryMans';
import Orders from './assets/Pages/Orders/Orders';
import Products from './assets/Pages/Products/Products';
import Users from './assets/Pages/Users/Users';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/deliverymans" element={<DeliveryMans />} />
      </Routes>
    </div>
  );
}

export default App;
