import PropTypes from 'prop-types';
import React from 'react';
import { getFavoriteSongs, addSong, removeSong } from '../services/favoriteSongsAPI';
import Carregando from './Carregando';

class Check extends React.Component {
  constructor() {
    super();
    this.state = {
      favo: false,
      loading: false,
    };
  }

  componentDidMount() {
    this.favorito();
  }

  favorito = async () => {
    const { element } = this.props;
    const Songs = await getFavoriteSongs();
    const favo = Songs
      ? Songs.some((track) => track.trackId === element.trackId)
      : false;
    this.setState({ favo });
    return favo;
  }

  favOn = async (favo) => {
    const { element } = this.props;
    const toggle = favo ? removeSong : addSong;
    this.setState({ loading: true });
    await toggle(element);
    this.setState({ loading: false, favo: !favo });
  }

  render() {
    const { element } = this.props;
    const { favo, loading } = this.state;

    return (
      loading
        ? <Carregando />
        : (
          <label
            htmlFor={ `favorite-checkbox-${element.trackId}` }
            data-testid={ `checkbox-music-${element.trackId}` }
            className="vermelho"
          >
            Favorita
            <input
              type="checkbox"
              name="favorite"
              id={ `favorite-checkbox-${element.trackId}` }
              checked={ favo }
              onChange={ () => {
                this.favOn(favo);
              } }
            />
          </label>));
  }
}

Check.propTypes = {
  element: PropTypes.shape({
    trackId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    trackName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default Check;
