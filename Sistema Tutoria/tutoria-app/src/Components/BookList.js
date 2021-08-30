import React from 'react';

const BookList = ({fichatutoria, setFichaTutoria, tfichatutoria, setListUpdated}) => {


    const handleDelete = IdFichaTutoria => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:8000/api/' + IdFichaTutoria, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListUpdated(true)
    }

    let{IdAsignacion, CelularReferenciaTutorando, PersonaReferenciaTutorando} = fichatutoria

    const handleUpdate = IdFichaTutoria => {
        //validación de los datos
        if (IdFichaTutoria === '' || IdAsignacion === '' || CelularReferenciaTutorando === '' || PersonaReferenciaTutorando === '') {
            alert('Todos los campos son obligatorios')
            return
        }

        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(fichatutoria)
        }
        fetch('http://localhost:8000/api/' + IdFichaTutoria, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de libro
        setFichaTutoria({
            IdFichaTutoria: '',
            IdAsignacion: '',
            CelularReferenciaTutorando: '',
            PersonaReferenciaTutorando: '',
        })

        setListUpdated(true)
    }


    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th>ID FICHA TUTORIA</th>
                    <th>ID ASIGNACION</th>
                    <th>CELULAR REFERENCIA</th>
                    <th>PERSONA REFERENCIA</th>
                </tr>
            </thead>
            <tbody>
                {tfichatutoria.map(fichatutoria => (
                    <tr key={fichatutoria.IdFichaTutoria}>
                        <td>{fichatutoria.IdFichaTutoria}</td>
                        <td>{fichatutoria.IdAsignacion}</td>
                        <td>{fichatutoria.CelularReferenciaTutorando}</td>
                        <td>{fichatutoria.PersonaReferenciaTutorando}</td>
                        <td>
                            <div className="mb-3">
                                <button onClick={() => handleDelete(fichatutoria.IdFichaTutoria)} className="btn btn-danger">Delete</button>
                            </div>
                            <div className="mb-3">
                                <button onClick={() => handleUpdate(fichatutoria.IdFichaTutoria)} className="btn btn-dark">Update</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
 
export default BookList;