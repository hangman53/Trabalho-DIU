import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RegistroPesagens.css';

export default function RegistroPesagens() {
  const navigate = useNavigate();
  const [numero, setNumero] = useState('');
  const [qtdLeite, setQtdLeite] = useState('');
  const [dataPesagem, setDataPesagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    if (!numero || !dataPesagem) {
      alert("Por favor, preencha o número do animal e a data da pesagem!");
      return;
    }

    
    const dadosStorage = localStorage.getItem("pesagens");
    const listaAtual = dadosStorage ? JSON.parse(dadosStorage) : [];
    
    
    const  Formatada = dataPesagem.split('-').reverse().join('/');

    const novaPesagem = {
      id: numero.padStart(3, '0'), 
      data: Formatada,
      qtd: qtdLeite
    };

    listaAtual.push(novaPesagem);
    localStorage.setItem("pesagens", JSON.stringify(listaAtual));

    alert("Pesagem cadastrada com sucesso!");
    navigate('/pesagem');
  };

  return (
    <>
      <h1>Cadastro de pesagem de leite</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="numero">Número do Animal</label>
        <input type="number" id="numero" value={numero} onChange={(e) => setNumero(e.target.value)} />
            
        <label htmlFor="QtdLeite">Quantidade</label>
        <input type="number" id="QtdLeite" value={qtdLeite} onChange={(e) => setQtdLeite(e.target.value)} />

        <label htmlFor="DataPesagem">Data da pesagem</label>
        <input type="date" id="DataPesagem" value={dataPesagem} onChange={(e) => setDataPesagem(e.target.value)} />
        
        <section id="botoes">
          <button type="button" id="cancelar" onClick={() => navigate('/pesagem')}>Cancelar</button>
          <button type="submit" id="salvar">Salvar</button>
        </section>
      </form>
    </>
  );
}