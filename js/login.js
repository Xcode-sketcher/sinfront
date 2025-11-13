
const btnLogin = document.querySelector(".btn-login");

  btnLogin.addEventListener("click", (e) => {
    e.preventDefault(); 

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("password").value.trim();

    let msg = document.querySelector(".mensagem");
    if (!msg) {
      msg = document.createElement("p");
      msg.classList.add("mensagem");
      document.querySelector(".login-box").appendChild(msg);
    }

    // Validação
    if (email === "" || senha === "") {
      msg.textContent = "Por favor, preencha todos os campos.";
      msg.style.color = "red";
      return;
    }

    
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      msg.textContent = "Digite um e-mail válido.";
      msg.style.color = "red";
      return;
    }

    msg.textContent = "Login realizado com sucesso!";
    msg.style.color = "green";

    setTimeout(() => {
      window.location.href = "./index-logado.html"; 
    }, 1500);
  });

// Mostrar / ocultar senha com ícone
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");
const eyeOpen = document.getElementById("eyeOpen");
const eyeClosed = document.getElementById("eyeClosed");

togglePassword.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";

  passwordInput.type = isPassword ? "text" : "password";

  // Alternar ícones
  eyeOpen.style.display = isPassword ? "none" : "block";
  eyeClosed.style.display = isPassword ? "block" : "none";

//    Acessibilidade
//   togglePassword.setAttribute("aria-pressed", isPassword);
//   togglePassword.setAttribute(
//     "aria-label",
//     isPassword ? "Ocultar senha" : "Mostrar senha"
//   );
});
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
  new window.VLibras.Widget("https://vlibras.gov.br/app"); //Vlibras

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

 