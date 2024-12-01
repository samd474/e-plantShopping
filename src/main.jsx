import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
import ProductList from './ProductList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Provider store={store}>
        <App />
      </Provider>
      <ProductList />
    </>
  </React.StrictMode>
)
