const imagens = document.querySelectorAll(".galeria img");
const lightbox = document.getElementById("lightbox");
const imgGrande = document.getElementById("img-grande");
const fechar = document.getElementById("fechar");
const proximo = document.getElementById("proximo");
const anterior = document.getElementById("anterior");

let indexImg = 0;

if (imagens.length > 0) {
  imagens.forEach((img, i) => {
    img.addEventListener("click", () => {
      indexImg = i;
      mostrarImagem();
      lightbox.style.display = "flex";
      setTimeout(() => {
        lightbox.classList.add("ativo");
      }, 10);
    });
  });
}

function mostrarImagem() {
  if (imgGrande && imagens[indexImg]) {
    imgGrande.src = imagens[indexImg].src;
  }
}

if (proximo) {
  proximo.addEventListener("click", () => {
    indexImg = (indexImg + 1) % imagens.length;
    mostrarImagem();
  });
}

if (anterior) {
  anterior.addEventListener("click", () => {
    indexImg = (indexImg - 1 + imagens.length) % imagens.length;
    mostrarImagem();
  });
}

if (fechar) {
  fechar.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}

if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("ativo");
      setTimeout(() => {
        lightbox.style.display = "none";
      }, 200);
    }
  });
}

const frasesMascote = [
  "Você já visitou a Praia da Alegria hoje?",
  "Presentes aumentam a amizade",
  "Use a câmera, às vezes revela pistas.",
  "Explore tudo, sempre tem um segredo escondido",
  "Na aba presentes você descobre o que você ganha de cada personagem ao presentear!",
  "Dê presentes favoritos para aumentar amizade rápido",
  "Comidas raras têm mais pontos de amizade",
  "Cozinhe sempre que puder, receitas ajudam muito",
  "Minérios raros aparecem mais à noite",
  "Guarde flores coloridas, são usadas em várias missões",
  "Use marcadores de mapa para não se perder",
  "Confira eventos sazonais para itens exclusivos",
  "Peixes raros valem muito em trocas",
  "Misture frutas diferentes para receitas novas",
  "Volte sempre para conversar comigo! 💖",
];

let indexFrase = 0;

function trocarFrase() {
  const balao = document.getElementById("balaoMascote");
  if (!balao) return;

  balao.style.opacity = 0;

  setTimeout(() => {
    balao.textContent = frasesMascote[indexFrase];
    balao.style.opacity = 1;
    indexFrase = (indexFrase + 1) % frasesMascote.length;
  }, 300);
}

setInterval(trocarFrase, 4000);

const mascote = document.getElementById("mascoteGuia");
if (mascote) mascote.addEventListener("click", trocarFrase);
