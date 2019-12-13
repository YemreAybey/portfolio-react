import React, { Component } from 'react';
import ProjectList from '../containers/ProjectList';
import Info from './Info';
import ArticleList from '../containers/ArticleList';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <>
        <Info />
        <main className="main-content">
          <ProjectList />
          <ArticleList />
          <Footer />
        </main>
      </>
    );
  }
}

export default App;
