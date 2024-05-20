
// function tocSomPom (){
//     document.querySelector('#som_tecla_pom').play();
// }
// document.querySelector('.tecla_pom').onclick = tocSomPom;

// function tocSomClap (){
//     document.querySelector('#som_tecla_clap').play();
// }
// document.querySelector('.tecla_clap').onclick = tocSomClap;


function tocSom (idElmentoAudio){

    document.querySelector(idElmentoAudio).play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');

//listaDeTeclas[0].onclick = tocSomPom;

let contador = 0;
//enquanto
while(contador < listaDeTeclas.length){
    listaDeTeclas[contador].onclick = tocSom;
    contador++;
    console.log(contador);
}
