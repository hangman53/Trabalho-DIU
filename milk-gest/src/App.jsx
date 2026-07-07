import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/Home';
import Animais from './pages/Animais';
import Login from './pages/Login'; 
import Medicacao from './pages/Medicacao';
import PesagemLeite from './pages/PesagemLeite';
import Reproducao from './pages/Reproducao';

// --- IMPORTAÇÃO DE TODAS AS TELAS DE REGISTRO/CADASTRO ---
import RegistroAnimais from './pages/RegistroAnimais'; 
import RegistroInseminacao from './pages/RegistroInseminacao';
import RegistroMedicacao from './pages/RegistroMedicacao';
import RegistroPesagens from './pages/RegistroPesagens';

function RotaProtegida({ children }) {
  const usuarioAutenticado = localStorage.getItem('usuarioLogado');
  if (!usuarioAutenticado) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Rota Pública */}
        <Route path="/login" element={<Login />} />

        {/* Rotas Privadas (Dentro do Layout com Menu Lateral) */}
        <Route path="/" element={
          <RotaProtegida>
            <Layout />
          </RotaProtegida>
        }>
          {/* Páginas Principais */}
          <Route index element={<Home />} />
          <Route path="animais" element={<Animais />} />
          <Route path="medicacao" element={<Medicacao />} />
          <Route path="reproducao" element={<Reproducao />} />
          <Route path="pesagem" element={<PesagemLeite />} />
          <Route path="pesagem-leite" element={<PesagemLeite />} />

          {/* --- CONFIGURAÇÃO DE TODAS AS ROTAS DE CADASTRO --- */}
          <Route path="registro-animal" element={<RegistroAnimais />} />
          <Route path="registro-medicacao" element={<RegistroMedicacao />} />
          <Route path="registro-inseminacao" element={<RegistroInseminacao />} />
          <Route path="registro-pesagem" element={<RegistroPesagens />} />
        </Route>

        {/* Captura de rotas inexistentes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}