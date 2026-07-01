// milk-gest/src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/Home';
import Animais from './pages/Animais';
import Login from './pages/Login'; 
import Medicacao from './pages/Medicacao';
import PesagemLeite from './pages/PesagemLeite';
import Reproducao from './pages/Reproducao';

// Componente que protege as rotas do sistema
function RotaProtegida({ children }) {
  const usuarioAutenticado = localStorage.getItem('usuarioLogado');
  
  // Se NÃO estiver logado, redireciona o usuário direto para a tela de login
  if (!usuarioAutenticado) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Tela de login principal */}
        <Route path="/login" element={<Login />} />

        {/* Todas as rotas abaixo agora iniciam verificando a RotaProtegida */}
        <Route path="/" element={
          <RotaProtegida>
            <Layout />
          </RotaProtegida>
        }>
          {/* Quando o usuário logar e acessar a raiz "/", ele verá a Home */}
          <Route index element={<Home />} />
          <Route path="animais" element={<Animais />} />
          <Route path="medicacao" element={<Medicacao />} />
           <Route path="reproducao" element={<Reproducao />} />
          <Route path="pesagem" element={<PesagemLeite />} />
          <Route path="pesagem-leite" element={<PesagemLeite />} />
        </Route>

        {/* Rota de captura: Se digitarem qualquer endereço inexistente, manda para a raiz */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}