-- Crear tabla 'users'
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  idUser int NOT NULL AUTO_INCREMENT,
  nombre varchar(100) NOT NULL,
  correo varchar(100) NOT NULL,
  telefono varchar(15) NOT NULL,
  contrasena varchar(255) NOT NULL,
  role enum('user','admin','superAdmin') DEFAULT 'user',
  PRIMARY KEY (idUser),
  UNIQUE KEY correo (correo)
);

-- Insertar datos en 'users'
INSERT INTO users (idUser, nombre, correo, telefono, contrasena, role)
VALUES 
(1, 'roy', 'princess18gro@gmail.com', '4686804560', 'Riverdale', 'admin'),
(2, 'mirza', 'natzllyuni@gmail.com', '4155668881', 'mirza', 'superAdmin');

-- Crear tabla 'library'
DROP TABLE IF EXISTS library;
CREATE TABLE library (
  idLibrary int NOT NULL AUTO_INCREMENT,
  idUser int DEFAULT NULL,
  nombre varchar(255) NOT NULL,
  correo varchar(255) NOT NULL,
  contrasena varchar(255) NOT NULL,
  colonia varchar(100) NOT NULL,
  calle varchar(100) NOT NULL,
  numero varchar(10) NOT NULL,
  tarjeta varchar(20) NOT NULL,
  PRIMARY KEY (idLibrary),
  UNIQUE KEY correo (correo),
  KEY idUser (idUser),
  CONSTRAINT library_ibfk_1 FOREIGN KEY (idUser) REFERENCES users (idUser)
);

-- Insertar datos en 'library'
INSERT INTO library (idLibrary, idUser, nombre, correo, contrasena, colonia, calle, numero, tarjeta)
VALUES 
(1, 1, 'Biblioteca Central', 'princess18gro@gmail.com', 'Riverdale', 'Lindavista', 'Pinos', '34', 'debit');

-- Crear tabla 'book'
DROP TABLE IF EXISTS book;
CREATE TABLE book (
  idBook int NOT NULL AUTO_INCREMENT,
  idLibrary int DEFAULT NULL,
  nomBook varchar(30) NOT NULL,
  descripcion varchar(250) NOT NULL,
  autor varchar(30) NOT NULL,
  editorial varchar(30) NOT NULL,
  precioLibro decimal(10,2) NOT NULL,
  image varchar(200) NOT NULL,
  PRIMARY KEY (idBook),
  KEY idLibrary (idLibrary),
  CONSTRAINT book_ibfk_1 FOREIGN KEY (idLibrary) REFERENCES library (idLibrary)
);

-- Insertar datos en 'book'
INSERT INTO book (idBook, idLibrary, nomBook, descripcion, autor, editorial, precioLibro, image)
VALUES 
(1, 1, 'Las crónicas de narnia', 'Viajes al fin del mundo', 'C.S. Lewis', 'HarperCollins Espanol', 365.00, 'https://m.media-amazon.com/images/I/91hkAAEpLIL.SY522.jpg');




/*CREATE DATABASE ng_BookShop;
USE ng_BookShop;

CREATE TABLE usuarios (
    idUsuario CHAR(5) NOT NULL PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    telefono VARCHAR(30) NOT NULL,
    contraseña VARCHAR (8) NOT NULL
);

CREATE TABLE paqueteXbiblioteca (
    idPaquete CHAR(3) NOT NULL,
    idBiblioteca CHAR(5) NOT NULL,
    durPaquete DATE NOT NULL,
    FOREIGN KEY (idPaquete) REFERENCES package(idPaquete),
    FOREIGN KEY (idBiblioteca) REFERENCES biblioteca(idBiblioteca)
);

CREATE TABLE biblioteca (
    idBiblioteca CHAR(5) NOT NULL PRIMARY KEY,
    idUsuario CHAR(5) NOT NULL,
    nomBiblioteca VARCHAR(30) NOT NULL,
    contraseña VARCHAR (8) NOT NULL,
    colonia VARCHAR (30) NOT NULL,
    calle VARCHAR (30) NOT NULL,
    numero VARCHAR (10) NOT NULL,
    horario VARCHAR (15),
    FOREIGN KEY (idUsuario) REFERENCES usuarios(idUsuario)
);

Create Table libroXbiblioteca (
    idLibro CHAR(5) NOT NULL,
    idBiblioteca CHAR(5) NOT NULL,
    ejemplares INT NOT NULL,
    estado VARCHAR (10),
    FOREIGN KEY (idBiblioteca) REFERENCES biblioteca(idBiblioteca),
    FOREIGN KEY (idLibro) REFERENCES libro(idLibro)
);

CREATE TABLE libro (
    idLibro CHAR(5) NOT NULL PRIMARY KEY,
    idBiblioteca CHAR(5) NOT NULL,
    nomLibro VARCHAR(30) NOT NULL,
    descripcion VARCHAR (250) NOT NULL,
    autor VARCHAR(30) NOT NULL,
    editorial VARCHAR(30) NOT NULL,
    precioLibro VARCHAR(10) NOT NULL,
    image VARCHAR (200) NOT NULL,
    FOREIGN KEY (idBiblioteca) REFERENCES biblioteca(idBiblioteca)
);
CREATE TABLE  package(
    idPaquete CHAR(3) NOT NULL PRIMARY KEY,
    idBiblioteca CHAR(5) NOT NULL,
    nomPaquete VARCHAR(10) NOT NULL,
    description VARCHAR(100) NOT NULL,
    durPaquete VARCHAR(30) NOT NULL,
    precioPaquete VARCHAR(10) NOT NULL,
    FOREIGN KEY (idBiblioteca) REFERENCES biblioteca(idBiblioteca)
);

CREATE TABLE prestamos (
    idPrestamo CHAR(5) NOT NULL PRIMARY KEY,
    idUsuario CHAR(5) NOT NULL,
    idBiblioteca CHAR(5) NOT NULL,
    idLibro CHAR(5) NOT NULL,
    estadoLibro varchar (50) NOT NULL,
    fechaPrestamo DATE NOT NULL,
    fechaDevolucion DATE NOT NULL,
    importe DECIMAL (10,2),
    FOREIGN KEY (idUsuario) REFERENCES usuarios(idUsuario),
    FOREIGN KEY (idLibro) REFERENCES libro(idLibro),
    FOREIGN KEY (idBiblioteca) REFERENCES biblioteca(idBiblioteca)
);

CREATE TABLE multas (
    idPrestamo CHAR(5) NOT NULL,
    fechPago DATE NOT NULL,
    monto DECIMAL (10,2),
    FOREIGN KEY (idPrestamo) REFERENCES prestamos(idPrestamo)
);




INSERT INTO usuarios (idUsuario, nombre, apellido, email,telefono,colonia,calle,numero,contraseña)
VALUES ('U001', 'Mirza', 'Morales', 'natzllyuni@gmail.com', '4155668881', 'Indepencia','Francisco Montes de Oca','16','795135*M');
*/
