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

var sumaDePreciosPerfumesComprados = perfume1.precio + perfume4.precio + perfume7.precio;
const precioFinal = document.getElementById("precioFinal");

precioFinal.textContent = `TOTAL:  ${sumaDePreciosPerfumesComprados}`;

/*--------------------------------*/
const listCodigosDescuentos = ["olybuendia","aromadescuento10","ofefeferta"];
const botonDescuento = document.getElementById("botonDescuento");
const codigoIngresado = document.getElementById("codigoDescuento");
var flag = 0

botonDescuento.addEventListener("click",()=>{
    for(let i = 0; i <= listCodigosDescuentos.length; i++)
    {
        if(codigoIngresado.value == listCodigosDescuentos[i] && flag != 1)
        {
            sumaDePreciosPerfumesComprados -= (sumaDePreciosPerfumesComprados * 0.25);
            precioFinal.textContent = `TOTAL:  ${sumaDePreciosPerfumesComprados}`;
            flag = 1
        }
        


    }
})

/*--------------------------------------------------*/

const botonComprar = document.getElementById("botonComprar")
botonComprar.addEventListener("click",() =>{
    alert("Gracias por comprar")
})
/*---------------------------------------------------------------------*/

const nombresIntegrantes = 
createApp({
    data(){
        return {
             integrantes : ["Aissa Galante", "Sofía Munno Guariglia", "Lucio Williams", "Ivan Rodriguez"]
        }
    }
}).mount("#personas")