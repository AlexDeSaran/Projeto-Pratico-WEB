function Enviar() {

    var nome = document.getElementById("campo_nome");
    var email = document.getElementById("campo_email");
    var msg = document.getElementById("msg");

    if(nome.value =="" || email.value ==""|| msg.value ==""){
        alert('Campo Vazio, Verificar antes de enviar');
        
    }
    if (nome.value != "" && email.value !="" && msg.value !="") {
        
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }
}
/*
btn.addEventListener('click',()=> {
    alert('Este Botão está funcionando!!')
    
})Função que criei para testar o click do botão enviar*/

/*me senti sem muita confiança para manipular o javascript, por isso fiz uma manipulações básicas de validar o formulario, e um outro evento para click no botão enviar apenas, o projeto possui alguns bugs como é normal de possuir mas no geral fiquei muito feliz de conseguir desenvolver algo em HTML E CSS ja que fazia mais de 8 meses que não usava, o primeiro contato depois de muito tempo um projeto bacana de desenvolver, tentei seguir o mais fielmente possivel o protótipo do documento de layout acredito que o que era para ficar a nosso critério eram as cores apenas o layout deve seguir aquele padrão estipulado, acabei colocando coisas a mais como no caso das descrições dos campos de contato que não tinham no layout original, coloquei apenas para fins estéticos, o menu centralizado possui margens que não aparecem por conta da imagem 1 que coloquei achei mais legal assim*/
