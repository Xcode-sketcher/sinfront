const botaoTema = document.getElementById("toggle-tema");
const body = document.body;
const seta = document.querySelector(".seta"); // seleciona a imagem da seta

// Função para abrir/fechar os textos do FAQ
function toggleTexto(index) {
  const textos = document.querySelectorAll(".conteudo");
  const texto = textos[index];
  texto.style.display = texto.style.display === "block" ? "none" : "block";
}
// Alterna o modo escuro/claro
  botaoTema.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  const modoEscuro = body.classList.contains("dark-mode");

  // Atualiza texto do botão
  botaoTema.textContent = modoEscuro ? "☀️" : "🌙";

  // Troca a imagem da seta conforme o modo
  seta.src = modoEscuro ? "img/setaDark.png" : "img/seta.png";
});

// --------------------ACESSIBILIDADE


let tamanhoFonte = 100;

  const aumentar = document.getElementById("aumentar-fonte");
  const diminuir = document.getElementById("diminuir-fonte");
  const contraste = document.getElementById("contraste");

  // aumentar.addEventListener("click", () => {
  //   tamanhoFonte += 10;
  //   document.body.style.fontSize = tamanhoFonte + "%";
  // });

  aumentar.addEventListener("click", () => {
    tamanhoFonte += 3;
    document.querySelectorAll("*").forEach((el) => {
      el.style.fontSize = tamanhoFonte + "%";
    });
  });

  diminuir.addEventListener("click", () => {
    tamanhoFonte -= 3;
    document.querySelectorAll("*").forEach((el) => {
      el.style.fontSize = tamanhoFonte + "%";
    });
  });

  contraste.addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
  });


  // Navegação 
  //================
  // 1. Seleciona a div de navegação e o contêiner de opções
const navegacao = document.querySelector('.navegacao ul');
const conteudos = document.querySelectorAll('.conteudo-config');
const itensMenu = document.querySelectorAll('.navegacao ul li');

// 2. Adiciona um "ouvinte de evento" (event listener) para toda a lista de navegação
navegacao.addEventListener('click', (evento) => {
    // Garante que o clique foi em um item <li>
    if (evento.target.tagName === 'LI') {
        const idItemClicado = evento.target.id; // Ex: 'nav-visao-geral'
        
        // Remove a classe 'selecionado' de todos os itens do menu
        itensMenu.forEach(item => {
            item.classList.remove('selecionado');
        });

        // Adiciona a classe 'selecionado' ao item clicado
        evento.target.classList.add('selecionado');

        // Determina o ID do conteúdo alvo
        // Trocamos 'nav-' por 'conteudo-'
        const idConteudoAlvo = idItemClicado.replace('nav', 'conteudo'); 

        // 3. Itera sobre todos os conteúdos
        conteudos.forEach((conteudo) => {
            // 4. Remove a classe 'ativo' de todos os conteúdos
            conteudo.classList.remove('ativo');
            
            // 5. Se o ID do conteúdo atual for o alvo, adiciona a classe 'ativo' para mostrá-lo
            if (conteudo.id === idConteudoAlvo) {
                conteudo.classList.add('ativo');
            }
        });
    }
});

// Inicialização: Marca o primeiro item como selecionado ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const primeiroItem = document.getElementById('nav-visao-geral');
    if (primeiroItem) {
        primeiroItem.classList.add('selecionado');
    }
});