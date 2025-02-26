class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function excluirParesBST(raiz) {
  if (!raiz) return null;

  raiz.left = excluirParesBST(raiz.left);
  raiz.right = excluirParesBST(raiz.right);

  if (raiz.data % 2 === 0) {
    if (!raiz.left && !raiz.right) return null;
    else if (!raiz.left) return raiz.right;
    else if (!raiz.right) return raiz.left;
    else {
      let sucessor = encontrarMinimo(raiz.right);
      raiz.data = sucessor.data;
      raiz.right = excluirNo(raiz.right, sucessor.data);
    }
  }

  return raiz;
}

function encontrarMinimo(raiz) {
  let atual = raiz;
  while (atual.left) {
    atual = atual.left;
  }
  return atual;
}

function excluirNo(raiz, chave) {
    if (!raiz) return null;

    if (chave < raiz.data) {
        raiz.left = excluirNo(raiz.left, chave);
    } else if (chave > raiz.data) {
        raiz.right = excluirNo(raiz.right, chave);
    } else {
        if (!raiz.left && !raiz.right) {
            return null;
        } else if (!raiz.left) {
            return raiz.right;
        } else if (!raiz.right) {
            return raiz.left;
        } else {
            let sucessor = encontrarMinimo(raiz.right);
            raiz.data = sucessor.data;
            raiz.right = excluirNo(raiz.right, sucessor.data);
        }
    }

    return raiz;
}

const raiz = new Node(4);
raiz.left = new Node(2);
raiz.right = new Node(6);
raiz.left.left = new Node(1);
raiz.left.right = new Node(3);
raiz.right.left = new Node(5);
raiz.right.right = new Node(7);

const novaRaiz = excluirParesBST(raiz);

function inOrder(raiz) {
    if (raiz) {
        inOrder(raiz.left);
        console.log(raiz.data);
        inOrder(raiz.right);
    }
}
inOrder(novaRaiz)