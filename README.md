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

Los módulos requeridos y sugeridos para ejecutar este proyecto se listan a continuación.


#### Módulos requeridos

```bash
  npm install express express-myconnection mysql 
```

### Módulos de desarrollo

```bash
  npm i nodemon --save-dev
    
```
## Autor

- [@CoipoNorte](https://www.github.com/coiponorte)
