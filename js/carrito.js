var perfume1 = {
    nombre : 'Sauvage',
    precio : 6000
}
var perfume4 = {
    nombre : 'Guerlain',
    precio : 10000
}
var perfume7 = {
    nombre : '212 VIP',
    precio : 8400
}


const {createApp} = Vue 
createApp({
    data(){
        return {
            perfumesComprados : [perfume1.nombre + " AR$ " + perfume1.precio, perfume4.nombre + " AR$ " + perfume4.precio, perfume7.nombre + " AR$ " + perfume7.precio]
        }
    }
}).mount("#perfumesComprados")


/*----------------------------*/

const sumaDePreciosPerfumesComprados = perfume1.precio + perfume4.precio + perfume7.precio
const precioFinal = document.getElementById("precioFinal")

precioFinal.textContent = `TOTAL:  ${sumaDePreciosPerfumesComprados}`
