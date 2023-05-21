var perfume1 = {
    nombre : 'Sauvage',
    precio : "AR$ 6000"
}

var perfume2 = {
    nombre : 'Fame',
    precio : "AR$ 9000"
}

var perfume3 = {
    nombre : 'Linderdit',
    precio : "AR$ 7590"
}

var perfume4 = {
    nombre : 'Guerlain',
    precio : "AR$ 10000"
}

var perfume5 = {
    nombre : 'Michael Kors',
    precio : "AR$ 12000"
}

var perfume6 = {
    nombre : 'One Million',
    precio : "AR$ 11000"
}

var perfume7 = {
    nombre : '212 VIP',
    precio : "AR$ 8400"
}

var perfume8 = {
    nombre : 'BVLGARI',
    precio : "AR$ 13000"
}

var perfume9 = {
    nombre : 'Amor Amor',
    precio : "AR$ 13000"
}

var perfume10 = {
    nombre : 'CHER.',
    precio : "AR$ 9900"
}

var perfume11 = {
    nombre : 'Clinique happy.',
    precio : "AR$ 12000"
}

var perfume12 = {
    nombre : 'Dissey',
    precio : "AR$ 10700"
}

const nombrePerfume1 = document.getElementById("perfume1")
const precioPerfume1 = document.getElementById("precio1")
nombrePerfume1.textContent = perfume1.nombre
precioPerfume1.textContent = perfume1.precio

const nombrePerfume2 = document.getElementById("perfume2")
const precioPerfume2 = document.getElementById("precio2")
nombrePerfume2.textContent = perfume2.nombre
precioPerfume2.textContent = perfume2.precio

const nombrePerfume3 = document.getElementById("perfume3")
const precioPerfume3 = document.getElementById("precio3")
nombrePerfume3.textContent = perfume3.nombre
precioPerfume3.textContent = perfume3.precio

const nombrePerfume4 = document.getElementById("perfume4")
const precioPerfume4 = document.getElementById("precio4")
nombrePerfume4.textContent = perfume4.nombre
precioPerfume4.textContent = perfume4.precio

const nombrePerfume5 = document.getElementById("perfume5")
const precioPerfume5 = document.getElementById("precio5")
nombrePerfume5.textContent = perfume5.nombre
precioPerfume5.textContent = perfume5.precio

const nombrePerfume6 = document.getElementById("perfume6")
const precioPerfume6 = document.getElementById("precio6")
nombrePerfume6.textContent = perfume6.nombre
precioPerfume6.textContent = perfume6.precio

const nombrePerfume7 = document.getElementById("perfume7")
const precioPerfume7 = document.getElementById("precio7")
nombrePerfume7.textContent = perfume7.nombre
precioPerfume7.textContent = perfume7.precio

const nombrePerfume8 = document.getElementById("perfume8")
const precioPerfume8 = document.getElementById("precio8")
nombrePerfume8.textContent = perfume8.nombre
precioPerfume8.textContent = perfume8.precio

const nombrePerfume9 = document.getElementById("perfume9")
const precioPerfume9 = document.getElementById("precio9")
nombrePerfume9.textContent = perfume9.nombre
precioPerfume9.textContent = perfume9.precio

const nombrePerfume10 = document.getElementById("perfume10")
const precioPerfume10 = document.getElementById("precio10")
nombrePerfume10.textContent = perfume10.nombre
precioPerfume10.textContent = perfume10.precio

const nombrePerfume11 = document.getElementById("perfume11")
const precioPerfume11 = document.getElementById("precio11")
nombrePerfume11.textContent = perfume11.nombre
precioPerfume11.textContent = perfume11.precio

const nombrePerfume12 = document.getElementById("perfume12")
const precioPerfume12 = document.getElementById("precio12")
nombrePerfume12.textContent = perfume12.nombre
precioPerfume12.textContent = perfume12.precio

/*-----------------------------------------------------------------*/ 



const {createApp} = Vue 
createApp({
    data(){
        return {
             integrantes : ["Aissa Galante", "Sofía Munno Guariglia", "Lucio Williams", "Ivan Rodriguez"]
        }
    }
}).mount("#personas")

/*--------------------------------------------------------------------------*/

primeraImagen = {link:"url(../img/portada.jpg)", orden: 1};
segundaImagen = {link:"url(../img/carrusel/slider2.png)", orden: 2};
terceraImagen = {link:"url(../img/carrusel/slider3.png)", orden: 3};
cuartaImagen = {link:"url(../img/carrusel/slider4.png)", orden: 4};
var posicionActual = 0

var listadoImagenesSlider = [primeraImagen,segundaImagen,terceraImagen,cuartaImagen];

var imagenFondo = document.getElementById("imagen");
imagenFondo.style.backgroundImage = listadoImagenesSlider[posicionActual].link;

const botonIzquierdo = document.getElementById("flechaDer");
const botonDerecho = document.getElementById("flechaIzq");





botonDerecho.addEventListener("click",()=>{
    //imagenFondo.style.backgroundImage = fotoIzquierda (posicionActual,listadoImagenesSlider)
    //console.log(listadoImagenesSlider[posicionActual + 1].link)
    if(posicionActual < listadoImagenesSlider.length)
    {
        posicionActual += 1
        imagenFondo.style.backgroundImage = listadoImagenesSlider[posicionActual].link
        console.log(posicionActual)
    }

})


botonIzquierdo.addEventListener("click",()=>{
    //imagenFondo.style.backgroundImage = fotoIzquierda (posicionActual,listadoImagenesSlider)
    //console.log(listadoImagenesSlider[posicionActual + 1].link)
    if(posicionActual > 0)
    {
        posicionActual -= 1 
        imagenFondo.style.backgroundImage = listadoImagenesSlider[posicionActual].link
        console.log(posicionActual)

    }
})



