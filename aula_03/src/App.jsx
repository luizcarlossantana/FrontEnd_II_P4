

import Aluno from './components/Aluno'
import EstouConseguindo from './components/EstouConseguindo'

function App() {

  return (
    <>
      <EstouConseguindo estouConseguindo={false} />


{
  [
    {
      nome: "luiz",
    email: "luiz@gmail.com",
    curso: "TI"


  },
    {
      nome: "joao",
    email: "joao@gmail.com",
    curso: "Saude"


  },
    {
      nome: "thiago",
    email: "thiago@gmail.com",
    curso: "Ed.Fisisca"


  }
    ].map((aluno)=>
     <Aluno  nome={aluno.nome}
     curso={aluno.curso}
     email={aluno.email}/>
)
}


    </>
      )
}


export default App
