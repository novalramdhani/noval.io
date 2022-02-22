import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Layout from "./components/Layout";

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);