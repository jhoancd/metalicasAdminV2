import Layout from './Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inventario from './pages/Inventario';
import Ventas from './pages/Ventas';
import Salidas from './pages/Salidas';
import Proveedores from './pages/Proveedores';
import Informe from './pages/Informe';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/inventario' element={<Inventario />} />
        <Route path='/ventas' element={<Ventas />} />
        <Route path='/salidas' element={<Salidas />} />
        <Route path='/proveedores' element={<Proveedores />} />
        <Route path='/informe' element={<Informe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
