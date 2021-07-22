let btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  let start = document.querySelector('#start').value;
  let end = document.querySelector('#end').value;
  let pass = document.querySelector('#pass').value;
  let res = document.querySelector('#res');

  
  if (start.length == 0 || end.length == 0 || pass.length == 0) {
    res.innerHTML = `Impossível contar!`;
    alert('![ERRO] Falta dados');

  } else {
    res.innerHTML = `Contando:.. `
    let i = Number(start);
    let f = Number(end);
    let p = Number(pass);

    if (p <= 0) {
      alert(`Passo 0 não é possível. Agora é 1`)
      p = 1;
    }

    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F449} `;
      };
    } else {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449} `;
      };
    }
    res.innerHTML += `\u{1F3C1}`;
  }
});