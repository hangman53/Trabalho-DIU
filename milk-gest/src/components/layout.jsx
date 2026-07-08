import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';

export default function Layout() {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh' }}>
      {/* Menu Lateral Fixo */}
      <Sidebar />
      
      {/* Área onde o conteúdo das páginas vai aparecer */}
      <main style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        <Outlet /> 
      </main>
    </div>
  );
}