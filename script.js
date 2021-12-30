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


