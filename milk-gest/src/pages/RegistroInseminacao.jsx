import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RegistroInseminacao.css'; // Carrega os estilos específicos antigos

export default function RegistroInseminacao() {
  const navigate = useNavigate();
  
  // Estados para os campos do formulário
  const [numero, setNumero] = useState('');
  const [reprodutor, setReprodutor] = useState('');
  const [dataPesagem, setDataPesagem] = useState(''); // Mantido ID original do HTML

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!numero || !reprodutor || !dataPesagem) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    // Lógica para formatar a data (aaaa-mm-dd para dd/mm/aaaa)
    const dataFormatada = dataPesagem.split('-').reverse().join('/');
    
    // Calcula uma data prevista de parto aproximada (adicionando ~9 meses ou 283 dias para vacas)
    const dataPartoObj = new Date(dataPesagem);
    dataPartoObj.setDate(dataPartoObj.getDate() + 283);
    const dataPartoFormatada = dataPartoObj.toLocaleDateString('pt-BR');

    // Aqui você criaria o objeto para salvar no estado global ou localStorage
    console.log("Nova Inseminação:", {
      id: numero,
      reprodutor,
      dataInseminacao: dataFormatada,
      dataParto: dataPartoFormatada,
      status: "Aguardando DG"
    });

    alert("Inseminação cadastrada com sucesso!");
    navigate('/reproducao'); // Redireciona de volta para a listagem de reprodução
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