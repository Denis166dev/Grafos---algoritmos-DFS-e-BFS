class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function ehArvoreBinaria(raiz) {
    if (!raiz) return true;

    function isValidNode(node) {
        if (!node) return true;

        if (node.left && !(node.left instanceof Node)) return false;
        if (node.right && !(node.right instanceof Node)) return false;


        return isValidNode(node.left) && isValidNode(node.right);
    }

    return isValidNode(raiz);
}