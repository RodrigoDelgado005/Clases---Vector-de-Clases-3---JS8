//Inicializa las propiedades de cada instancia de la clase
class CZooAnimal {
    constructor() {
// Almacena las instancias creadas de animales
        this.zooAnimals = [];
    }
// Se define el constructor que inicializa las propiedades de cada instancia.
    agregarAnimal(n, cage, type, weight) {
//idAnimal se generara de manera aleatoria
        const IdAnimal = Math.floor(Math.random() * 1000) + 1;
        this.zooAnimals.push({
            IdAnimal,
            name: n,
            cageNumber: cage,
            IdTypeAnimal: type,
            weight
        });
    }

 //Crearemos la tabla la cual tendra los datos de los animales,y las funciones que contaran y listaran los animales
    generarTablaAnimales() {
        const tablaBody = document.querySelector('#animalTable tbody');
        tablaBody.innerHTML = '';

        this.zooAnimals.forEach(animal => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${animal.IdAnimal}</td>
                <td>${animal.name}</td>
                <td>${animal.cageNumber}</td>
                <td>${animal.IdTypeAnimal}</td>
                <td>${animal.weight}</td>
            `;
            tablaBody.appendChild(fila);
        });
    }
 //se listaran los animales de la jaula 5, que pesen menos de 3 kg  
    contarAnimalesEnJaula5Menor3kg() {
        let count = 0;
        for (const animal of this.zooAnimals) {
            if (animal.cageNumber === 5 && animal.weight < 3) {
                count++;
            }
        }
        return count;
    }
//se listaran los animales felinos entre las jaulas 2 a 5 
    contarFelinosEntreJaulas2y5() {
        let count = 0;
        for (const animal of this.zooAnimals) {
            if (animal.IdTypeAnimal === 1 && animal.cageNumber >= 2 && animal.cageNumber <= 5) {
                count++;
            }
        }
        return count;
    }
//Se listaran los animales de la jaula 5, que pesen menos de 120 kg 
    listarNombreAnimalJaula4Menor120() {
        for (const animal of this.zooAnimals) {
            if (animal.cageNumber === 4 && animal.weight < 120) {
                return animal.name;
            }
        }

    }
}

//Creamos cinco instancias de la clase CZooAnimal
const zoo = new CZooAnimal();

//Cada instancia se inicializa con valores especificos
//Se Agregan los animales
zoo.agregarAnimal("Tigre", 5, 1, 150); //Felino
zoo.agregarAnimal("León", 2, 1, 180); //Felino
zoo.agregarAnimal("Águila", 3, 2, 2); //Ave
zoo.agregarAnimal("Serpiente", 4, 3, 80); //Reptil
zoo.agregarAnimal("Pantera", 5, 1, 100); //Felino

//Generamos la tabla animales 
zoo.generarTablaAnimales();

//Se mostraran la cantidad de animales de la jaula 5 que su peso sea menor a 3 KG
document.getElementById("resultado1").textContent = "Cantidad de animales en la jaula 5 con peso menor a 3 kg: " + zoo.contarAnimalesEnJaula5Menor3kg();

//Se mostraran la cantidad de animales de tipo felino entre las jaulas 2 y 5
document.getElementById("resultado2").textContent = "Cantidad de animales tipo felino entre las jaulas 2 y 5: " + zoo.contarFelinosEntreJaulas2y5();

//Se mostrara el nombre del animal de la jaula 4 con peso menor a 120 KG
document.getElementById("resultado3").textContent = "Nombre del animal en la jaula 4 con peso menor a 120: " + zoo.listarNombreAnimalJaula4Menor120();