import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Main.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Painel de Controle - Milk Gest 🐄</h1>
      <p style={{ color: '#666', marginBottom: '30px' }}>
        Bem-vindo ao sistema de gerenciamento da sua produção leiteira.
      </p>

      {/* Cartões de Acesso Rápido (Substitui o espaço em branco) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        <div style={cardStyle} onClick={() => navigate('/animais')}>
          <h3>Animais</h3>
          <p>Gerencie o rebanho e status de lactação.</p>
        </div>
        <div style={cardStyle} onClick={() => navigate('/pesagem')}>
          <h3>Pesagem de Leite</h3>
          <p>Controle a produção diária de leite.</p>
        </div>
        <div style={cardStyle} onClick={() => navigate('/reproducao')}>
          <h3>Reprodução</h3>
          <p>Histórico de inseminações e partos.</p>
        </div>
        <div style={cardStyle} onClick={() => navigate('/medicacao')}>
          <h3>Medicação</h3>
          <p>Controle sanitário e períodos de carência.</p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: '#ffffff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  cursor: 'pointer',
  transition: 'transform 0.2s',
  borderLeft: '5px solid #2c3e50'
};