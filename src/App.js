import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="ui menu inverted fixed">
  <a class="item">Milton</a>
  <button class="ui button primary"> criar projeto</button>
  <div class="ui icon input">
  <input type="text" placeholder="Search..." />
  <i aria-hidden="true" class="search icon"></i>
</div>
</div>
  );
}

export default App;
