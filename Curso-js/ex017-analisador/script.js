const btn = document.querySelector('#btn');
let lista = [];

btn.addEventListener('click', () => {
  let num = document.querySelector('#num').value;
  let res = document.querySelector('#res');
  let numero = Number(num);

  if (num.length == 0) {
    alert('Digite um número');
  }
  if(num >100) {
    alert('Digite um número menor que 100')
  } else {
    let op = document.createElement('option');
    res.appendChild(op);
    op.text = `${num}`;
    
    lista.push(numero);
  }
  resFinal.innerHTML = ``;

});

const btnRes = document.querySelector('#btnRes');


btnRes.addEventListener('click', () => {
  let guarda = 0;
  let tamanhoL = lista.length -1;
  let cres = lista.sort();


  if (lista[0] == undefined){
    alert(`Adicione números antes de finalizar`)
  } else {
    for(let i=0; i<=tamanhoL ;i++){
      guarda += lista[i];
    }
    const resFinal = document.querySelector('#resFinal');
    resFinal.innerHTML = `<p>Ao todo, temos ${lista.length} números cadastrados</p>`
    resFinal.innerHTML += `<p>O maior valor informado foi ${cres[tamanhoL]}</p>`
    resFinal.innerHTML += `<p>O menor valor informado foi ${cres[0]}</p>`
    resFinal.innerHTML += `<p>Somando todos os valores temos ${guarda}</p>`
    resFinal.innerHTML += `<p>A média dos valores digitados é ${guarda/lista.length}</p>`
  }
  
});