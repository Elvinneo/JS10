const product = document.querySelector(".product");

let image = [];
let titles=[];
let prices=[];
let yoxla = 0;

const data = document.createElement("div");
data.classList.add("images");
product.append(data);
const images = document.createElement("img");
data.append(images);
const title=document.createElement("p")
title.classList.add("basliq")
product.append(title)
const price=document.createElement('p')
price.classList.add('qiymet')
product.append(price)

fetch("https://fakestoreapi.com/products/")
  .then((res) => res.json())
  .then((items) => items.map((item) => (image.push(item.image),titles.push(item.title),prices.push(item.price))));

const btn1 = document.getElementById("sag");
btn1.addEventListener("click", ireli);
const btn2 = document.getElementById("sol");
btn2.addEventListener("click", geri);

function ireli() {
  if (yoxla<=18){yoxla++;}
  images.src = image[yoxla];
  title.textContent=titles[yoxla]
  price.textContent=prices[yoxla]+'$'
}
function geri() {
  if (yoxla>=1){yoxla--;}
  images.src = image[yoxla];
  title.textContent=titles[yoxla]
  price.textContent=prices[yoxla]+'$'
}
