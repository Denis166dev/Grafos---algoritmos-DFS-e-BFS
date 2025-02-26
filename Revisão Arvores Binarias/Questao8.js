class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function buscarMaior(raiz) {
  if (!raiz) return null;
  let maior = raiz.data;
  const maiorEsquerda = buscarMaior(raiz.left);
  const maiorDireita = buscarMaior(raiz.right);

  if (maiorEsquerda !== null && maiorEsquerda > maior) maior = maiorEsquerda;
  if (maiorDireita !== null && maiorDireita > maior) maior = maiorDireita;

  return maior;
}