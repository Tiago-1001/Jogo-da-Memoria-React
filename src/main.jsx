import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryGame } from './MemoryGame';

import './styles/global.scss'
import './styles/style.scss'

ReactDOM.render(
  <React.StrictMode>
    <MemoryGame />
  </React.StrictMode>,
  document.getElementById('root')
)
