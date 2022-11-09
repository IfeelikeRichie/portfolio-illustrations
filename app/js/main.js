let imagen = [
    {im:'/imgs/uno.jpg'},
    {im:'/imgs/dos.jpg'},
    {im:'/imgs/tres.jpg'},
    {im:'/imgs/cuatro.jpg'},
    {im:'/imgs/cinco.jpg'},
    {im:'/imgs/seis.jpg'},
    {im:'/imgs/siete.jpg'},
    {im:'/imgs/ocho.jpg'},
    {im:'/imgs/nueve.jpg'},
    {im:'/imgs/diez.jpg'},
    {im:'/imgs/once.jpg'},
    {im:'/imgs/doce.jpg'},
    {im:'/imgs/trece.jpg'},
    {im:'/imgs/catorce.jpg'},
    {im:'/imgs/quince.jpg'},
    {im:'/imgs/dieciseis.jpg'},
    {im:'/imgs/diecisiete.jpg'},
    {im:'/imgs/dieciocho.jpg'},
    {im:'/imgs/diecinueve.jpg'},
    {im:'/imgs/veinte.jpg'},
    {im:'/imgs/veintiuno.jpg'},
    {im:'/imgs/veintidos.jpg'},
    {im:'/imgs/veintitres.jpg'},
    {im:'/imgs/veinticuatro.jpg'},
    {im:'/imgs/veinticinco.jpg'},
    {im:'/imgs/veintiseis.jpg'},
    {im:'/imgs/veintisiete.jpg'}
    ]
    
let contador = 0
const contenedor = document.querySelector('.slideshow')
const overlay = document.querySelector('.overlay')
const galeria_imagenes = document.querySelectorAll('.flexbox img')
const img_slideshow = document.querySelector('.slideshow img')

contenedor.addEventListener('click', e=>{
    let left = contenedor.querySelector('.arrow-left'),
        right = contenedor.querySelector('.arrow-right'),
        img = contenedor.querySelector('img'),
        tgt = e.target
    if (tgt== left) {
        if (contador>0) {
            img.src = imagen[contador-1].im
            contador--
        }else{
            img.src = imagen[imagen.length-1].im
            contador = imagen.length-1
        }
    }else if (tgt == right) {
        if(contador<imagen.length-1){
            img.src = imagen[contador+1].im
            contador++
        }else{
            img.src = imagen[0].im
            contador = 0
        }
    }
})

Array.from(galeria_imagenes).forEach(img =>{
    img.addEventListener('click', e=>{
        const imagenSeleccionada  = +e.target.dataset.img
        img_slideshow.src = imagen[imagenSeleccionada].im
        contador = imagenSeleccionada
        overlay.style.opacity = 1
        overlay.style.visibility = 'visible'
    })
})

document.querySelector('.btn-close').addEventListener('click', ()=>{
    overlay.style.opacity = 0
    overlay.style.visibility = 'visible'
})

