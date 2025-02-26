class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function calcularAltura(raiz) {
  if (!raiz) {
    return 0;
  } else {
    const alturaEsquerda = calcularAltura(raiz.left);
    const alturaDireita = calcularAltura(raiz.right);
    return 1 + Math.max(alturaEsquerda, alturaDireita);
  }
}

const raiz = new Node(1);
raiz.left = new Node(2);
raiz.right = new Node(3);
raiz.left.left = new Node(4);
raiz.left.right = new Node(5);

const altura = calcularAltura(raiz);
console.log(altura);

const raizVazia = null;
const alturaVazia = calcularAltura(raizVazia);
console.log(alturaVazia);