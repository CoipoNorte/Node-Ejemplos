
# Node.js

Node.js es un entorno de tiempo de ejecución de JavaScript que te permite ejecutar código JavaScript fuera del navegador, en el servidor. Es una herramienta muy popular para desarrollar aplicaciones web y se basa en el motor de JavaScript V8 de Google. Con Node.js, puedes crear aplicaciones escalables y de alta velocidad utilizando el lenguaje de programación que ya conoces: JavaScript.



## Instalacion

Aqui unos pequeños pasos a seguir para instalar node.js en tu computadora :D

### Instalacion

Primero deberas descargar e instalar Node.js

- [Node.js](https://nodejs.org/en)

Puedes consultar la version de node con un comando dentro de una terminal.

```bash
  node -v
```

### Iniciar proyecto

Postrior a eso para iniciar tu primero proyecto con node deberas crear una carpeta nueva, de preferencia con el nombre de "miprimerpronode", seguido eso abriras una terminal dentro de la carpeta y usaras el siguiente comando.

```bash
  npm init --yes
```

Esto generara un archivo llamada "package.json" con toda la informacion predeterminada de tu proyecto, puedes configurla manualmente si ocupas este otro comando al momento de iniciar el proyecto.

```bash
  npm init
```

### Verificar node en el proyecto

Para poder serciorarte de que node esta inicializado de forma correcta en el proyecto, puedes crear un archivo dentro de la carpeta llamado "index.js", en el cual escribiras la siguiente linea de codigo.

```bash
  console.log(Hola Amigo!);
```

Para ejecutar el proyecto simplemente deberas abrir una erminar y ejecutar el comando para correr.

```bash
  npm index.js
```
    
## Servidor Web con Express

Aqui veras como crear un servidor web utilizando simplemente node y express.

### Crear proyecto

Abre una terminar en la carpeta del proyecto, y ejecuta los siguientes comandos:

```bash
  npm init --yes
```
```bash
  npm i express
```

### app.js

Crea un nuevo archivo llamado "app.js", dentro del cual deberas digitar el siguiente codigo.

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

Crea un nuevo archivo llamado "index.html", dentro del cual deberas digitar el siguiente codigo.

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

Para comprobar que el servidor funciona deberas correr el codigo utilizando el siguiente comando en la terminal.

```bash
  node app.js
```

### Auto recargar la paguina

Para poder auto recargar la deberemos instalar nodemon, pero no como dependencia, solo como un modulo mas dentro del proyecto.

```bash
  npm i nodemon -D 
```

Mientras se instala, modificaremos el archivo llamado "package.json". Lo que modificaremos sera el apartado de "scripts", quitando el comando de "test" y agregando un comando "start"

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

Para comprobar que el servidor funciona deberas correr el codigo utilizando el siguiente comando en la terminal.

```bash
  npm run start
```

De esta forma cada vez que realices cambios el servidor se recargara automaticamente.
## Autor

- [@CoipoNorte](https://www.github.com/coiponorte)

