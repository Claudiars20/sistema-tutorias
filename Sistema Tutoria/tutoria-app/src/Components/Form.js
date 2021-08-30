import React from 'react';

const Form = ({fichatutoria, setFichaTutoria}) => {

    const handleChange = e => {
        setFichaTutoria({
            ...fichatutoria,
            [e.target.name]: e.target.value
        })
    }

    let{IdFichaTutoria, IdAsignacion, CelularReferenciaTutorando, PersonaReferenciaTutorando} = fichatutoria

    const handleSubmit = () => {
        //validación de los datos
        if (IdFichaTutoria === '' || IdAsignacion === '' || CelularReferenciaTutorando === '' || PersonaReferenciaTutorando === '') {
            alert('Todos los campos son obligatorios')
            return
        }

        //consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(fichatutoria)
        }
        fetch('http://localhost:8000/api', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de libro
        setFichaTutoria({
            IdFichaTutoria: '',
            IdAsignacion: '',
            CelularReferenciaTutorando: '',
            PersonaReferenciaTutorando: '',
        })
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="IdFichaTutoria" className="form-label">ID FICHA TUTORIA</label>
                <input value={IdFichaTutoria} name="IdFichaTutoria" onChange={handleChange} type="text" id="IdFichaTutoria" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="IdAsignacion" className="form-label">ID ASIGNACION</label>
                <input value={IdAsignacion} name="IdAsignacion" onChange={handleChange} type="text" id="IdAsignacion" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="CelularReferencia" className="form-label">CELULAR REFERENCIA</label>
                <input value={CelularReferenciaTutorando} name="CelularReferenciaTutorando" onChange={handleChange} type="text" id="CelularReferencia" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="PersonaReferencia" className="form-label">PERSONA REFERENCIA</label>
                <input value={PersonaReferenciaTutorando}  name="PersonaReferenciaTutorando" onChange={handleChange} type="text" id="PersonaReferencia" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}
 
export default Form;