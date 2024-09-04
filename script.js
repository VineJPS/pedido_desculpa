function nao(){
    const buttonNao = document.getElementById('nao');
    const buttonSim = document.getElementById('sim');

    var larguraAtualNao = parseInt(window.getComputedStyle(buttonNao).width);
    var alturaAtualNao = parseInt(window.getComputedStyle(buttonNao).height);

    var novaLarguraNao = larguraAtualNao - 20;
    var novaAlturaNao = alturaAtualNao - 20;

    buttonNao.style.width = novaLarguraNao + "px";
    buttonNao.style.height = novaAlturaNao + "px";

    
    var larguraAtualSim = parseInt(window.getComputedStyle(buttonSim).width);
    var novaLarguraSim = larguraAtualSim + 20;
    buttonSim.style.width = novaLarguraSim + "px";
    
   
   
}