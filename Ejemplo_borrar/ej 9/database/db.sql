-- to create a new database
CREATE DATABASE consultasdb;

-- to use database
use consultasdb;

-- creating a new table
CREATE TABLE `consultasdb`.`consulta` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `pregunta` VARCHAR(100) NOT NULL,
  `clave` VARCHAR(20) NOT NULL,
  `respuesta` VARCHAR(200) NOT NULL,
  `tipo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

-- to show all tables
show tables;

-- to describe table
describe consulta;