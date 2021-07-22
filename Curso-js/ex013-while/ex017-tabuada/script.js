const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {

let num = document.querySelector('#num').value;
let numero = Number(num);
let res = document.querySelector('#res');
let h1 = document.querySelector('#hh1');

h1.innerHTML = `Tabuada do ${num}`;
res.innerHTML = ``;

if (num.length == 0) {
  alert('Digite um número');
} else {
  for(let i = 1; i<=10; i++) {
    let item = document.createElement('option');
    item.text = `${num} x ${i} = ${numero*i}`;
    res.appendChild(item);
  }item.text = ``;
}
});