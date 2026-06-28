import { NavLink } from 'react-router-dom';
// Exemplo importando as imagens da pasta assets
import homeIcon from '../assets/botao-de-inicio.png';
import vacaIcon from '../assets/vaca.png';
import leiteIcon from '../assets/leite.png';
import reprodIcon from '../assets/reproducao.png';
import remedioIcon from '../assets/remedio.png';

export default function Sidebar() {
  return (
    <div id="BarraLateral">
      <h1>Milk Gest</h1>
      <nav>
        <ul>
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
            <NavLink to="/pesagem">Pesagem de Leite</NavLink>
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
      </nav>
    </div>
  );
}