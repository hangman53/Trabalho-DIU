import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Medicacao.css';

const MEDICACAO_MOCK = [
  { id: "03", medicamento: "Ivermectina", data: "10/05/2026", carencia: "28 dias" },
  { id: "17", medicamento: "Penicilina", data: "11/05/2026", carencia: "07 dias" },
  { id: "05", medicamento: "Vitamina ADE", data: "12/05/2026", carencia: "Isento" }
];

export default function Medicacao() {
  const navigate = useNavigate();
  const [medicacoes, setMedicacoes] = useState(MEDICACAO_MOCK);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [medEditando, setMedEditando] = useState({ id: '', medicamento: '', data: '', carencia: '' });

  const abrirEditar = (med) => {
    setMedEditando(med);
    setIsModalOpen(true);
  };

  const salvarAlteracoes = () => {
    const atualizadas = medicacoes.map(m => m.id === medEditando.id ? medEditando : m);
    setMedicacoes(atualizadas);
    setIsModalOpen(false);
  };

  return (
    <>
      <h1>Medicação</h1>
      <section className="RegistroMedicacao">
        <button id="botao-cadastro" onClick={() => navigate('/registro-medicacao')}>
          Cadastrar Nova Medicação
        </button>
      </section>

      <table id="tabela-animais">
        <thead>
          <tr>
            <th>Número do animal</th>
            <th>Medicação</th>
            <th>Data de aplicação</th>
            <th>Carência</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {medicacoes.map((m, idx) => (
            <tr key={idx}>
              <td>{m.id}</td>
              <td>{m.medicamento}</td>
              <td>{m.data}</td>
              <td>{m.carencia}</td>
              <td>
                <button className="editar" onClick={() => abrirEditar(m)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <>
          <div className="overlay" style={{ display: 'block' }} onClick={() => setIsModalOpen(false)}></div>
          <div id="modalEditar" style={{ display: 'block' }}>
            <h2>Editar Registro</h2>
            <input type="text" value={medEditando.id} disabled />
            <input 
              type="text" 
              value={medEditando.medicamento} 
              onChange={(e) => setMedEditando({...medEditando, medicamento: e.target.value})} 
              placeholder="Medicação" 
            />
            <input 
              type="text" 
              value={medEditando.data} 
              onChange={(e) => setMedEditando({...medEditando, data: e.target.value})} 
              placeholder="Data" 
            />
            <input 
              type="text" 
              value={medEditando.carencia} 
              onChange={(e) => setMedEditando({...medEditando, carencia: e.target.value})} 
              placeholder="Carência" 
            />
            <button id="salvar" onClick={salvarAlteracoes}>Salvar Alterações</button>
            <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
          </div>
        </>
      )}
    </>
  );
}