import {useState} from 'react'
import UserForm from './components/UserForm'
import Card from './components/Card'
import Container from './components/Container'

function App() {
  const [usuarios, setUsuario] = useState([])

  const submit = usuario => {
    setUsuario([
      ...usuarios,
      usuario,
    ])
  }

  return (
    <div style={{marginTop: '15%'}}>
      <Container>
        <Card>
          <div style={{padding: 20}}>
            <UserForm submit={submit}/>
          </div>
        </Card>
        <Card>
          <ul>
            {usuarios.map(usuario =>
              <li key={usuario.mail}>{usuario.name} {usuario.apellido}: {usuario.email}</li>
              )}
          </ul>
        </Card>
      </Container>
    </div>
  )
}

export default App
