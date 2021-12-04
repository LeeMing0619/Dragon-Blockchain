import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MoralisProvider } from 'react-moralis';

ReactDOM.render(
  <MoralisProvider appId="ymdgw0muLMW7cEiNA3eRatEjQAmdloRoObUrUemp" serverUrl="https://gwfyfk2dqlj8.usemoralis.com:2053/server">
    <App />
  </MoralisProvider>,
  document.getElementById('root')
);
