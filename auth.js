if (localStorage.usuario){
    var botao = document.querySelector('#botao');
    botao.innerText = localStorage.usuario;
}
else{
    alert('Acesso Negado');
}