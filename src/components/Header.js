import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Carregando from './Carregando';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      loading: true,
      foto: 'https://www.kdulima.com/static/media/node.8683d89cf78ffae3d1f7.png',
    };
  }

  componentDidMount() {
    getUser().then((user) => {
      const { name } = user;
      this.setState({
        nome: name,
        loading: false,
        foto: 'https://www.kdulima.com/static/media/node.8683d89cf78ffae3d1f7.png',
        ab: 'header-user-name',
      });
    });
  }

  render() {
    const { nome, loading, foto, ab } = this.state;
    return (
      <header data-testid="header-component" className="cabecalho linha">
        <Link to="/search" data-testid="link-to-search">Pesquisa</Link>
        <Link to="/favorites" data-testid="link-to-favorites">Favoritas</Link>
        <Link to="/profile" data-testid="link-to-profile">Perfil</Link>
        <div>
          {
            (loading)
              ? <Carregando className="centraliza" />
              : (
                <div className="cabecalho">
                  <h1 data-testid={ ab } className="branco">{nome}</h1>
                  <img src={ foto } alt="foto" className="foto" />
                </div>
              )
          }
        </div>

      </header>);
  }
}

export default Header;
