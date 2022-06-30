// Criando a classe de grafos 
class Graph {
    constructor(QVertices) {
        this.noOfVertices = QVertices
        this.AdjList = {}
    }

    newVertice(v) {
        this.AdjList[v] = new Map()
    }

    newEdge(v, w, d) {
        this.AdjList[v].set(w,d)
        this.AdjList[w].set(v,d)
    }

    bfs(start, end) {
        const queue = []
        const visited = []
        for (i in this.AdjList)
            visited[i] = false
        visited[start] = true
        queue.push([start])
        while (queue.length > 0) {
            const path = queue.shift()
            const node = path[path.length-1]
            if (node === end) {
                return path
            }
            for (const adjascent of this.AdjList[node].keys()) {
                if(visited[adjascent] == false) {
                    const new_path = [...path]
                    new_path.push(adjascent)
                    queue.push(new_path)
                    visited[adjascent] = true;
                }
            }
        }
    }

    minDistance(dist,sptSet) {
        let min = Number.MAX_VALUE;
        let min_index = -1;
        
        for(let v in this.AdjList) {
            if (sptSet[v] == false && dist[v] <= min) {
                min = dist[v];
                min_index = v;
            }
        }
        return min_index;
    }

    dijkstra(src, end) {
        let path = {};
        let dist = new Array(this.noOfVertices);
        let sptSet = new Array(this.noOfVertices);
        
        for(var i in this.AdjList) {
            dist[i] = Number.MAX_VALUE;
            sptSet[i] = false;
            path[i] = new Map()
        }
        
        dist[src] = 0; 
        for(let count = 0; count < this.noOfVertices; count++) {
            let u = this.minDistance(dist, sptSet);
            
            sptSet[u] = true;

            for(let v in this.AdjList) {
                if (!sptSet[v] && dist[u] != Number.MAX_VALUE && dist[u] + this.AdjList[u].get(v) < dist[v]) {
                    dist[v] = dist[u] + this.AdjList[u].get(v);
                    path[v].set(u,dist[v])
                    if(v == end)
                        break
                }
            }
        }
        let pathEnd = new Map()
        
        var vetChaves = []
        var vetValores = []
        vetChaves.push(end)
        let chaves = path[end].keys().next().value
        var valores = path[end].values().next().value
        while (chaves != src) {
            vetValores.push(valores)
            vetChaves.push(chaves)
            valores = path[chaves].values().next().value
            chaves = path[chaves].keys().next().value
        }
        vetValores.push(valores)
        vetChaves.push(src)
        
        pathEnd.set(vetChaves[vetChaves.length-1],0)
        for(i=vetValores.length-1;i>=0;i--) {
            pathEnd.set(vetChaves[i], vetValores[i])
        }
        return pathEnd
    }
}

// Adicionando vértices e arestas no Grafo ("Base de dados")
var G = new Graph(73);
const vertices = ["Paris", "Lyon", "Marselha", "Montpellier", "Nice", "Bordéus", "Rennes", "Milão", "Bolonha", "Florença", "Roma", "Nápoles", "Bari", "Catânia", "Veneza", "Munique", "Frankfurt", "Colônia", "Hamburgo", "Berlim", "Madrid", "Pamplona", "Santander", "Santiago de Compostela", "Lisboa", "Málaga", "Sevilha", "Valência", "Barcelona", "Porto", "Faro", "Berna", "Copenhage", "Oslo", "Estocolmo", "Bergen", "Östersund", "Trondheim", "Kiruna", "Bruxelas", "Amsterdã", "Londres", "Penzance", "Bristol", "Holyhead", "Birmingham", "Edimburgo", "Glasgow", "Aberdeen", "Talín", "Tartu", "Riga", "Vilnius", "Dunaburgo", "Klaipėda", "Białystok", "Varsóvia", "Gdansk", "Praga", "Viena", "Budapeste", "Liubliana", "Zagrebe", "Belgrado", "Bucareste", "Split", "Sófia", "Escópia", "Istambul", "Tessalônica", "Atenas", "Pátras", "Ancara"];

for (var i = 0; i < vertices.length; i++) {
    G.newVertice(vertices[i]);
}

G.newEdge('Paris', 'Rennes', 2.0);
G.newEdge('Paris', 'Bordéus', 3.0);
G.newEdge('Paris', 'Lyon', 1.92);
G.newEdge('Paris', 'Frankfurt', 3.92);
G.newEdge('Bordéus', 'Lyon', 6.25);
G.newEdge('Lyon', 'Marselha', 1.67);
G.newEdge('Marselha', 'Montpellier', 2.33);
G.newEdge('Marselha', 'Nice', 2.59);
G.newEdge('Nice', 'Milão', 5.2);
G.newEdge('Milão', 'Veneza', 2.59);
G.newEdge('Milão', 'Bolonha', 1);
G.newEdge('Milão', 'Munique', 7.75);
G.newEdge('Bolonha', 'Florença', 0.37);
G.newEdge('Florença', 'Veneza', 2.05);
G.newEdge('Florença', 'Roma', 1.58);
G.newEdge('Roma', 'Bari', 4);
G.newEdge('Roma', 'Nápoles', 1.17);
G.newEdge('Nápoles', 'Catânia', 7.5);
G.newEdge('Munique', 'Frankfurt', 3.12);
G.newEdge('Munique', 'Berlim', 5.75);
G.newEdge('Munique', 'Hamburgo', 5.83);
G.newEdge('Frankfurt', 'Colônia', 1.37);
G.newEdge('Frankfurt', 'Hamburgo', 3.67);
G.newEdge('Colônia', 'Berlim', 4.33);
G.newEdge('Berlim', 'Hamburgo', 1.58);
G.newEdge('Madrid', 'Bordéus', 11);
G.newEdge('Madrid', 'Pamplona', 3);
G.newEdge('Madrid', 'Santander', 4.5);
G.newEdge('Madrid', 'Santiago de Compostela', 7.08);
G.newEdge('Madrid', 'Lisboa', 10.17);
G.newEdge('Madrid', 'Málaga', 2.75);
G.newEdge('Madrid', 'Sevilha', 2.58);
G.newEdge('Madrid', 'Málaga', 2.75);
G.newEdge('Madrid', 'Valência', 1.75);
G.newEdge('Madrid', 'Barcelona', 2.83);
G.newEdge('Valência', 'Barcelona', 2.92);
G.newEdge('Montpellier', 'Barcelona', 4.67);
G.newEdge('Barcelona', 'Sevilha', 5.5);
G.newEdge('Lisboa', 'Porto', 2.75);
G.newEdge('Lisboa', 'Faro', 3.83);
G.newEdge('Berna', 'Lyon', 3.83);
G.newEdge('Berna', 'Milão', 4);
G.newEdge('Berna', 'Frankfurt', 3.92);
G.newEdge('Hamburgo', 'Copenhage', 4.5);
G.newEdge('Copenhage', 'Oslo', 8.66);
G.newEdge('Copenhage', 'Estocolmo', 5.25);
G.newEdge('Estocolmo', 'Oslo', 6.33);
G.newEdge('Oslo', 'Bergen', 6.75);
G.newEdge('Estocolmo', 'Östersund', 7);
G.newEdge('Östersund', 'Trondheim', 3.83);
G.newEdge('Estocolmo', 'Kiruna', 16);
G.newEdge('Bruxelas', 'Paris', 1.42);
G.newEdge('Bruxelas', 'Frankfurt', 3.17);
G.newEdge('Colônia', 'Bruxelas', 1.78);
G.newEdge('Bruxelas', 'Amsterdã', 1.88);
G.newEdge('Amsterdã', 'Berlim', 6.17);
G.newEdge('Londres', 'Bruxelas', 2.33);
G.newEdge('Paris', 'Londres', 2.25);
G.newEdge('Penzance', 'Londres', 5.08);
G.newEdge('Londres', 'Bristol', 1.75);
G.newEdge('Birmingham', 'Londres', 1.75);
G.newEdge('Birmingham', 'Holyhead', 4.08);
G.newEdge('Birmingham', 'Edimburgo', 4.42);
G.newEdge('Edimburgo', 'Glasgow', 0.83);
G.newEdge('Edimburgo', 'Aberdeen', 2.33);
G.newEdge('Tartu', 'Talín', 1.97);
G.newEdge('Riga', 'Tartu', 4.53);
G.newEdge('Dunaburgo', 'Riga', 3.4);
G.newEdge('Vilnius', 'Dunaburgo', 2.72);
G.newEdge('Vilnius', 'Klaipėda', 4.3);
G.newEdge('Białystok', 'Vilnius', 7.5);
G.newEdge('Varsóvia', 'Białystok', 2.28);
G.newEdge('Varsóvia', 'Gdansk', 2.6);
G.newEdge('Varsóvia', 'Berlim', 6.08);
G.newEdge('Varsóvia', 'Praga', 8.66);
G.newEdge('Varsóvia', 'Viena', 7.5);
G.newEdge('Varsóvia', 'Budapeste', 11.33);
G.newEdge('Praga', 'Berlim', 4.58);
G.newEdge('Praga', 'Munique', 6.08);
G.newEdge('Praga', 'Viena', 6.08);
G.newEdge('Viena', 'Munique', 4.17);
G.newEdge('Viena', 'Veneza', 7.33);
G.newEdge('Viena', 'Budapeste', 2.75);
G.newEdge('Budapeste', 'Liubliana', 9);
G.newEdge('Budapeste', 'Zagrebe', 6.08);
G.newEdge('Budapeste', 'Belgrado', 7.5);
G.newEdge('Budapeste', 'Bucareste', 13.83);
G.newEdge('Liubliana', 'Veneza', 9);
G.newEdge('Liubliana', 'Zagrebe', 2.33);
G.newEdge('Zagrebe', 'Belgrado', 6.08);
G.newEdge('Zagrebe', 'Split', 5.58);
G.newEdge('Belgrado', 'Bucareste', 12.17);
G.newEdge('Belgrado', 'Sófia', 8.08);
G.newEdge('Belgrado', 'Escópia', 8.75);
G.newEdge('Bucareste', 'Sófia', 9);
G.newEdge('Sófia', 'Escópia', 9);
G.newEdge('Sófia', 'Istambul', 12.92);
G.newEdge('Sófia', 'Tessalônica', 6.67);
G.newEdge('Escópia', 'Tessalônica', 4);
G.newEdge('Tessalônica', 'Atenas', 4.42);
G.newEdge('Atenas', 'Pátras', 3.58);
G.newEdge('Istambul', 'Ancara', 4);

console.log(G.dijkstra("Ancara", "Aberdeen"));