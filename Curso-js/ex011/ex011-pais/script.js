let btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  let paisR = (document.querySelector('#pais').value).toLowerCase();
  let wR = document.querySelector('#result');
  
  if(paisR === 'brasil') {
    wR.innerHTML = `<p>Você é <strong>Brasileiro</strong></p>`;
  } else {
    wR.innerHTML = `<p>Você é <strong>Estrangeiro</strong> pois nasceu em ${paisR}</p>`
  }


});