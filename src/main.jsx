import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import store from "./redux/store";
import { Provider } from "react-redux";
import "react-bootstrap-typeahead/css/Typeahead.css";

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </Provider>,
)
