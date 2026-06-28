import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PesagemLeite.css';

const PESAGENS_MOCK = [
  { id: "001", qtd: "12", data: "14/03/1992" },
  { id: "002", qtd: "45", data: "22/07/1985" },
  { id: "003", qtd: "08", data: "30/11/2001" },
  { id: "004", qtd: "15", data: "05/01/1998" },
  { id: "005", qtd: "33", data: "19/09/1979" },
  { id: "006", qtd: "21", data: "12/12/1994" },
  { id: "007", qtd: "07", data: "25/04/2003" },
  { id: "008", qtd: "50", data: "08/06/1982" },
  { id: "009", qtd: "19", data: "17/02/1996" },
  { id: "010", qtd: "04", data: "29/10/1990" },
  { id: "011", qtd: "62", data: "11/05/1987" },
  { id: "012", qtd: "27", data: "03/08/2000" }
];

export default function PesagemLeite() {
  const navigate = useNavigate();
  const [pesagens, setPesagens] = useState(PESAGENS_MOCK);
  const [pagina, setPagina] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pesagemEditando, setPesagemEditando] = useState({ id: '', qtd: '', data: '' });

  const itensPorPagina = 10;
  const inicio = (pagina - 1) * itensPorPagina;
  const fim = inicio + itensPorPagina;
  const pesagensExibidas = pesagens.slice(inicio, fim);

  const abrirEditar = (pesagem) => {
    setPesagemEditando(pesagem);
    setIsModalOpen(true);
  };

  const salvarAlteracoes = () => {
    const atualizadas = pesagens.map(p => p.id === pesagemEditando.id ? pesagemEditando : p);
    setPesagens(atualizadas);
    setIsModalOpen(false);
    alert('Salvar as alterações para o animal: ' + pesagemEditando.id);
  };

  return (
    <>
      <h1>Pesagens de Leite</h1>
      <section className="RegistroAnimal">
        <button id="botao-cadastro" onClick={() => navigate('/registro-pesagem')}>
          Cadastrar Nova Pesagem
        </button>
      </section>

      <table id="tabela-animais">
        <thead>
          <tr>
            <th>Número do animal</th>
            <th>Quantidade(L)</th>
            <th>Data da Pesagem</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {pesagensExibidas.map((p, index) => (
            <tr key={index}>
              <td>{p.id}</td>
              <td>{p.qtd}</td>
              <td>{p.data}</td>
              <td>
                <button className="editar" onClick={() => abrirEditar(p)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <section className="paginacao">
        <button onClick={() => setPagina(1)} className={pagina === 1 ? 'ativo' : ''}>1</button>
        <button onClick={() => setPagina(2)} className={pagina === 2 ? 'ativo' : ''}>2</button>
      </section>

      {isModalOpen && (
        <>
          <div className="overlay" style={{ display: 'block' }} onClick={() => setIsModalOpen(false)}></div>
          <div id="modalEditar" style={{ display: 'block' }}>
            <h2>Editar Registro</h2>
            <input type="text" value={pesagemEditando.id} disabled placeholder="Número" />
            <input 
              type="number" 
              value={pesagemEditando.qtd} 
              onChange={(e) => setPesagemEditando({...pesagemEditando, qtd: e.target.value})} 
              placeholder="Quantidade" 
            />
            <input 
              type="text" 
              value={pesagemEditando.data} 
              onChange={(e) => setPesagemEditando({...pesagemEditando, data: e.target.value})} 
              placeholder="Data" 
            />
            <button onClick={salvarAlteracoes}>Salvar Alterações</button>
            <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
          </div>
        </>
      )}
    </>
  );
}