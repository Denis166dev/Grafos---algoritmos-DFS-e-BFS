/*Implemente um Algoritmo DFS em qualquer linguagem de sua preferencia comentando e
 testando o código com um grafo real de no mínimo 40 vértices*/
class Graph {
    // Construtor da classe Graph
    constructor() {
        this.adjList = new Map();
    }

    // Adiciona um vértice ao grafo.
    addVertex(vertex) {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, []);
        }
    }

    // Adiciona uma aresta não direcionada entre dois vértices.
    addEdge(v1, v2) {
        this.adjList.get(v1).push(v2);
        this.adjList.get(v2).push(v1);
    }

    // Implementação do algoritmo DFS (Depth-First Search).
    dfs(start) {
        const visited = new Set();

        const dfsRecursive = (vertex) => {
            visited.add(vertex);
            console.log(vertex);

            for (let neighbor of this.adjList.get(vertex)) {
                if (!visited.has(neighbor)) {
                    dfsRecursive(neighbor);
                }
            }
        };

        dfsRecursive(start);
    }

    // Método para imprimir o grafo (lista de adjacências).
    printGraph() {
        for (let vertex of this.adjList.keys()) {
            console.log(vertex + " -> " + this.adjList.get(vertex).join(", "));
        }
    }
}

// Cria uma nova instância do grafo.
const graph = new Graph();
// Lista de Países (vértices do grafo).
const countries = [
    "Brasil", "Argentina", "Uruguai", "Paraguai", "Chile", "Bolívia", "Peru", "Equador", "Colômbia", "Venezuela",
    "Guiana", "Suriname", "França (Guiana Francesa)", "Panamá", "Costa Rica", "Nicarágua", "Honduras", "El Salvador", "Guatemala", "México",
    "Canadá", "Estados Unidos", "Groenlândia (Dinamarca)", "Cuba", "Haiti", "República Dominicana", "Jamaica", "Porto Rico (EUA)", "Bahamas", "Trinidad e Tobago",
    "Reino Unido", "França", "Espanha", "Portugal", "Itália", "Alemanha", "Polônia", "Ucrânia", "Romênia", "Suécia",
    "Noruega", "Finlândia", "Rússia", "China", "Japão", "Índia" //Adicionando +6 paises para garantir os 40+ vertices
];

// Adiciona cada país como um vértice no grafo.
countries.forEach(country => graph.addVertex(country));

// Cria arestas aleatórias entre os países.
for (let i = 0; i < countries.length; i++) {
    for (let j = i + 1; j < countries.length; j++) {
        if (Math.random() > 0.7) {
            graph.addEdge(countries[i], countries[j]);
        }
    }
}

// Imprime o grafo (opcional, para verificar as conexões).
console.log("Grafo dos Países (lista de adjacências):");
graph.printGraph();

// Executa o algoritmo DFS a partir do país "Brasil".
console.log("\nDFS a partir do Brasil:");
graph.dfs("Brasil");