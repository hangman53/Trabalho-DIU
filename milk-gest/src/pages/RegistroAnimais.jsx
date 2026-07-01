import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Certifica-te de que o teu CSS está nesta pasta. 
// Se não tiveres o CSS específico, podes apagar a linha abaixo temporariamente para testar.
import '../styles/RegistroAnimais.css'; 

export default function RegistroAnimais() {
  const navigate = useNavigate();
  
  // Criação dos estados para armazenar o que o utilizador digita
  const [numero, setNumero] = useState('');
  const [nomePai, setNomePai] = useState('');
  const [dataNasc, setDataNasc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validação simples
    if (!numero || !dataNasc) {
      alert("Por favor, preencha o número do animal e a data de nascimento!");
      return;
    }

    
    const dadosStorage = localStorage.getItem("listaAnimais");
    const listaAtual = dadosStorage ? JSON.parse(dadosStorage) : [];
    
    
    const  Formatada = dataNasc.split('-').reverse().join('/');

    const novoAnimal = {
      id: numero.padStart(3, '0'), 
      data: Formatada,
      status: "Ativo" // Status padrão para novos animais
    };

    listaAtual.push(novoAnimal);
    localStorage.setItem("listaAnimais", JSON.stringify(listaAtual));

    alert("Animal cadastrado com sucesso!");
    navigate('/animais'); // Redireciona de volta para a tabela de animais
  };

  return (
    <>
      <h1>Registro de Animais</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="numero">Número</label>
        <input 
          type="number" 
          id="numero" 
          value={numero} 
          onChange={(e) => setNumero(e.target.value)} 
        />
            
        <label htmlFor="NomePai">Nome do Pai</label>
        <input 
          type="text" 
          id="NomePai" 
          value={nomePai} 
          onChange={(e) => setNomePai(e.target.value)} 
        />

        <label htmlFor="DataNasc">Data de Nascimento</label>
        <input 
          type="date" 
          id="DataNasc" 
          value={dataNasc} 
          onChange={(e) => setDataNasc(e.target.value)} 
        />
        
        <section id="botoes">
          {/* Botão de cancelar usa o navigate para voltar sem submeter */}
          <button type="button" id="cancelar" onClick={() => navigate('/animais')}>
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