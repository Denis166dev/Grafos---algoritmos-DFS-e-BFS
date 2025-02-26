class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function contarNosFolha(raiz) {
  if (!raiz) {
    return 0;
  } else if (!raiz.left && !raiz.right) {
    return 1;
  } else {
    return contarNosFolha(raiz.left) + contarNosFolha(raiz.right);
  }
}

const raiz = new Node(1);
raiz.left = new Node(2);
raiz.right = new Node(3);
raiz.left.left = new Node(4);
raiz.left.right = new Node(5);

const numeroDeNosFolha = contarNosFolha(raiz);
console.log(numeroDeNosFolha);

const raizUnica = new Node(10);
const numeroDeNosFolhaUnica = contarNosFolha(raizUnica);
console.log(numeroDeNosFolhaUnica);

const raizVazia = null;
const numeroDeNosFolhaVazia = contarNosFolha(raizVazia);
console.log(numeroDeNosFolhaVazia);