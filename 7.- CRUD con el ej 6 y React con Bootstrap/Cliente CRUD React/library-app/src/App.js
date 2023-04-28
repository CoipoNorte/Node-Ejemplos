import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './Components/Navbar'
import BookList from './Components/BookList'
import Form from './Components/Form'

function App() {

    const [book, setBook] = useState({
        titulo: '',
        autor: '',
        edicion: 0
    })

    const [books, setBooks] = useState([])

    const [listUpdated, setListUpdated] = useState(false)

    useEffect(() => {
        const getBooks = () => {
            fetch('http://localhost:9000/api')
            .then(res => res.json())
            .then(res => setBooks(res))
        }
        getBooks()
        setListUpdated(false)
    }, [listUpdated])

    return (
        <Fragment>
            <Navbar brand='Library App'/>
      
            <div className="container">
                
                <div>
                    <div class="row g-5">
          
                        <div className="py-5 text-center">
                            <h2>Control de preguntas</h2>
                            <p className="lead">Esta paguina web fue diseñada para poder Agregar, Eliminar y Actualizar las preguntas del bot de WhatsApp Pand-ai el cual fue desarrollado por el grupo Panda Proyect que no tiene nada que ver con salvar ni preservar a los pandas del mundo.</p>
                        </div>

                        <div className="col-md-7 col-lg-8">
                            <h2 className="mb-3 text-center">Book List</h2>
                            <BookList book={book} setBook={setBook} books={books} setListUpdated={setListUpdated}/> 
                        </div>

                        <div class="col-md-5 col-lg-4 order-md-last">
                            <h2 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-primary">Book Form</span>
                            </h2>
                            <Form book={book} setBook={setBook}/>  
                        </div>
                        

                    </div>
                </div>

                <footer class="my-5 pt-5 text-muted text-center text-small">
                    <p class="mb-1">&copy; 2023 Panda Project</p>
                    <ul class="list-inline">
                        <li class="list-inline-item"><a href="#">Privacy</a></li>
                        <li class="list-inline-item"><a href="#">Terms</a></li>
                        <li class="list-inline-item"><a href="#">Support</a></li>
                    </ul>
                </footer>

            </div>

        </Fragment>
    );
}

export default App;