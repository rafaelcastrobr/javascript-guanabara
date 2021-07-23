const btn = document.querySelector('#btn');
let lista = [];

btn.addEventListener('click', () => {
  let num = document.querySelector('#num');
  let res = document.querySelector('#res');
  let numero = Number(num.value);


  if (num.value.length == 0) {
    alert('Digite um número');
    return false;
  } 

  if (lista.indexOf(numero) !== -1) {
    alert('Número já digitado, digite outro!');
    return false;
  } 

  if(numero >100) {
    alert('Digite um número menor que 100');
  } else if (numero <= 0) {
    alert('Digite um número maior que 0')
  } else {
    let op = document.createElement('option');
    res.appendChild(op);
    op.text = `Valor ${numero} adicionado.`;
    
    lista.push(numero);
  }
  resFinal.innerHTML = ``;
  num.value = ``;
  num.focus();

});

const btnRes = document.querySelector('#btnRes');

btnRes.addEventListener('click', () => {
  let guarda = 0;
  let tamanhoL = lista.length -1;
  let cres = lista.sort();

  let maior = lista[0];
  let menor = lista[0];
  
  for (let pos in lista) {
    if (lista[pos] > maior) {
      maior = lista[pos];
    }
     if (lista[pos] < menor) {
      menor = lista[pos];
    }
  }

  if (lista[0] == undefined){
    alert(`Adicione números antes de finalizar`)
  } else {
    for(let i=0; i<=tamanhoL ;i++){
      guarda += lista[i];
    }

    const resFinal = document.querySelector('#resFinal');
    resFinal.innerHTML = `<p>Ao todo, temos ${lista.length} números cadastrados</p>`
    resFinal.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    resFinal.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    resFinal.innerHTML += `<p>Somando todos os valores temos ${guarda}</p>`
    resFinal.innerHTML += `<p>A média dos valores digitados é ${guarda/lista.length}</p>`
  }

});