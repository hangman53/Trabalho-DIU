import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RegistroMedicacao.css'; // Carrega os estilos específicos antigos

export default function RegistroMedicacao() {
  const navigate = useNavigate();

  // Estados para os campos do formulário
  const [numero, setNumero] = useState('');
  const [medicacao, setMedicacao] = useState('');
  const [dataAplicacao, setDataAplicacao] = useState('');
  const [carencia, setCarencia] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!numero || !medicacao || !dataAplicacao || !carencia) {
      alert("Por favor, preencha todos os campos do formulário!");
      return;
    }

    // Formata a data de (aaaa-mm-dd) para (dd/mm/aaaa)
    const dataFormatada = dataAplicacao.split('-').reverse().join('/');

    // Estrutura pronta para salvar
    console.log("Nova Medicação:", {
      id: numero,
      medicamento: medicacao,
      data: dataFormatada,
      carencia: carencia
    });

    alert("Medicação registrada com sucesso!");
    navigate('/medicacao'); // Redireciona de volta para a listagem de medicações
  };

  return (
    <>
      <h1>Cadastro de medicação</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="numero">Número do Animal</label>
        <input 
          type="number" 
          id="numero" 
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
            
        <label htmlFor="medicacao">Medicação</label>
        <input 
          type="text" 
          id="medicacao" 
          value={medicacao}
          onChange={(e) => setMedicacao(e.target.value)}
        />

        <label htmlFor="DataAplicacao">Data da aplicação</label>
        <input 
          type="date" 
          id="DataAplicacao" 
          value={dataAplicacao}
          onChange={(e) => setDataAplicacao(e.target.value)}
        />

        <label htmlFor="carencia">Carência</label>
        <input 
          type="text" 
          id="carencia" 
          value={carencia}
          onChange={(e) => setCarencia(e.target.value)}
        />

        <section id="botoes">
          <button type="button" id="cancelar" onClick={() => navigate('/medicacao')}>
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