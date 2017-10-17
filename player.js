var botaoPlay = document.querySelector('.botao-play');
var audio = document.querySelector('audio');

botaoPlay.onclick = function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

audio.onplay = function () {
  console.log('deu play');
}
audio.onpause = function () {
  console.log('pause');
}

audio.onloadeddata = function () {
var spanDuracao = document.querySelector('.duracao');
//spanDuracao.innerText = formatSecondsAsTime(audio.duration);
spanDuracao.innerText = formatSecAsTime(audio.duration);

}
audio.ontimeupdate = function () {
var timePercentual = (audio.currentTime / audio.duration) * 100;
document.querySelector('.tocado').style.width = timePercentual + '%';
//var duracaoAtual = Math.round(audio.currentTime);
var spanTempoAtual = document.querySelector('.tempo-atual');
//spanTempoAtual.innerText = formatSecondsAsTime(audio.currentTime);
spanTempoAtual.innerText = formatSecAsTime(audio.currentTime);
}


// function formatSecondsAsTime(secs, format) {
// var hr = Math.floor(secs / 3600);
// var min = Math.floor((secs - (hr * 3600)) / 60);
// var sec = Math.floor(secs - (hr * 3600) - (min * 60));

// if (min < 10) {
//   min = "0" + min;
// }
// if (sec < 10) {
//   sec = "0" + sec;
// }

// return min + ':' + sec;
// }



function formatSecAsTime(time){
var data = new Date(2017,0,1);
data.setSeconds(time);
var time_sec = data.getMinutes().toString().padStart(2,'0') 
+ ':'
+ data.getSeconds().toString().padStart(2,'0');
return time_sec;
}

























// audio.onloadeddata = function() {
//   duracao.innerText = '00:' + Math.round(audio.duration);
// }

// audio.ontimeupdate = function(e) {
//   var larguraBarra = (audio.currentTime / audio.duration) * 100;
//   var barra = document.querySelector('.tocado');
//   barra.style.width = larguraBarra + '%';

//   // Arredonda o valor do tempo atual
//   var duracaoAtual = Math.round(audio.currentTime);

//   // O CÓDIGO ABAIXO É SÓ PRA TRANSFORMAR 00:1 em 00:01
//   // transform em string
//   //Com o tempo atual em string a gente coloca  o 0 no começo
//   // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
//   duracaoAtual = duracaoAtual.toString().padStart(2, '0');

//   tempoAtual.innerText = '00:' + duracaoAtual;
// }
