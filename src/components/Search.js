import React from 'react';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Header from './Header';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      input: '',
      button: true,
      data: [],
    };
    this.habilit = this.habilit.bind(this);
    this.user = this.user.bind(this);
  }

  habilit(event) {
    const { value } = event.target;
    if (value.length > 1) {
      this.setState({
        button: false,
        nome: value,
        input: value,
      });
    } else {
      this.setState({
        button: true,
        input: value,
      });
    }
  }

  user(event) {
    event.preventDefault();
    const { nome } = this.state;
    this.setState(() => ({
    }), async () => {
      const album = await searchAlbumsAPI(nome);
      this.setState({
        data: album,
        input: '',
      });
    });
  }

  render() {
    const { button, nome, data, input } = this.state;
    return (
      <div>
        {' '}
        <Header />
        <form data-testid="page-search" className="centraliza">
          <input
            type="text"
            data-testid="search-artist-input"
            onChange={ this.habilit }
            value={ input }
          />
          <button
            type="submit"
            data-testid="search-artist-button"
            disabled={ button }
            onClick={ this.user }
          >
            Pesquisar
          </button>
          <form>
            {
              (!button)
                ? <h1>{`Resultado de álbuns de:  ${nome}`}</h1>
                : <p />
            }
            <div className="dividi">

              {
                data.map((element) => (
                  <div key={ element.artistId } className="album">
                    <Link
                      to={ `/album/${element.collectionId}` }
                      data-testid={ `link-to-album-${element.collectionId}` }
                    >
                      <p>{element.artistName}</p>
                      <p>{element.artistId}</p>
                      <p>{element.collectionId}</p>
                      <p>{element.collectionName}</p>
                      <p>{element.collectionPrice}</p>
                      <img src={ element.artworkUrl100 } alt={ element.artistName } />
                      <p>{element.releaseDate}</p>
                      <p>{element.trackCount}</p>
                    </Link>
                  </div>

                ))
              }
            </div>
            {(!data.length)
              ? <h1>Nenhum álbum foi encontrado</h1>
              : <p />}

          </form>
        </form>
      </div>);
  }
}

export default Search;
