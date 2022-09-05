import React from 'react';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import MusicCard from './MusicCard';
import Header from './Header';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      Preview: [],
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const requisicao = async () => {
      const data = await getMusics(id);
      this.setState({ Preview: data });
    };
    requisicao();
  }

  render() {
    const { Preview } = this.state;
    let collection = [];
    if (Preview.length > 0) {
      collection = [Preview[0]];
    }
    return (
      <div>
        <Header />
        <div data-testid="page-album" className="personaliza">

          <div className="album1">
            {collection.map((element) => (
              <div key={ element.artistId } className="Informacao">
                <img src={ element.artworkUrl100 } alt={ element.artistName } />
                <p data-testid="album-name">{element.collectionName}</p>
                <p data-testid="artist-name">{element.artistName}</p>
              </div>
            ))}
          </div>
          <MusicCard Preview={ Preview.slice(1) } />

        </div>
      </div>);
  }
}

Album.propTypes = {
  match: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Album;
