import * as React from 'react';
import './style.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from 'Scenes/MainPage';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
        <div className="globalContainer">
          <Header />
          <Route exact={true} path="/" component={MainPage} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
