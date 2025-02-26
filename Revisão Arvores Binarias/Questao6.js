class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function buscarImpar(raiz) {
  if (!raiz) {
    return null;
  }

  if (raiz.data % 2 !== 0) {
    return raiz.data;
  }

  const imparEsquerda = buscarImpar(raiz.left);
  if (imparEsquerda) {
    return imparEsquerda;
  }

  const imparDireita = buscarImpar(raiz.right);
  if (imparDireita) {
    return imparDireita;
  }

  return null;
}

const raiz = new Node(2);
raiz.left = new Node(4);
raiz.right = new Node(3);
raiz.left.left = new Node(6);
raiz.left.right = new Node(5);

const imparEncontrado = buscarImpar(raiz);
console.log(imparEncontrado); // Output: 3

const raizSemImpar = new Node(2);
raizSemImpar.left = new Node(4);
raizSemImpar.right = new Node(6);

const imparNaoEncontrado = buscarImpar(raizSemImpar);
console.log(imparNaoEncontrado); // Output: null

const raizVazia = null;
const imparRaizVazia = buscarImpar(raizVazia);
console.log(imparRaizVazia); // Output: null