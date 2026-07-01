import { NavLink, useNavigate } from 'react-router-dom';
// Importando as imagens da pasta assets
import homeIcon from '../assets/botao-de-inicio.png';
import vacaIcon from '../assets/vaca.png';
import leiteIcon from '../assets/leite.png';
import reprodIcon from '../assets/reproducao.png';
import remedioIcon from '../assets/remedio.png';
import logoutIcon from '../assets/saida.png';

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmar = window.confirm("Deseja realmente sair do sistema?");
    if (confirmar) {
      // Se houver dados de autenticação no localStorage, remova aqui
      // localStorage.removeItem('usuario');
      navigate('/login');
    }
  };

  return (
    <div id="BarraLateral">
      <h1>Milk Gest</h1>

      <nav>
        <ul className="menu-links">
          <li>
            <img src={homeIcon} alt="simbolo home" />
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <img src={vacaIcon} alt="simbolo animais" />
            <NavLink to="/animais">Animais</NavLink>
          </li>
          <li>
            <img src={leiteIcon} alt="simbolo pesagem" />
            <NavLink to="/pesagem-leite">Pesagem de Leite</NavLink>
          </li>
          <li>
            <img src={reprodIcon} alt="simbolo reproducao" />
            <NavLink to="/reproducao">Reprodução</NavLink>
          </li>
          <li>
            <img src={remedioIcon} alt="simbolo medicacao" />
            <NavLink to="/medicacao">Medicação</NavLink>
          </li>
        </ul>


        <ul className="menu-logout">
          <li >
            <button id="sair" onClick={handleLogout}>
              <img src={logoutIcon} alt="simbolo logout" />
              Sair
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}