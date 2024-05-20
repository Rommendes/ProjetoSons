// function tocSomPom (){
//     document.querySelector('#som_tecla_pom').play();
// }
// document.querySelector('.tecla_pom').onclick = tocSomPom;

// function tocSomClap (){
//     document.querySelector('#som_tecla_clap').play();
// }
// document.querySelector('.tecla_clap').onclick = tocSomClap;

function tocSom(idElmentoAudio) {
  document.querySelector(idElmentoAudio).play();
}
const listaDeTeclas = document.querySelectorAll(".tecla");

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocSom(idAudio);
  };
  

  tecla.onkeydown = function (e) {
    console.log(e);
    if('Espaço'){
      tecla.classList.add('ativa')
    }
  }
  tecla.onkeyup = function () {
    tecla.classList.remove('ativa')
  }


}
