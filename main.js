/*A declaração const indica que se trata de uma variável que não será alterada
 em nenhuma instância do código.Isso significa que serão sempre quatro botões.
 Vamos declarar a variável const botoes, e atribuir a ela um comando que busca tudo
 que existe a classe botão.Queremos todas as informações relacionadas à classe, 
 por isso utilizaremos o querySelectorAll(), cujo interior dos parênteses receberá um
 .botao entre aspas, assim como nomeamos uma classe.*/

/*Laço de repetição for para adicionar um evento de escuta, principalmente quando os 
botões forem clicados, porque quando houver um clique, ele precisa adicionar a classe ativo no botão clicado.*/ 

/*Entre os parênteses de for(), o primeiro valor a ser adicionado é a declaração da variável i. 
Essa variável vai mudar ao longo do tempo no código, então ela é uma variável do tipo let. 
Vamos iniciá-la com o valor 0.Este laço irá se repetir enquanto i for menor que o comprimento dos botões 
(ou seja, botões.length) e vai incrementar de um por meio do comando i++, que é a mesma coisa que i = i + 1.*/

/*Adicionar um evento de escuta para  realizar uma ação,chamamos de .onClick(). Vamos abrir uma linha entre a 
declaração do for() e  adicionar botoes[i].onclick.*/ 

/*Esse on click, vai perguntar as ações que queremos realizar. E quando agrupamos uma série de comandos, 
criamos uma função.Então, à direita de botoes[i].onclick, adicionaremos um sinal de igual e uma function() 
com um bloco de chaves.Ela só precisa realizar uma tarefa para nós e para essa tarefa, quando ela for ativada, 
o botoes na posição i adicione a classe ativo. Adicionaremos entre as chaves da função um 
botoes[i].classList.add("ativo").*/

/*OBS: Antes de adicionar a classe ativo, poderíamos remover todas as classes ativo de todos os botões
 e só adicionar naquele que desejamos que receba a classe, então diremos ao sistema "remova", faremos um 
 laço de repetição for() dentro das chaves da function(), acima da linha que adiciona a classe.
 Esse laço receberá entre parênteses a variável let j=0, em seguida, adicionaremos o j++.
 Em vez de adicionar, vamos remover. Portanto, adicionaremos entre as chaves do for() um botoes na posição j 
 junto ao .classList.remove("ativo").

const botoes = document.querySelectorAll(".botao");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
    }

const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
let tempoAtual = new Date();

contadores[0].textContent = tempoObjetivo1 - tempoAtual;
