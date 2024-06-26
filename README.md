# Clases---Vector-de-Clases-3---JS8

La clase CZooAnimal se define utilizando la sintaxis de
clases de JavaScript introducida en ECMAScript 2015 (también conocido
como ES6).
Dentro de la clase, definimos un constructor que
inicializa las propiedades de cada instancia de la clase (IdAnimal,
name, cageNumber, IdTypeAnimal y weight).
El constructor toma
parámetros que son utilizados para asignar valores a estas propiedades
cuando se crea una nueva instancia de la clase.
En este caso, IdAnimal se genera de forma aleatoria usando Math.random().
Después de definir la clase CZooAnimal, creamos cinco instancias de esta clase utilizando el operador new.
Cada
instancia se inicializa con valores específicos para sus propiedades,
como el nombre del animal, el número de jaula, el tipo de animal y su
peso.
Creamos un vector (array) llamado zooAnimals que contendrá objetos de la clase CZooAnimal.
Este
vector almacena todas las instancias de animales que creamos
previamente. Cada elemento del array es un objeto de la clase
CZooAnimal.
Utilizamos este array para mantener un registro de
todos los animales en el zoológico y realizar operaciones sobre ellos,
como contar, filtrar o mostrar sus datos.
En este ejemplo, también definimos algunas funciones para realizar operaciones sobre los datos de los animales.
Estas
funciones se utilizan para contar la cantidad de animales en
determinadas condiciones (countAnimalsInCage5Under3kg,
countFelineAnimalsBetweenCages2And5) y para listar el nombre de un
animal específico (listAnimalNameInCage4Under120).
Las funciones utilizan la información almacenada en el vector zooAnimals para realizar sus operaciones.