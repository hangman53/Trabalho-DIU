import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Reproducao.css';

const REPRODUCAO_MOCK = [
  { id: "101", reprodutor: "Touro Brutus", dataInseminacao: "10/01/2026", dataParto: "20/10/2026", status: "Confirmado" },
  { id: "102", reprodutor: "Apolo Silver", dataInseminacao: "15/01/2026", dataParto: "25/10/2026", status: "Aguardando DG" },
  { id: "103", reprodutor: "Titan Rex", dataInseminacao: "22/01/2026", dataParto: "01/11/2026", status: "Confirmado" },
  { id: "104", reprodutor: "Touro Brutus", dataInseminacao: "05/02/2026", dataParto: "15/11/2026", status: "Vazia (Re-inseminar)" },
  { id: "105", reprodutor: "Mestre Ouro", dataInseminacao: "12/02/2026", dataParto: "22/11/2026", status: "Confirmado" }
];

const coresStatus = {
  "Confirmado": "#2ecc71",       // Verde
  "Aguardando DG": "#f1c40f",    // Amarelo
  "Vazia (Re-inseminar)": "#e74c3c" // Vermelho
};

export default function Reproducao() {
  const navigate = useNavigate();
  const [registros, setRegistros] = useState(() => {
    const dadosSalvos = localStorage.getItem("registrosReproducao");
    return dadosSalvos ? JSON.parse(dadosSalvos) : REPRODUCAO_MOCK;
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [registroEditando, setRegistroEditando] = useState({ id: '', status: '' });

  const abrirEditar = (reg) => {
    setRegistroEditando({ id: reg.id, status: reg.status });
    setIsModalOpen(true);
  };

  const salvarAlteracoes = () => {
    const atualizados = registros.map(r => r.id === registroEditando.id ? { ...r, status: registroEditando.status } : r);
    setRegistros(atualizados);
    localStorage.setItem("registrosReproducao", JSON.stringify(atualizados));
    setIsModalOpen(false);
  };

  const excluirRegistro = (id) => {
    const confirmar = window.confirm(`Tem certeza que deseja excluir o registro Nº ${id}?`);

    if (confirmar) {

      const listaAtualizada = registros.filter(r => r.id !== id);
      setRegistros(listaAtualizada);
      localStorage.setItem("registrosReproducao", JSON.stringify(listaAtualizada));
      alert(`Registro Nº ${id} excluído com sucesso!`);
    }
  };

  return (
    <>
      <h1>Reprodução</h1>
      <section className="RegistroAnimal">
        <button id="botao-cadastro" onClick={() => navigate('/registro-inseminacao')}>
          Cadastrar Nova Inseminação
        </button>
      </section>

      <table id="tabela-animais">
        <thead>
          <tr>
            <th>Número do animal</th>
            <th>Nome do reprodutor</th>
            <th>Data da inseminção</th>
            <th>Data prevista do parto</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {registros.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.reprodutor}</td>
              <td>{r.dataInseminacao}</td>
              <td>{r.dataParto}</td>
              <td>
                <span
                  className="status"
                  style={{
                    backgroundColor: coresStatus[r.status] || '#ccc', // Cor padrão cinza se não achar o status
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontWeight: 'bold',
                    display: 'inline-block'
                  }}
                >
                  {r.status}
                </span>
              </td>
              <td>
                <button className="editar" onClick={() => abrirEditar(r)}>Editar</button>
                <button className="excluir" onClick={() => excluirRegistro(r.id)}>Excluir</button>
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
            <input
              type="text"
              value={registroEditando.status}
              onChange={(e) => setRegistroEditando({ ...registroEditando, status: e.target.value })}
              placeholder="Status"
            />
            <section id="botoes-modal">
              <button id="salvar" onClick={salvarAlteracoes} style={{ fontFamily: 'Roboto, sans-serif' }}>Salvar Alterações</button>
              <button id="cancelar" onClick={() => setIsModalOpen(false)} >Cancelar</button>
            </section>
          </div>
        </>
      )}
    </>
  );
}