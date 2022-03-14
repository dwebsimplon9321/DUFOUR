let st = document.querySelector(".ST");

const tva = 8.50

let total =document.querySelector(".tt")

let tvA = st.innerHTML * tva /100 ;

total.innerHTML = parseInt(st.innerHTML) + tvA;

let tax = document.querySelector(".tax");

tax.innerHTML = tvA