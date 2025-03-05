import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Counter from './components/Counter';

const App = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Profile name="Kelvin Kitonyo" email="kelvin@gmail.com" />
      <Counter />
    </div>
  );
};

export default App;