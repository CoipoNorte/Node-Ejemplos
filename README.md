# Node.js

Node.js es un entorno de tiempo de ejecución de JavaScript que te permite ejecutar código JavaScript fuera del navegador, en el servidor. Es una herramienta muy popular para desarrollar aplicaciones web y se basa en el motor de JavaScript V8 de Google. Con Node.js, puedes crear aplicaciones escalables y de alta velocidad utilizando el lenguaje de programación que ya conoces «JavaScript».

## Instalación

Aquí unos pequeños pasos a seguir para instalar node.js en tu computadora :D

### Requerimientos

Primero deberás descargar e instalar Node.js

- [Node.js](https://nodejs.org/en)

Puedes consultar la versión de node con un comando dentro de una terminal.

```bash
  node -v
```

### Iniciar proyecto


Posterior a eso para iniciar tu primero proyecto con node deberás crear una carpeta nueva, de preferencia con el nombre de «miprimerpronode», seguido eso abrirás una terminal dentro de la carpeta y usarás el siguiente comando.

```bash
  npm init --yes
```


Esto generará un archivo llamado «package.json» con toda la información predeterminada de tu proyecto, puedes configurala manualmente si ocupas este otro comando al momento de comenzar el proyecto.

```bash
  npm init
```

### Verificar node en el proyecto

Para poder cerciorarte de que node está inicializado de forma correcta en el proyecto, puedes generar un archivo dentro de la carpeta llamada «index.js», en el cual escribirás la siguiente línea de código.

```bash
  console.log(Hola Amigo!);
```

Para ejecutar el proyecto simplemente deberás abrir una terminar y ejecutar el comando para correr.

```bash
  npm index.js
```
    
## Servidor Web con express

Aqui verás como generar un servidor web utilizando simplemente node y express.

### Crear proyecto

Abre una terminar en la carpeta del proyecto, y ejecuta los siguientes comandos:

```bash
  npm init --yes
```
```bash
  npm i express
```

### app.js

Genera un nuevo archivo llamado «app.js», dentro del cual deberás digitar el siguiente código.

```bash
const express = require("express");
const app = express();
const path = require('path');


app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname + "/index.html"));
});


app.listen(3000, () => {

    console.log("servidor corriendo en puerto: ", 3000);
});
```

### index.js

Genera un nuevo archivo llamado «index.html», dentro del cual deberás digitar el siguiente código.

```bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo Express</title>
</head>
<body>
    <h1>Hola Amigo!</h1>
</body>
</html>
```


Para comprobar que el servidor funciona deberás correr el código usando el siguiente comando en la terminal.

```bash
  node app.js
```

### Autorrecargar la página

Para poder autorrecargar la deberemos instalar nodemon, pero no como dependencia, solo como un módulo más dentro del proyecto.

```bash
  npm i nodemon -D 
```

Mientras se instala, modificaremos el archivo llamado «package.json». Lo que modificaremos será el apartado de «scripts», quitando el comando de «test» y agregando un comando «start»

Pasando de estar inicialmente de esta forma:

```bash
  "scripts": {

    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

A verse de esta otra manera:

```bash
  "scripts": {

    "start": "nodemon app.js"
  }
```

Para verificar que el servidor funciona deberás correr el código usando el siguiente comando en la terminal.

```bash
  npm run start
```


De esta forma, cada vez que realices cambios el servidor se recargara automáticamente.

## API REST

Los modulos requeridos y sugeridos para ejecutar este proyecto se listan a continuacion.

#### Modulos requeridos

```bash
  npm install express express-myconnection mysql 
```

### Modulos de desarrollo

```bash
  npm i nodemon --save-dev
    
```

### Lanzar API

```bash
  npm start
    
```

## MySQL

Bueno esto sera complicado de explicar, nesecitas instalar mysql en tu computadora, no estoy seguro cual de los dos instaladores de la pag debes de tener asi que te recomiendo tener ambos:

- web community
- community

Ademas requeriras un sistema administrador de base de datos, puedes usar cualquiera pero te recomiendo SQLDeveloper o MySQL Workbench

[enlace](https://drive.google.com/drive/folders/1PVqsgyZYgS4O2BkxksflxWOh-r1EIuzL?usp=sharing)

Recuerda que al momento de instalar utiliza la autentificacion antigua o LEGACY, no se porque la verdad, pere usala...

Posterior a eso trata de utilizar este esquema "library" para la base de datos local.

```bash
CREATE TABLE `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL,
  `autor` varchar(100) NOT NULL,
  `edicion` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
```

Finalmente solo faltaria usar tus credencias para hacer todo funcionar.

## Ejemplo 7 Basicamente

Se compone del ejemplo 6 que es la api rest con node utilizando una bd local con mysql y tambien de
un archivo cliente bn bonachon que es un proyecto React con css de Bootstrap, debes instalar y requerir un par de modulos, tanto el la carpeta cliente como en la del servidor pero basicamente
es solo seguir las instrucciones del CLIENTE paso a paso para que tengas todo listo en pocos minutos
♥♥♥

## Cliente CRUD React

Aqui te digo que pasos seguir para recrear de apoco y luego muy rapido el codigo :( tambien de paso que otras cositas hay que hacer para que todo te tiki taka, Debes empezar por el otro doc eso si

### Iniciar Proyecto React

Primero deberas inicializar un proyecto React

```bash
  npx create-react-app NAME
```

Luego tendras que lanzarlo

```bash
  npx create-react-app NAME
  cd NAME
  npm start 
```

### Limpiar basura qla

Elimina los siguientes archivos dentro de la carpeta "src":

- App.css
- App.test.js
- logo.svg

Ademas deja "App.js" asi...

```bash
import React from 'react';

function App() {
  return (
    
  );
}

export default App;
```

### Bootstrap

Para poder usar Bootstrap podemos dirigirnos a la carpeta "public", dentro de index.html, antes de la etiqueta TITLE pegaremos el enlace de CSS de Bootstrap. Ahora, para utilizar el JS haremos lo mismo pero solo que la etiqueta debe ir hasta abajo del BODY.

[Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

### Barra de navegacion

Agregamos una carpeta llamada "components" dentro de "src", y dentro de esta nueva carpeta agrega un archivo JS llamado "Navbar.js" y le metes lo siguiente

```bash
import React from 'react';

const Navbar = ({brand}) => {
    return ( 
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a href="#!" className="navbar-brand">{brand}</a>
            </div>
        </nav>
    );
}
 
export default Navbar;
```

Si te preguntas porque className en vez de solo class pues es culpa de React

Ahora dentro de la misma carpeta "components" agrega otros dos JS, llamados "BookList.js" y "Form.js", y les meteras lo siguiente asi como mucho texto

#### BookList
```bash
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
                    <th>Title</th>
                    <th>Author</th>
                    <th>Edition</th>
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
                            <div className="mb-3">
                                <button onClick={() => handleDelete(book.id)} className="btn btn-danger">Delete</button>
                            </div>
                            <div className="mb-3">
                                <button onClick={() => handleUpdate(book.id)} className="btn btn-dark">Update</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
 
export default BookList;
```

#### Form
```bash
import React from 'react';

const Form = ({book, setBook}) => {

    const handleChange = e => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    let{titulo, autor, edicion} = book

    const handleSubmit = () => {
        edicion = parseInt(edicion, 10)
        //validación de los datos
        if (titulo === '' || autor === '' || edicion <= 0 ) {
            alert('Todos los campos son obligatorios')
            return
        }

        //consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(book)
        }
        fetch('http://localhost:9000/api', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de libro
        setBook({
            titulo: '',
            autor: '',
            edicion: 0
        })
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input value={titulo} name="titulo" onChange={handleChange} type="text" id="title" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="author" className="form-label">Author</label>
                <input value={autor} name="autor" onChange={handleChange} type="text" id="author" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="edition" className="form-label">Edition</label>
                <input value={edicion}  name="edicion" onChange={handleChange} type="number" id="edition" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}
 
export default Form;
```

En este punto te preguntaras pq estoy distando todo esto, pues es para mi mismo la verdad, en una semana no recordare nada y ver el tutorial de 2 hrs es demaciado mejor me hago un texto resumen de 15 min y luego bam, llorar toda la noche por el sindrome del impostor... sigamos

Actualiza el App.js en este punto Bro 

```Bash
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
        <div className="row">
          <div className="col-7">
            <h2 style={{textAlign: 'center'}}>Book List</h2>
            <BookList book={book} setBook={setBook} books={books} setListUpdated={setListUpdated}/>
          </div>
          <div className="col-5">
            <h2 style={{textAlign: 'center'}}>Book Form</h2>
            <Form book={book} setBook={setBook}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
```

### Otro Moludo Mas

Deberemos agregar un nuevo modulo pero esta vez a la API REST :0

```Bash
npm i cors
```

Ademas debemos de requerirlo dentro del archivo server.js

```Bash
const cors = require('cors')
```

Y tambien debemos agregarlo en el middelware

```Bash
app.use(cors())
```

Ya con eso lanzamos la API y Recargamos REEACT carado!

## Algo Mas?

## Autor

- [@CoipoNorte](https://www.github.com/coiponorte)

# TODOS LOS CREDITOS DE LOS CODIGOS A MonkeyWit, SALVASTE MI ASIGNATURA ♥♥♥
