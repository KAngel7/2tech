import * as React from 'react';
import './style.css';
import { RouteComponentProps } from 'react-router-dom';

class HomePage extends React.Component<RouteComponentProps<{}>, {}> {
  render() {
    return (
      <div className="home-page">
        {}
      </div>
    );
  }
}

export default HomePage;
