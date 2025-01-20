import { Header } from './components/Header'
import { Post } from './post'

import './styles.css'

export function App() {
  return (
    //nao podemos repetir componentes sem ter algo envolvendo eles
    //nesse caso optamos pela div
    <div>
      <Header />

      <Post author="Anderson Alves" content="Nosso primeiro post" />
      <Post author="Ricardo Almeida" content="Nosso segundo post" />
    </div>
  )
}
