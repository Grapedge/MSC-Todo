import React from 'react';
import Todo from '../containers/Todo';
import Header from '../layouts/Header';
import Content from '../layouts/Content';
import Footer from '../layouts/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Content>
        <Todo />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
