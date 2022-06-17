CREATE DATABASE crudVue

USE crudVue;

CREATE TABLE person(
	id INT PRIMARY KEY IDENTITY(1,1),
	cedula VARCHAR (10),
	nombre VARCHAR (50),
	apellido1 VARCHAR (50),
	apellido2 VARCHAR (50),
	edad TINYINT
)

CREATE PROCEDURE getAllPersons 
	AS
	BEGIN
	SET NOCOUNT ON;
	SELECT cedula, nombre, apellido1,apellido2,edad FROM person
	END


CREATE PROCEDURE addPerson
@cedula VARCHAR (10), @nombre VARCHAR (50),
@apellido1 VARCHAR (50), @apellido2 VARCHAR (50),
@edad TINYINT

	AS
	BEGIN
	SET NOCOUNT ON;
	INSERT INTO person (cedula, nombre,apellido1,apellido2,edad) 
	VALUES
	(@cedula, @nombre, @apellido1, @apellido2,@edad);
	END

CREATE PROCEDURE deletePerson
@cedula VARCHAR (10)

	AS
	BEGIN 
	SET NOCOUNT ON;
	DELETE person WHERE cedula= @cedula
	END


CREATE PROCEDURE getPerson
@cedula VARCHAR (10)

	AS
	BEGIN 
	SET NOCOUNT ON;
	SELECT cedula, nombre, apellido1,apellido2,edad 
	FROM person
	WHERE cedula = @cedula
	END

CREATE PROCEDURE updatePerson
@cedula VARCHAR (10), @nombre VARCHAR (50),
@apellido1 VARCHAR (50), @apellido2 VARCHAR (50),
@edad TINYINT

	AS
	BEGIN 
	SET NOCOUNT ON;
	UPDATE person SET nombre=@nombre, apellido1=@apellido1,
	apellido2=@apellido2, edad=@edad
	WHERE cedula=@cedula
	END