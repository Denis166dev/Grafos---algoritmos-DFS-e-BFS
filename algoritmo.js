/**
 * Representação de um Grafo usando Lista de Adjacências.
 */
class Grafo {
  constructor() {
    this.adjList = new Map(); // Mapa para armazenar a lista de adjacência de cada vértice
  }

  /**
   * Adiciona um vértice ao grafo.
   * @param {any} vertice O vértice a ser adicionado.
   */
  adicionarVertice(vertice) {
    if (!this.adjList.has(vertice)) {
      this.adjList.set(vertice, []); // Inicializa a lista de adjacência para o vértice
    }
  }

  /**
   * Adiciona uma aresta não-direcionada entre dois vértices.
   * @param {any} vertice1 O primeiro vértice.
   * @param {any} vertice2 O segundo vértice.
   */
  adicionarAresta(vertice1, vertice2) {
    this.adjList.get(vertice1).push(vertice2); // Adiciona vertice2 à lista de adjacência de vertice1
    this.adjList.get(vertice2).push(vertice1); // Adiciona vertice1 à lista de adjacência de vertice2 (grafo não-direcionado)
  }

  /**
   * Implementação do algoritmo Depth-First Search (DFS).
   * @param {any} verticeInicial O vértice de início da busca.
   * @param {function} visitarFuncao Uma função para processar cada vértice visitado.
   * @returns {Array} Uma lista com os vértices visitados na ordem em que foram descobertos.
   */
  DFS(verticeInicial, visitarFuncao = console.log) {
    const visitados = new Set(); // Conjunto para rastrear os vértices visitados
    const resultado = [];      // Array para armazenar a ordem de visita dos vértices

    /**
     * Função recursiva para realizar a busca em profundidade a partir de um vértice.
     * @param {any} vertice O vértice atual.
     */
    const dfsRecursivo = (vertice) => {
      visitados.add(vertice);   // Marca o vértice como visitado
      resultado.push(vertice);  // Adiciona o vértice à lista de resultados
      visitarFuncao(vertice); // Processa o vértice (por padrão, imprime no console)

      const vizinhos = this.adjList.get(vertice); // Obtém os vizinhos do vértice atual

      // Percorre os vizinhos do vértice atual
      for (const vizinho of vizinhos) {
        if (!visitados.has(vizinho)) {
          dfsRecursivo(vizinho); // Chama recursivamente o DFS para o vizinho não visitado
        }
      }
    };

    dfsRecursivo(verticeInicial); // Inicia a busca DFS a partir do vértice inicial
    return resultado; // Retorna a lista de vértices visitados.
  }

  /**
   * Implementação do algoritmo Breadth-First Search (BFS).
   * @param {any} verticeInicial O vértice de início da busca.
   * @param {function} visitarFuncao Uma função para processar cada vértice visitado.
   * @returns {Array} Uma lista com os vértices visitados na ordem em que foram descobertos.
   */
  BFS(verticeInicial, visitarFuncao = console.log) {
    const visitados = new Set();   // Conjunto para rastrear os vértices visitados
    const fila = [verticeInicial]; // Fila para armazenar os vértices a serem visitados
    const resultado = [];          // Array para armazenar a ordem de visita dos vértices

    visitados.add(verticeInicial); // Marca o vértice inicial como visitado

    // Enquanto a fila não estiver vazia
    while (fila.length > 0) {
      const vertice = fila.shift(); // Remove o primeiro vértice da fila
      resultado.push(vertice);       // Adiciona o vértice à lista de resultados
      visitarFuncao(vertice);      // Processa o vértice (por padrão, imprime no console)

      const vizinhos = this.adjList.get(vertice); // Obtém os vizinhos do vértice atual

      // Percorre os vizinhos do vértice atual
      for (const vizinho of vizinhos) {
        if (!visitados.has(vizinho)) {
          visitados.add(vizinho); // Marca o vizinho como visitado
          fila.push(vizinho);    // Adiciona o vizinho à fila
        }
      }
    }
    return resultado; // Retorna a lista de vértices visitados.
  }

  /**
   * Imprime o grafo no console, mostrando a lista de adjacência de cada vértice.
   */
  imprimirGrafo() {
    for (const vertice of this.adjList.keys()) {
      console.log(vertice + " -> " + this.adjList.get(vertice).join(", "));
    }
  }
}

// Criando um grafo com mais de 40 vértices (exemplo de uma rede social simplificada)
const grafoRedeSocial = new Grafo();
grafoRedeSocial.adicionarVertice("Alice");
grafoRedeSocial.adicionarVertice("Bob");
grafoRedeSocial.adicionarVertice("Charlie");
grafoRedeSocial.adicionarVertice("David");
grafoRedeSocial.adicionarVertice("Eve");
grafoRedeSocial.adicionarVertice("Fiona");
grafoRedeSocial.adicionarVertice("George");
grafoRedeSocial.adicionarVertice("Hannah");
grafoRedeSocial.adicionarVertice("Isaac");
grafoRedeSocial.adicionarVertice("Jack");
grafoRedeSocial.adicionarVertice("Kelly");
grafoRedeSocial.adicionarVertice("Liam");
grafoRedeSocial.adicionarVertice("Mia");
grafoRedeSocial.adicionarVertice("Noah");
grafoRedeSocial.adicionarVertice("Olivia");
grafoRedeSocial.adicionarVertice("Peter");
grafoRedeSocial.adicionarVertice("Quinn");
grafoRedeSocial.adicionarVertice("Ryan");
grafoRedeSocial.adicionarVertice("Sophia");
grafoRedeSocial.adicionarVertice("Thomas");
grafoRedeSocial.adicionarVertice("Uma");
grafoRedeSocial.adicionarVertice("Victor");
grafoRedeSocial.adicionarVertice("Willow");
grafoRedeSocial.adicionarVertice("Xander");
grafoRedeSocial.adicionarVertice("Yara");
grafoRedeSocial.adicionarVertice("Zachary");
grafoRedeSocial.adicionarVertice("Amy");
grafoRedeSocial.adicionarVertice("Ben");
grafoRedeSocial.adicionarVertice("Chloe");
grafoRedeSocial.adicionarVertice("Daniel");
grafoRedeSocial.adicionarVertice("Emily");
grafoRedeSocial.adicionarVertice("Finn");
grafoRedeSocial.adicionarVertice("Grace");
grafoRedeSocial.adicionarVertice("Henry");
grafoRedeSocial.adicionarVertice("Isla");
grafoRedeSocial.adicionarVertice("Jacob");
grafoRedeSocial.adicionarVertice("Lily");
grafoRedeSocial.adicionarVertice("Mason");
grafoRedeSocial.adicionarVertice("Nora");
grafoRedeSocial.adicionarVertice("Owen");
grafoRedeSocial.adicionarVertice("Penny");


grafoRedeSocial.adicionarAresta("Alice", "Bob");
grafoRedeSocial.adicionarAresta("Alice", "Charlie");
grafoRedeSocial.adicionarAresta("Bob", "David");
grafoRedeSocial.adicionarAresta("Bob", "Eve");
grafoRedeSocial.adicionarAresta("Charlie", "Fiona");
grafoRedeSocial.adicionarAresta("David", "George");
grafoRedeSocial.adicionarAresta("Eve", "Hannah");
grafoRedeSocial.adicionarAresta("Fiona", "Isaac");
grafoRedeSocial.adicionarAresta("George", "Jack");
grafoRedeSocial.adicionarAresta("Hannah", "Kelly");
grafoRedeSocial.adicionarAresta("Isaac", "Liam");
grafoRedeSocial.adicionarAresta("Jack", "Mia");
grafoRedeSocial.adicionarAresta("Kelly", "Noah");
grafoRedeSocial.adicionarAresta("Liam", "Olivia");
grafoRedeSocial.adicionarAresta("Mia", "Peter");
grafoRedeSocial.adicionarAresta("Noah", "Quinn");
grafoRedeSocial.adicionarAresta("Olivia", "Ryan");
grafoRedeSocial.adicionarAresta("Peter", "Sophia");
grafoRedeSocial.adicionarAresta("Quinn", "Thomas");
grafoRedeSocial.adicionarAresta("Ryan", "Uma");
grafoRedeSocial.adicionarAresta("Sophia", "Victor");
grafoRedeSocial.adicionarAresta("Thomas", "Willow");
grafoRedeSocial.adicionarAresta("Uma", "Xander");
grafoRedeSocial.adicionarAresta("Victor", "Yara");
grafoRedeSocial.adicionarAresta("Willow", "Zachary");
grafoRedeSocial.adicionarAresta("Xander", "Amy");
grafoRedeSocial.adicionarAresta("Yara", "Ben");
grafoRedeSocial.adicionarAresta("Zachary", "Chloe");
grafoRedeSocial.adicionarAresta("Amy", "Daniel");
grafoRedeSocial.adicionarAresta("Ben", "Emily");
grafoRedeSocial.adicionarAresta("Chloe", "Finn");
grafoRedeSocial.adicionarAresta("Daniel", "Grace");
grafoRedeSocial.adicionarAresta("Emily", "Henry");
grafoRedeSocial.adicionarAresta("Finn", "Isla");
grafoRedeSocial.adicionarAresta("Grace", "Jacob");
grafoRedeSocial.adicionarAresta("Henry", "Lily");
grafoRedeSocial.adicionarAresta("Isla", "Mason");
grafoRedeSocial.adicionarAresta("Jacob", "Nora");
grafoRedeSocial.adicionarAresta("Lily", "Owen");
grafoRedeSocial.adicionarAresta("Mason", "Penny");

// Exemplo de uso:

console.log("Grafo (Lista de Adjacência):");
grafoRedeSocial.imprimirGrafo();

console.log("\nDFS a partir de Alice:");
const dfsResultado = grafoRedeSocial.DFS("Alice");
console.log("Ordem de visita DFS:", dfsResultado);

console.log("\nBFS a partir de Alice:");
const bfsResultado = grafoRedeSocial.BFS("Alice");
console.log("Ordem de visita BFS:", bfsResultado);


// Exemplo de uso com função de visita customizada:
console.log("\nBFS a partir de Alice com visita customizada:");
grafoRedeSocial.BFS("Alice", (vertice) => {
    console.log(`Visitando: ${vertice.toUpperCase()}`);
});