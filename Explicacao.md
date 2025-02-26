# Explicação Detalhada do Código

## Classe Grafo

*   **`constructor()`**: Inicializa um novo grafo com um `Map` chamado `adjList`. Este `Map` armazena a lista de adjacência para cada vértice do grafo. A chave do `Map` é o vértice, e o valor é um array contendo todos os vértices adjacentes a ele.

*   **`adicionarVertice(vertice)`**: Adiciona um novo vértice ao grafo. Se o vértice já existir, nada acontece. Se não, ele cria uma nova entrada no `adjList` com o vértice como chave e um array vazio como valor (inicializando a lista de adjacência).

*   **`adicionarAresta(vertice1, vertice2)`**: Adiciona uma aresta (conexão) entre dois vértices no grafo. Como este é um grafo não direcionado, a aresta é adicionada nas duas direções:
    *   `vertice2` é adicionado à lista de adjacência de `vertice1`.
    *   `vertice1` é adicionado à lista de adjacência de `vertice2`.

*   **`DFS(verticeInicial, visitarFuncao)`**: Implementa o algoritmo Depth-First Search (DFS).
    *   `visitados`: Um `Set` para manter o controle de quais vértices já foram visitados durante a busca. Isso evita loops infinitos.
    *   `resultado`: Um array que armazena a ordem em que os vértices são visitados.
    *   **`dfsRecursivo(vertice)`**: Uma função recursiva que realiza a busca em profundidade a partir de um determinado vértice.
        *   Marca o `vertice` atual como visitado (`visitados.add(vertice)`).
        *   Adiciona o `vertice` ao array `resultado`.
        *   Chama a função `visitarFuncao` com o `vertice` atual (por padrão, esta função apenas imprime o vértice no console).
        *   Obtém a lista de vizinhos do `vertice` atual do `adjList`.
        *   Itera sobre os vizinhos. Para cada vizinho que ainda não foi visitado, chama a função `dfsRecursivo` recursivamente para explorar a partir desse vizinho.
    *   A função `DFS` começa chamando `dfsRecursivo` com o `verticeInicial` para iniciar a busca.
    *   Retorna o array `resultado` contendo a ordem dos vértices visitados.

*   **`BFS(verticeInicial, visitarFuncao)`**: Implementa o algoritmo Breadth-First Search (BFS).
    *   `visitados`: Um `Set` para rastrear os vértices visitados.
    *   `fila`: Uma fila (`Array` usado como fila) para armazenar os vértices que precisam ser visitados. Os vértices são adicionados ao final da fila e removidos do início.
    *   `resultado`: Um array para armazenar a ordem em que os vértices são visitados.
    *   A função primeiro marca o `verticeInicial` como visitado e o adiciona à fila.
    *   Enquanto a fila não estiver vazia, a função:
        *   Remove o primeiro vértice da fila (`fila.shift()`).
        *   Adiciona este vértice ao array `resultado`.
        *   Chama a função `visitarFuncao` com o vértice.
        *   Obtém a lista de vizinhos do vértice atual.
        *   Itera sobre os vizinhos. Se um vizinho ainda não foi visitado, ele é marcado como visitado e adicionado à fila.
    *   Retorna o array `resultado`.

*   **`imprimirGrafo()`**: Imprime o grafo no console formatado como uma lista de adjacências para fácil visualização.

## Criação do Grafo de Rede Social

*   `grafoRedeSocial = new Grafo()`: Cria uma instância da classe `Grafo`.

*   `grafoRedeSocial.adicionarVertice(...)`: Adiciona mais de 40 vértices ao grafo, representando pessoas em uma rede social.

*   `grafoRedeSocial.adicionarAresta(...)`: Adiciona arestas entre os vértices, representando as conexões (amizades) entre as pessoas na rede social.

## Exemplos de Uso

*   `grafoRedeSocial.imprimirGrafo()`: Imprime a representação do grafo no console.

*   `grafoRedeSocial.DFS("Alice")`: Executa o algoritmo DFS a partir do vértice "Alice" e imprime a ordem em que os vértices foram visitados.

*   `grafoRedeSocial.BFS("Alice")`: Executa o algoritmo BFS a partir do vértice "Alice" e imprime a ordem em que os vértices foram visitados.

*   **Exemplo de Uso com Função de Visita Customizada:** Demonstra como passar uma função customizada para BFS ou DFS. Neste exemplo, a função converte o nome do vértice para maiúsculas antes de imprimi-lo.
