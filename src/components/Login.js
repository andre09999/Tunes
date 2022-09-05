import React from 'react';
import PropTypes from 'prop-types';
import Carregando from './Carregando';

class Login extends React.Component {
  render() {
    const num = 2;
    const { loading, nome, habilit, user } = this.props;
    const buttun = nome.length < num;

    return (
      <main className="login">
        {loading
          ? <Carregando />
          : (
            <form data-testid="page-login" className="login1">
              <label htmlFor="login-name-input">
                <input
                  type="text"
                  data-testid="login-name-input"
                  placeholder="Nome"
                  className="sem"
                  onChange={ habilit }
                  id="input"
                />
              </label>
              <button
                data-testid="login-submit-button"
                type="submit"
                className="sem"
                disabled={ buttun }
                onClick={ user }
              >
                Entrar
              </button>
            </form>
          )}

      </main>);
  }
}

Login.propTypes = {
  loading: PropTypes.bool.isRequired,
  nome: PropTypes.string.isRequired,
  habilit: PropTypes.func.isRequired,
  user: PropTypes.func.isRequired,
};

export default Login;
