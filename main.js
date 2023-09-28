
function tocaSom (idElementoAudio){

    document.querySelector(idElementoAudio).play();
}


const listaDeTeclas = document.querySelectorAll(',tecla');

let contador = 0;

//enquanto
while(contador < listaDeTeclas.lenght){

const tecla= listaDeTeclas[contador];

   const instrument=tecla[contador].classList[1];

    console.log(instrument);

const idAudio=`#som_${instrumento}`;



    tecla[contador] .onclick =function(){

        tocaSom(‘#som_tecla_pom’);

    }

contador= contador+1;

console.log(contador);

}