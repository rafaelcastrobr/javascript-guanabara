let btn = document.querySelector('#verificar');

btn.addEventListener("click", () => {
  let data = new Date();
  let ano = data.getFullYear();
  let fAno = document.querySelector('#txtano');
  let res = document.querySelector('#res');

  let img = document.createElement('img');
  //img.setAttribute('id', 'foto');

  if (fAno.value.length == 0 || fAno.value > ano) {
    alert ('Erro')
  }else {
    let fSex = document.getElementsByName('radsex');
    let idade = ano - Number(fAno.value);
    let genero = '';
      if (fSex[0].checked) {
        genero = 'Homem';
        if (idade >= 0 && idade < 10){
          // criança
          img.setAttribute('src', 'assets/img/crianca-homem.jpg');
        } else if (idade < 18) {
          // jovem
          img.setAttribute('src', 'assets/img/jovem-homem.jpg');
        } else if (idade < 50) {
          // adulto
          img.setAttribute('src', 'assets/img/adulto-homem.jpg');
        } else {
          // idoso
          img.setAttribute('src', 'assets/img/idoso-homem.jpg');
        }

      }else if (fSex[1].checked) {
        genero = 'Mulher';
        if (idade >= 0 && idade < 10){
          // criança
          img.setAttribute('src', 'assets/img/crianca-mulher.jpg');
        } else if (idade < 18) {
          // jovem
          img.setAttribute('src', 'assets/img/jovem-mulher.jpg');
        } else if (idade < 50) {
          // adulto
          img.setAttribute('src', 'assets/img/adulto-mulher.jpg');
        } else {
          // idoso
          img.setAttribute('src', 'assets/img/idoso-mulher.jpg');
        }

      }
    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    res.appendChild(img);
  }
});