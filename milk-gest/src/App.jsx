import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/Home';
import Animais from './pages/Animais';
import PesagemLeite from './pages/PesagemLeite';
import Reproducao from './pages/Reproducao';
import Medicacao from './pages/Medicacao';
import RegistroAnimais from './pages/RegistroAnimais';
import RegistroPesagens from './pages/RegistroPesagens';
import RegistroInseminacao from './pages/RegistroInseminacao'; 
import RegistroMedicacao from './pages/RegistroMedicacao';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Rota Inicial */}
          <Route index element={<Home />} />
          
          {/* Rotas de Visualização */}
          <Route path="animais" element={<Animais />} />
          <Route path="pesagem" element={<PesagemLeite />} />
          <Route path="reproducao" element={<Reproducao />} />
          <Route path="medicacao" element={<Medicacao />} />

          {/* Rotas de Cadastro/Formulários */}
          <Route path="registro-animal" element={<RegistroAnimais />} />
          <Route path="registro-pesagem" element={<RegistroPesagens />} />
          <Route path="registro-reproducao" element={<RegistroInseminacao />} />
          <Route path="registro-medicacao" element={<RegistroMedicacao />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}