class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function contarNosNaoFolha(raiz) {
  if (!raiz) {
    return 0;
  } else if (!raiz.left && !raiz.right) {
    return 0;
  } else {
    return 1 + contarNosNaoFolha(raiz.left) + contarNosNaoFolha(raiz.right);
  }
}

const raiz = new Node(1);
raiz.left = new Node(2);
raiz.right = new Node(3);
raiz.left.left = new Node(4);
raiz.left.right = new Node(5);

const numeroDeNosNaoFolha = contarNosNaoFolha(raiz);
console.log(numeroDeNosNaoFolha);

const raizUnica = new Node(10);
const numeroDeNosNaoFolhaUnica = contarNosNaoFolha(raizUnica);
console.log(numeroDeNosNaoFolhaUnica);

const raizVazia = null;
const numeroDeNosNaoFolhaVazia = contarNosNaoFolha(raizVazia);
console.log(numeroDeNosNaoFolhaVazia);