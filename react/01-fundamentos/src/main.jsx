import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App.jsx'

/*
  root é o elemento raiz da nosso applicacao
  O react vai criar todo o html / css / js dentro da div root

  Abaixo temos a rederização do componente `App` na tela
  A rederização sempre vai ocorrer atraves do javascrit
*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
