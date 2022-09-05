import React from 'react';
import PropTypes from 'prop-types';
import Check from './Check';

class MusicCard extends React.Component {
  render() {
    const { Preview } = this.props;

    return (
      <div className="album1">
        {Preview.map((element) => (
          <div key={ element.trackId } className="album2">
            <p className="branco">{element.trackName}</p>
            <div className="checkMusic">
              <audio
                data-testid="audio-component"
                src={ element.previewUrl }
                controls
              >
                <track kind="captions" className="vermelho" />
                O seu navegador não suporta o elemento audio.
              </audio>
              <Check element={ element } />
            </div>
          </div>
        ))}
      </div>);
  }
}
MusicCard.propTypes = {
  Preview: PropTypes.arrayOf.isRequired,
};

export default MusicCard;
