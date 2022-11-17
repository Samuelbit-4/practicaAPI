const header = document.querySelector("header")
const presentacion = document.querySelector("#presentacion")

//CAMBIAR DE POSICION EL HEADER
document.addEventListener("scroll", Event =>{
   if(document.documentElement.scrollTop > 0){
    header.style.position = "fixed"
    header.style.borderBottom = "1px solid black"
    header.style.transition = "transform 500ms ease -250ms"   
   } else{
    header.style.position = "relative"
    header.style.borderBottom = "none"
    header.style.animation = "desvanecer 0.2s"
   }
})

//MODIFICAR LAS IMAGENES DE PRESENTACION

