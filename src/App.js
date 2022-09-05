import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Search from './components/Search';
import Album from './components/Album';
import Favorites from './components/Favorites';
import ProfileEdit from './components/ProfileEdit';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import { createUser } from './services/userAPI';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      login: false,
      nome: '',
      button: false,
    };
    this.habilit = this.habilit.bind(this);
    this.user = this.user.bind(this);
  }

  habilit(event) {
    const num = 2;
    const { value } = event.target;
    if (value.length > num) {
      this.setState({
        button: false,
        nome: value,
      });
    } else {
      this.setState({
        button: true,
        nome: '',
      });
    }
  }

  user(event) {
    event.preventDefault();
    const { nome } = this.state;
    this.setState(() => ({
      loading: true,
    }), () => fetch(createUser({ name: nome }))
      .then(() => this.setState({ login: true, loading: false })));
  }

  render() {
    const { login } = this.state;

    return (
      <div className="pricipal">

        <Switch>
          <Route exact path="/">
            {
              (login)
                ? <Redirect to="/search" />
                : <Login { ...this.state } habilit={ this.habilit } user={ this.user } />
            }
          </Route>
          <Route exact path="/" component={ Login } />
          <Route path="/search" component={ Search } />
          <Route path="/album/:id" component={ Album } />
          <Route path="/favorites" component={ Favorites } />
          <Route exact path="/profile" component={ Profile } />
          <Route
            path="/profile/edit"
            component={ ProfileEdit }
          />
          <Route path="*" component={ NotFound } />
        </Switch>
      </div>);
  }
}

export default App;
