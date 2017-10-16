var botao = document.getElementById("botao");
var modal = document.getElementById("modal");
var fundo = document.getElementById("fundo");
var botao_fechar = document.getElementById("botao_fechar");


console.log(botao);


botao.onclick = function(){
    console.log("Cliquei");
  //  modal.classList.add("visivel");   //se abre fundo, abre modal também, então é redundante. para deixar uma linha apenas de comando, retirar display none de modal
    fundo.classList.add("visivel");


}

botao_fechar.onclick = function(){
   
  //  modal.classList.remove("visivel");
    fundo.classList.remove("visivel");
    

}

fundo.onclick =  function(e){
    if (e.target == fundo)  // só fecha se clicar no fundo, se clicar no modal não fecha
 {   modal.classList.remove("visivel"); 
   fundo.classList.remove("visivel");
}
 
 
}