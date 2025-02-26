class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function buscarMaior(raiz) {
  if (!raiz) {
    return null;
  }

  let maior = raiz.data;

  const maiorEsquerda = buscarMaior(raiz.left);
  if (maiorEsquerda !== null && maiorEsquerda > maior) {
    maior = maiorEsquerda;
  }

  const maiorDireita = buscarMaior(raiz.right);
  if (maiorDireita !== null && maiorDireita > maior) {
    maior = maiorDireita;
  }

  return maior;
}

const raiz = new Node(5);
raiz.left = new Node(2);
raiz.right = new Node(8);
raiz.left.left = new Node(1);
raiz.left.right = new Node(4);

const maiorNumero = buscarMaior(raiz);
console.log(maiorNumero);

const raizVazia = null;
const maiorNumeroVazia = buscarMaior(raizVazia);
console.log(maiorNumeroVazia);