import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Animais.css'; // Estilos específicos como .status-badge


const ANIMAIS_MOCK = [
  { "id": "001", "data": "15/03/2021", "status": "Lactação" },
  { "id": "002", "data": "10/05/2020", "status": "Reprodutor" },
  { "id": "003", "data": "22/08/2022", "status": "Prenha" },
  { "id": "004", "data": "05/01/2023", "status": "Recria" }
];

export default function Animais() {
  const navigate = useNavigate();
  const [animais, setAnimais] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animalEditando, setAnimalEditando] = useState({ id: '', data: '', status: '' });


  useEffect(() => {
    const dadosStorage = localStorage.getItem("listaAnimais");
    if (dadosStorage) {
      setAnimais(JSON.parse(dadosStorage));
    } else {
      localStorage.setItem("listaAnimais", JSON.stringify(ANIMAIS_MOCK));
      setAnimais(ANIMAIS_MOCK);
    }
  }, []);


  const obterClasseStatus = (status) => {
    const mapeamentoCores = {
      "Lactação": "status-lactacao",
      "Reprodutor": "status-reprodutor",
      "Prenha": "status-prenha",
      "Recria": "status-recria"
    };
    return mapeamentoCores[status] || "status-padrao";
  };

  const abrirEditar = (animal) => {
    setAnimalEditando(animal);
    setIsModalOpen(true);
  };

  const salvarAlteracoes = () => {
    const listaAtualizada = animais.map(a => a.id === animalEditando.id ? animalEditando : a);
    setAnimais(listaAtualizada);
    localStorage.setItem("listaAnimais", JSON.stringify(listaAtualizada));
    setIsModalOpen(false);
  };

  const excluirAnimal = (id) => {

    const confirmar = window.confirm(`Tem certeza que deseja excluir o animal Nº ${id}?`);

    if (confirmar) {

      const listaAtualizada = animais.filter(animal => animal.id !== id);
      setAnimais(listaAtualizada);
      localStorage.setItem("listaAnimais", JSON.stringify(listaAtualizada));
      alert(`Animal Nº ${id} excluído com sucesso!`);
    }
  };



  return (
    <>
      <h1>Animais</h1>
      <section className="RegistroAnimal">
        <button id="botao-cadastro" onClick={() => navigate('/registro-animal')}>
          Cadastrar Novo Animal
        </button>
      </section>

      <table id="tabela-animais">
        <thead>
          <tr>
            <th>Número do animal</th>
            <th>Data de Nascimento</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {animais.map((animal) => (
            <tr map={animal.id} key={animal.id}>
              <td>{animal.id}</td>
              <td>{animal.data}</td>
              <td>
                <div className={`status-badge ${obterClasseStatus(animal.status)}`}>
                  {animal.status}
                </div>
              </td>
              <td>
                <button className="editar" onClick={() => abrirEditar(animal)}>Editar</button>
                <button className="excluir" onClick={() => excluirAnimal(animal.id)}>Excluir</button>
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
              value={animalEditando.id}
              disabled
              placeholder="Número"
            />
            <input
              type="text"
              value={animalEditando.data}
              onChange={(e) => setAnimalEditando({ ...animalEditando, data: e.target.value })}
              placeholder="Data"
            />
            <input
              type="text"
              value={animalEditando.status}
              onChange={(e) => setAnimalEditando({ ...animalEditando, status: e.target.value })}
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