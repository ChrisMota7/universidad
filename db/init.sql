CREATE DATABASE IF NOT EXISTS universidad;

USE universidad;

DROP TABLE IF EXISTS materia;
DROP TABLE IF EXISTS especialidad;

CREATE TABLE especialidad (
    especialidad_id int NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(200),
    PRIMARY KEY (especialidad_id)
);

CREATE TABLE materia (
    materia_id int NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(200),
    especialidad_id int,
    PRIMARY KEY (materia_id),
    FOREIGN KEY (especialidad_id) REFERENCES especialidad(especialidad_id)
);

INSERT INTO especialidad (nombre) VALUES ('Desarrollo de Aplicaciones Empresariales');
INSERT INTO especialidad (nombre) VALUES ('Redes');

INSERT INTO materia (nombre, especialidad_id) VALUES ('Base de Datos Avanzadas', 1);
INSERT INTO materia (nombre, especialidad_id) VALUES ('Desarrollo de Aplicaciones Móviles', 1);
INSERT INTO materia (nombre, especialidad_id) VALUES ('Laboratorio para el Desplique de Aplicaciones Empresariales', 1);
INSERT INTO materia (nombre, especialidad_id) VALUES ('Ciencia de Datos', 1);
INSERT INTO materia (nombre, especialidad_id) VALUES ('Cómputo y Servicios en la nube', 1);

INSERT INTO materia (nombre, especialidad_id) VALUES ('Diseño de Redes', 2);
INSERT INTO materia (nombre, especialidad_id) VALUES ('Redes Inalámbricas', 2);
INSERT INTO materia (nombre, especialidad_id) VALUES ('Seguridad en Redes', 2);
INSERT INTO materia (nombre, especialidad_id) VALUES ('Infraestructura para Despliegue de Aplicaciones', 2);
INSERT INTO materia (nombre, especialidad_id) VALUES ('Fundamentos de LOT', 2);