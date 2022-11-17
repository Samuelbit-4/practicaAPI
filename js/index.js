console.log("HOLA MUNDO!");

// let main = document.querySelector("main")
const conten = document.querySelector("main")
const products = document.querySelector("#productos")
let dans;

//PRIMERO CARGAMOS LOS ELEMENTOS
document.addEventListener("DOMContentLoaded",() =>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>{
        const data = json;
        console.log(data)
        console.log(data.length)
        let contador = 0;
        data.forEach(element => {
            const cart = document.createElement('div')
            cart.classList = "product"
            const h1 = document.createElement('h1');
            h1.textContent = element.title
            const h2 = document.createElement('h2');
            h2.textContent = element.price;
            const img = document.createElement('img')
            const button = document.createElement('button')
            button.textContent = "AGREGAR AL CARRITO"
            img.setAttribute("src", element.image)
            products.appendChild(cart)
            cart.appendChild(img)
            cart.appendChild(h1)
            cart.appendChild(h2)
            cart.appendChild(button)
        });
    })
})




