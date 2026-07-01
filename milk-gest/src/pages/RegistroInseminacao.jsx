import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RegistroInseminacao.css';

export default function RegistroInseminacao() {
  const navigate = useNavigate();


  const [numero, setNumero] = useState('');
  const [reprodutor, setReprodutor] = useState('');
  const [dataPesagem, setDataPesagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!numero || !reprodutor || !dataPesagem) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    const dataFormatada = dataPesagem.split('-').reverse().join('/');

    const [ano, mes, dia] = dataPesagem.split('-');
    const dataPartoObj = new Date(Date.UTC(ano, mes - 1, dia));
    dataPartoObj.setUTCDate(dataPartoObj.getUTCDate() + 283);

    const dataPartoFormatada = dataPartoObj.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
    const novaInseminacao = {
      id: numero,
      reprodutor,
      dataInseminacao: dataFormatada,
      dataParto: dataPartoFormatada,
      status: "Aguardando DG"
    };

    // CORREÇÃO DA CHAVE: Alterado de "listaInseminacoes" para "registrosReproducao"
    const dadosStorage = localStorage.getItem("registrosReproducao");
    const listaAtual = dadosStorage ? JSON.parse(dadosStorage) : [];

    listaAtual.push(novaInseminacao);
    localStorage.setItem("registrosReproducao", JSON.stringify(listaAtual));

    alert("Inseminação cadastrada com sucesso!");
    navigate('/reproducao');
  };

  return (
    <>
      <h1>Cadastro de inseminação</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="numero">Número do Animal</label>
        <input
          type="number"
          id="numero"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />

        <label htmlFor="reprodutor">Reprodutor</label>
        <input
          type="text"
          id="reprodutor"
          value={reprodutor}
          onChange={(e) => setReprodutor(e.target.value)}
        />

        <label htmlFor="DataPesagem">Data da pesagem</label>
        <input
          type="date"
          id="DataPesagem"
          value={dataPesagem}
          onChange={(e) => setDataPesagem(e.target.value)}
        />

        <section id="botoes">
          <button type="button" id="cancelar" onClick={() => navigate('/reproducao')}>
            Cancelar
          </button>
          <button type="submit" id="salvar">
            Salvar
          </button>
        </section>
      </form>
    </>
  );
}