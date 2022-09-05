import React from 'react';
import Header from './Header';
import { getUser } from '../services/userAPI';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      foto: 'https://www.kdulima.com/static/media/node.8683d89cf78ffae3d1f7.png',
    };
  }

  componentDidMount() {
    getUser().then((user) => {
      const { name } = user;
      this.setState({
        nome: name,
        foto: 'https://www.kdulima.com/static/media/node.8683d89cf78ffae3d1f7.png',
      });
    });
  }

  render() {
    const { nome, foto } = this.state;
    return (
      <div data-testid="page-profile" lassName="profile">
        <Header />
        <p>{ nome }</p>
        <img src={ foto } alt="foto" className="foto" />
      </div>);
  }
}

export default Profile;
