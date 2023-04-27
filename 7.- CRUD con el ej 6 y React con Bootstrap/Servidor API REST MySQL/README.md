
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