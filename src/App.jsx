import { Header } from './components/Header';
import { Post } from './Post';

import'./styles.css'

export function App() {
  return (
    <div>
    <Header />

    <Post  
      author="Diego Fernandes" 
      content="Lorem ipsu" 
    />
    <Post  
      author="Manuel Aurelio" 
      content="Lorem Teste" 
    />
    <Post  
      author="Anderson Silva" 
      content="Lorem ipsu" 
    />
    </div>
  )
}




