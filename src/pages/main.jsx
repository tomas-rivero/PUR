import React from 'react'
import ReactDOM from 'react-dom/client'
import ScrollToTop from "../components/ScrollToTop";
import { App } from '../'
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>

  </React.StrictMode>
)
