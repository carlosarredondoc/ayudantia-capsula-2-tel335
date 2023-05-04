// Existen diversos tipos de datos en javascript

// Numeros
let enteros = 10
let flotantes = 20.3

// Suma, Resta, Multiplicacion, Division
console.log(enteros + flotantes)
console.log(enteros - flotantes)
console.log(enteros * flotantes)
console.log(enteros / flotantes)

// Boleanos
let verdadero = true // X True
let falso = false    // X False

//Operadores logicos
// AND (&&) -> true si todos los valores son true
// OR (||) -> true si al menos un valor es true
// NOT (!) -> true si el valor es false

console.log(verdadero && falso) // Falso
console.log(verdadero || falso) // Verdadero
console.log(!falso) // Verdadero


// String
let cadena = "Hola mundo"

// Metodos de string
// Longitud de la cadena
console.log(cadena.length)
// Convertir a mayusculas
console.log(cadena.toUpperCase())
// Convertir a minusculas
console.log(cadena.toLowerCase())
// Concatenar string
console.log(cadena.concat(" ", "concatenado"))

// Obtener el primer y segundo elemento de una cadena separado por un espacio
console.log(cadena.split(' ')) // -> ['Hola', 'mundo']
// Obtener el primer elemento de una cadena
console.log(cadena.split(' ')[0]) // -> 'Hola'
// Obtener el segundo elemento de una cadena
console.log(cadena.split(' ')[1]) // -> 'mundo'


// Objeto
let objeto = {
    "nombre":"Pedro",
    "edad": 20,
    "cuenta_activa": true,
    "direccion": {
        "calle": "Av. pepe",
        "numero": 123,
        "ciudad": "Viña del mar"
    }
}
// Eliminar un atributo del objeto
delete objeto.direccion.ciudad
//delete objeto['direccion']['ciudad'] // Otra forma de eliminar un atributo
console.log(objeto)

objeto.direccion.ciudad = "Viña del mar"
//objeto['direccion']['ciudad'] = "Viña del mar" // Otra forma de editar un atributo
console.log(objeto)

// Arreglo puede contener cualquier tipo de dato
let arreglo = [true, false, 5, 1.2,"Hola",{"nombre":"Persona 1", "edad": 20}]
console.log(arreglo)

// Loops o Ciclos

// Acceder a un elemento del arreglo por su indice
for(let i = 0; i < arreglo.length; i++){
    console.log(arreglo[i])
}

// Otra manera de acceder a un elemento pero ahora de un objeto
for (let elemento of arreglo){
    console.log(elemento)
}

for (const element in objeto) {
    console.log(`Llave o Key= ${element}, `, `Valor = ${objeto[element]}`)
}

while(arreglo.length > 0){
    console.log(arreglo.pop())
}

// Funciones
function suma(a,b = 2){
    return a + b
}

function obtenervocales(cadena_texto){
    cadena_texto = cadena_texto.toLowerCase()
    let vocales = {'a':0, 'e':0, 'i':0, 'o':0, 'u':0}
    for(let i = 0; i < cadena_texto.length; i++){
        if(cadena_texto[i] == 'a' || cadena_texto[i] == 'e' || cadena_texto[i] == 'i' || cadena_texto[i] == 'o' || cadena_texto[i] == 'u'){
            vocales[cadena_texto[i]]+=1
        }
    }
    return vocales
}
console.log(obtenervocales("Hola mundo"))

// Funciones flecha
let f_flecha = (x) => {
    return x
}

console.log(f_flecha("Hola"))


// Metodo arreglos
let arreglo2 = [1,2,3,4,5,6,7,8,9,10]

// Map
// Recorre el arreglo y aplica una funcion a cada elemento
let arreglo3 = arreglo2.map((elemento) => {
    return elemento * 2
})
console.log(arreglo3)

// Filter
// Recorre el arreglo y aplica una funcion a cada elemento
// Si la funcion retorna true, el elemento se agrega al arreglo resultante
let arreglo4 = arreglo2.filter((elemento) => {
    return elemento % 2 == 0
})
console.log(arreglo4)

// Reduce
// Recorre el arreglo y aplica una funcion a cada elemento
// El resultado de la funcion se guarda en una variable
let arreglo5 = arreglo2.reduce((acumulador, elemento) => {
    return acumulador + elemento
})
console.log(arreglo5)

// Find
// Recorre el arreglo y aplica una funcion a cada elemento
// Si la funcion retorna true, se retorna el elemento
let elemento_encontrado = arreglo2.find((elemento) => {
    return elemento % 2 == 0
})
console.log(elemento_encontrado)

// FindIndex
// Recorre el arreglo y aplica una funcion a cada elemento
// Si la funcion retorna true, se retorna el indice del elemento

let indice_del_elemento_encontrado = arreglo2.findIndex((elemento) => {
    return elemento % 2 == 0
}
)
console.log(indice_del_elemento_encontrado)

// Sort
let arreglo6 = [1,2,3,4,5,6,7,8,9,10]
//[{age: 19},{age:20}]
//Descendente (Mayor a menor)
arreglo6.sort((a,b) => {
    return b.age - a.age
})
console.log(arreglo6)

let arreglo7 = [1,2,3,4,5,6,7,8,9,10].reverse()

//Ascente (Menor a mayor)
arreglo7.sort((a,b) => {
    return  a - b
})
console.log(arreglo7)