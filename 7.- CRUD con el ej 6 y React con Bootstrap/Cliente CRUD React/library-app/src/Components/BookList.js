import React from 'react';

const BookList = ({book, setBook, books, setListUpdated}) => {


    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListUpdated(true)
    }

    let{titulo, autor, edicion} = book
    const handleUpdate = id => {
        edicion = parseInt(edicion, 10)
        //validación de los datos
        if (titulo === '' || autor === '' || edicion <= 0 ) {
            alert('Todos los campos son obligatorios')
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(book)
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de libro
        setBook({
            titulo: '',
            autor: '',
            edicion: 0
        })

        setListUpdated(true)
    }


    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Titulo</th>
                    <th>Autor</th>
                    <th>Edicion</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {books.map(book => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.titulo}</td>
                        <td>{book.autor}</td>
                        <td>{book.edicion}</td>
                        <td>
                                
                                <div className="mb-2">
                                    <button onClick={() => handleUpdate(book.id)} className="btn btn-warning">Actualizar</button>
                                </div>

                                <div>
                                    <button onClick={() => handleDelete(book.id)} className="btn btn-danger">Eliminar</button>
                                </div>
                                
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
 
export default BookList;