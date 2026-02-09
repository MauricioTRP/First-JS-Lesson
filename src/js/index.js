// console.log("Hello from console")

// tipos JS
// Strings -> texto
// inseguras!!! 💀
edad = "treinta años" // sin palabra clave
var nombre = "Gato Juanito" // palabra clave var

// Selecionar elementos del Documento
let listasNoOrdenada = document.getElementsByTagName("ul")
console.log(listasNoOrdenada)

// crear elementos programaticamente (todavía no existe en el DOM)
let listItem = document.createElement("li")
listItem.innerText = "Último elemento"
console.log(listItem)

// agregar li dentro de ul
listasNoOrdenada[0].appendChild(listItem)



// arreglos
// let listaSupermercado = [
//     "Pan",
//     "Palta",
//     "Tomate",
//     "Queso",
//     {
//         nombre: "Juan",
//         edad: 45,
//         rut: "12.123.123-j"
//     }
// ]

// console.log(listaSupermercado)
// console.log(`listaSupermercado[0] -> ${listaSupermercado[0]}`)

// // objetos
// let usuario = {
//     nombre: nombre,
//     edad: edad,
//     rut: "12.332.123-k"
// }

// console.table(usuario)

// // nombre: string
// // edad: number
// // rut: string

// // console.log(`typeof usuario.nombre ${typeof usuario.nombre}`)
// // console.log(`typeof usuario.edad ${typeof usuario.edad}`)
// // console.log(`typeof usuario.rut ${typeof usuario.rut}`)


// // console.log(`El tipo de dato de la variable edad es: ${typeof edad}`)

// // recomendadas
// let dispositivo = "Teléfono Android" // palabra clave let
// const isbn = "12039 - 123- 123- 123- 123" // palabra clave const

// // Numbers
// let number = 123123
// let number2 = 102938123.123213
// let numberImpossible = NaN // Not a Number, tipo number
// let infinityNumber = Infinity

// // Boolean
// let booleanoVerdadero = true
// let booleanoFalso = false

// // Null
// let dato = null // representa el vacío

// // Símbolo - representar cosas únicas
// let identificador = Symbol('id')

// let noDefinido = undefined
