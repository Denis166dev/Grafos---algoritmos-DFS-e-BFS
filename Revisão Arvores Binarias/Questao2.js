class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function contarNos(raiz) {
  if (!raiz) {
    return 0;
  } else {
    return 1 + contarNos(raiz.left) + contarNos(raiz.right);
  }
}

// Exemplo:
const raiz = new Node(1);
raiz.left = new Node(2);
raiz.right = new Node(3);
raiz.left.left = new Node(4);
raiz.left.right = new Node(5);

const numeroDeNos = contarNos(raiz);
console.log(numeroDeNos); // Output: 5

const raizVazia = null;
const numeroDeNosVazia = contarNos(raizVazia);
console.log(numeroDeNosVazia); // Output: 0