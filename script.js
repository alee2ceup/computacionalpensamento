// script.js

const avanca = document.querySelectorAll('.btn-next');

// Função para alterar o fundo com base no ID do botão
const mudarImagemFundo = (id) => {
  let novaImagem;

  // Define a imagem de fundo de acordo com o ID do botão
  switch (id) {
    case 'bg1':
      novaImagem = 'url("assets/bg1.jpg")';
      break;
    case 'bg2':
      novaImagem = 'url("assets/bg2.png")';
      break;
    case 'bg3':
        novaImagem = 'url("assets/riotwo.png")';
        break;
    case 'bg4':
        novaImagem = 'url("assets/fimzero.png")';
        break;
    default:
      novaImagem = 'url("assets/bg0.png")'; // Valor padrão
      break;
  }

  // Aplica a nova imagem de fundo ao body
  document.body.style.backgroundImage = novaImagem;
};

avanca.forEach(button => {
  button.addEventListener('click', function() {
    const atual = document.querySelector('.ativo');
    const nextPass = 'pass-' + this.getAttribute('data-next');

    // Altera a imagem de fundo de acordo com o ID do botão
    mudarImagemFundo(this.id);


    // Troca a classe 'ativo' para a próxima passagem
    atual.classList.remove('ativo');
    document.getElementById(nextPass).classList.add('ativo');
  });
});


