import React from 'react';
import Header from './Header';

class NotFound extends React.Component {
  render() {
    return (
      <div data-testid="page-not-found">
        <Header />
        <p>NotFound</p>
      </div>);
  }
}

export default NotFound;
