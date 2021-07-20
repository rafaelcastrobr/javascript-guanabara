function carregar() {

  let msg = document.querySelector('#msg');
  let img = document.querySelector('#imagem');
  let educacao = document.querySelector('#educacao');
  let data = new Date();
  let hora = data.getHours();
  let min = data.getMinutes();
  msg.innerHTML = `Agora são ${hora}:${min}`;

  if (hora >=0 && hora < 12) {
    // Bom dia
    img.src = 'assets/manha.jpg';
    document.body.style.background = '#f0e0c9';
    educacao.innerHTML = 'Bom Dia!'
  }else if (hora >= 12 && hora < 18) {
    // Boa tarde
    img.src = 'assets/tarde.jpg';
    document.body.style.background = '#826869'
    educacao.innerHTML = 'Boa Tarde!'
    
  } else {
    // Boa Noite
    img.src = 'assets/noite.jpg';
    document.body.style.background = '#1d4d5c'
    educacao.innerHTML = 'Boa Noite!'

  }
}
