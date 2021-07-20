let btn = document.querySelector('#btn');

btn.addEventListener("click", () => {
  let txtv = document.querySelector('input#txVel');
  let res = document.querySelector('div#res');
  let vel = Number(txtv.value);
  res.innerHTML = `Sua velocidade atual é de <strong>${vel} KM/h</strong>`;

  if (vel > 60) {
    res.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidade`;
  }
  res.innerHTML += `<p>Dirija sempre com cinto de segurança</p>`;


});