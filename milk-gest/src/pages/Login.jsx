// milk-gest/src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'; 

export default function Login() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const verificarLogin = (e) => {
    e.preventDefault();
    if ((usuario === 'admin' && senha === 'admin') || (usuario === 'produtor' && senha === '1234')) {
      localStorage.setItem('usuarioLogado', usuario);
      navigate('/');
    } else {
      setErro('Usuário ou senha incorretos. Tente novamente.');
    }
  };

  return (
    <div className="login-page"> {/* NOVA DIV PARA CONTROLAR O FUNDO E O ALINHAMENTO */}
      <div className="login-container">
        <form className="login-form" onSubmit={verificarLogin}>
          <h2>Acesso ao sistema</h2>

          {erro && <div className="mensagem-erro">{erro}</div>}

          <section className="input-group">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder=""
              required
            />
          </section>

          <section className="input-group">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder=""
              required
            />
          </section>

          <button type="submit" className="btn-login">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}