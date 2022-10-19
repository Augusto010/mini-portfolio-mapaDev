/* 
    OBJETIVO - mostrar o conteudo da aba clicada e esconder o da aba anterior

    passo 1- dar um jeito de pegar os elementos que representam a aba no HTML

    passo 2 - dar um jeito de identificar o clique no elemento aba

    passo 3 - quando o usuario clicar, desmarcar a aba selecionada

    passo 4 - marcar a aba clicada como selecionado

    passo 5 - esconder o conteudo anterior

    passo 6 - mostrar o conteudo da aba selecionada

*/

//dar um jeito de pegar os elementod que representam as abas no HTML
const abas = document.querySelectorAll(".aba");

//dar um jeito de identificar o clique no elemento aba
abas.forEach(aba => {
    aba.addEventListener("click", function(){

        if(aba.classList.contains("selecionada")){
            return;
        }

        selecionarAba(aba)

        mostrarInformacoesDaAba(aba)
    })
})

function selecionarAba(aba){ 
    //quando o usuario clicar, desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionada");
    abaSelecionada.classList.remove("selecionada");

    //marcar a aba clicada como selecionado
    aba.classList.add("selecionada");
}

function mostrarInformacoesDaAba(aba){
    //esconder o conteudo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionada");
    informacaoSelecionada.classList.remove("selecionada");

    // mostrar o conteudo da aba selecionada
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;
    const indformacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
    indformacaoASerMostrada.classList.add("selecionada");
}