import { Post } from './post'

export function App() {
  return (
    //nao podemos repetir componentes sem ter algo envolvendo eles
    //nesse caso optamos pela div
    <div>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}
