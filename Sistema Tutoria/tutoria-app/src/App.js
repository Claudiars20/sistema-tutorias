import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './Components/Navbar'
import BookList from './Components/BookList'
import Form from './Components/Form'

function App() {

  const [fichatutoria, setFichaTutoria] = useState({
    IdFichaTutoria: '',
    IdAsignacion: '',
    CelularReferenciaTutorando: '',
    PersonaReferenciaTutorando: ''
  })
  
  const [tfichatutoria, setFichasTutoria] = useState([])

  const [listUpdated, setListUpdated] = useState(false)

  useEffect(() => {
    const getFichasTutoria = () => {
      fetch('http://localhost:8000/api')
      .then(res => res.json())
      .then(res => setFichasTutoria(res))
    }
    getFichasTutoria()
    setListUpdated(false)
  }, [listUpdated])

  return (
    <Fragment>
      <Navbar brand='Sistema Tutoria'/>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h2 style={{textAlign: 'center'}}>Listado</h2>
            <BookList fichatutoria={fichatutoria} setFichaTutoria={setFichaTutoria} tfichatutoria={tfichatutoria} setListUpdated={setListUpdated}/>
          </div>
          <div className="col-5">
            <h2 style={{textAlign: 'center'}}>Formulario</h2>
            <Form fichatutoria={fichatutoria} setFichaTutoria={setFichaTutoria}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
