CREATE DATABASE ng_BookShop;
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
