// Criando a classe de grafos 
export class Graph {
    noOfVertices: any;
    AdjList: {};
    constructor(QVertices) {
        this.noOfVertices = QVertices;
        this.AdjList = {};
    }

    newVertice(vertice: string) {
        this.AdjList[vertice] = []
    }

    newEdge(vertice: string, neighboor: string, distance: number) {
        this.AdjList[vertice].push(neighboor);
        this.AdjList[neighboor].push(vertice)
    }

    bfs(start: string, end: string): string[] {
        const queue = [];
        queue.push([start]);
        while (queue.length > 0) {
            const path = queue.shift()
            const node = path[path.length-1]
            if (node === end) {
                return path;
            }
            for (const adjascent of this.AdjList[node]) {
                const new_path = [...path]
                new_path.push(adjascent)
                queue.push(new_path) 
            }
        }
    }

    printGraph() {
        var get_keys = Object.keys(this.AdjList);
        for (var key of get_keys) {
            var get_values = this.AdjList[key];
            var conc = "";
            for (var j of get_values)
                conc += j + " ";
            console.log(key + " -> " + conc);
        }
    }
}

// Adicionando arestas e vértices no Grafo ("Base de dados")
var G = new Graph(20);
const vertices = ["Paris", "Lyon", "Marselha", "Montpellier", "Nice", "Bordeaux","Rennes", "Milan", "Bologna","Florence", "Rome", "Naples","Bari", "Catania", "Venice", "Munich", "Frankfurt", "Cologne", "Hamburg","Berlim", "Madrid", "Pamplona", "Santander", "Santiago de Compostela", "Lisbon", "Málaga", "Seville", "Valencia", "Barcelona", "Porto", "Faro", "Bern", "Compenhagem", "Oslo", "Stockholm", "Bergen", "Östersund", "Trontheim", "Kiruna", "Brussels", "Amsterdam", "Londres", "Penzance", "Bristol", "Holyhead", "Birmingham", "Edinburgh", "Glasgow", "Aberdeen"];

for (var i = 0; i < vertices.length; i++) {
    G.newVertice(vertices[i]);
}

G.newEdge('Paris', 'Rennes', 2.0);
G.newEdge('Paris', 'Bordeaux', 3.0);
G.newEdge('Paris', 'Lyon', 1.92);
G.newEdge('Paris', 'Frankfurt', 3.92);
G.newEdge('Bordeaux', 'Lyon', 6.25);
G.newEdge('Lyon', 'Marselha', 1.67);
G.newEdge('Marselha', 'Montpellier', 2.33);
G.newEdge('Marselha', 'Nice', 2.59);
G.newEdge('Nice', 'Milan', 5.2);
G.newEdge('Milan', 'Venice', 2.59);
G.newEdge('Milan', 'Bologna', 1);
G.newEdge('Milan', 'Munich', 7.75);
G.newEdge('Bologna', 'Florence', 0.37);
G.newEdge('Florence', 'Venice', 2.05);
G.newEdge('Florence', 'Rome', 1.58);
G.newEdge('Rome', 'Bari', 4);
G.newEdge('Rome', 'Naples', 1.17);
G.newEdge('Naples', 'Catania', 7.5);
G.newEdge('Munich', 'Frankfurt', 3.12);
G.newEdge('Munich', 'Berlim', 5.75);
G.newEdge('Munich', 'Hamburg', 5.83);
G.newEdge('Frankfurt', 'Cologne', 1.37);
G.newEdge('Frankfurt', 'Hamburg', 3.67);
G.newEdge('Cologne', 'Berlim', 4.33);
G.newEdge('Berlim', 'Hamburg', 1.58);

G.newEdge('Madrid', 'Bordeaux', 11);
G.newEdge('Madrid', 'Pamplona', 3);
G.newEdge('Madrid', 'Santander', 4.5);
G.newEdge('Madrid', 'Santiago de Compostela', 7.08);
G.newEdge('Madrid', 'Lisbon', 10.17);
G.newEdge('Madrid', 'Málaga', 2.75);
G.newEdge('Madrid', 'Seville', 2.58);
G.newEdge('Madrid', 'Málaga', 2.75);
G.newEdge('Madrid', 'Valencia', 1.75);
G.newEdge('Madrid', 'Barcelona', 2.83);
G.newEdge('Valencia', 'Barcelona', 2.92);
G.newEdge('Montpellier', 'Barcelona', 4.67);
G.newEdge('Barcelona', 'Seville', 5.5);
G.newEdge('Lisbon', 'Porto', 2.75);
G.newEdge('Lisbon', 'Faro', 3.83);
G.newEdge('Bern', 'Lyon', 3.83);
G.newEdge('Bern', 'Milan', 4);
G.newEdge('Bern', 'Frankfurt', 3.92);
G.newEdge('Hamburg', 'Copenhagen', 4.5);
G.newEdge('Copenhagen', 'Oslo', 8.66);
G.newEdge('Copenhagen', 'Stockholm', 5.25);
G.newEdge('Stockholm', 'Oslo', 6.33);
G.newEdge('Oslo', 'Bergen', 6.75);
G.newEdge('Stockholm', 'Östersund', 7);
G.newEdge('Östersund', 'Trontheim', 3.83);
G.newEdge('Stockholm', 'Kiruna', 16);
G.newEdge('Brussels', 'Paris', 1.42);
G.newEdge('Brussels', 'Frankfurt', 3.17);
G.newEdge('Cologne', 'Brussels', 1.78);
G.newEdge('Brussels', 'Amsterdam', 1.88);
G.newEdge('Amsterdam', 'Berlim', 6.17);
G.newEdge('Londres', 'Brussels', 2.33);
G.newEdge('Paris', 'Londres', 2.25);
G.newEdge('Penzance', 'Londres', 5.08);
G.newEdge('Londres', 'Bristol', 1.75);
G.newEdge('Birmingham', 'Londres', 1.75);
G.newEdge('Birmingham', 'Holyhead', 4.08);
G.newEdge('Birmingham', 'Edinburgh', 4.42);
G.newEdge('Edinburgh', 'Glasgow', 0.83);
G.newEdge('Edinburgh', 'Aberdeen', 2.33);

export {vertices, G}