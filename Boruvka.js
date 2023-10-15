grafo1_lista = [[[1,5],[3,8]],[[0,5],[2,3],[3,10],[4,16]],[[1,3],[3,2],[4,30],[5,14],[6,12]],
[[0,8],[1,10],[2,2],[6,18]],[[1,18],[2,30],[5,26]],[[2,14],[4,26],[6,4]],[[2,12],[3,18],[5,4]]]     //[vertice,peso]

grafo1_edges = [[5, 0, 1], [8, 0, 3], [3, 1, 2], [10, 1, 3], [16, 1, 4], [2, 2, 3],     
    [30, 2, 4], [14, 2, 5], [12, 2, 6], [18, 3, 6], [26, 4, 5], [4, 5, 6]]      // [peso,v1,v2]


function deep_copy(lista){      // realiza deep_copy de uma lista 
    n_lista = [];
    for (let i=0; i<lista.length; i++){
        n_lista.push(lista[i]);
    }
    return (n_lista);
}

function all_edges(graph){      // converte uma lista de adj numa lista de arestas
    final=[]
    for (let i=0 ;i< graph.length; i++){
        for (let edge=0 ;j< graph[i].length; edge++){
            if (edge[0] > i) final.push(edge[1],i,edge[0])
        }
    }
    return final

}

function weight(graph, arest){  // calcula peso da aresta a partir de lista de adj
    for (let i of graph[arest[1]]) {
    if (i[0] == arest[2]) {
      return i[1];
    }
  }

}


function add_safe_edges(graph,count,F,comp,arests){
    // escolhe todas as arestas mais pequenas q ligam comps difs - 1 para cada comp

    safe = new Array(count).fill(null);
    
    n = 0   //percorre arestas a serem verificadas
    
    console.log("ARESTAS ANTES REMOÇAO",arests)

    while (n != arests.length){ 
        // estuda cada aresta   
        u = arests[n][1]    // vertice 1
        v = arests[n][2]    // vertice 2
        w = arests[n][0]
        console.log("atual",u,v, comp[u],comp[v])
        if (comp[u] != comp[v]){
            if ((safe[comp[u]]==null) || (w < weight(graph,safe[comp[u]]))) safe[comp[u]] = arests[n]

            if ((safe[comp[v]]==null) || (w < weight(graph,safe[comp[v]]))) safe[comp[v]] = arests[n]
        }            
            
                                  
        else{
            arests[n] = arests[arests.length-1];
            a = arests.pop()
            console.log("removido",a)
            n-=1                
        }
        n+=1
        
            
    }
    
    for (let i = 0; i <safe.length;i++){
        s = safe[i]
        if (s!=null){

        
            F[s[1]].push(s[2])
            F[s[2]].push(s[1])
            
            c1 = comp[s[1]]
            c2 = comp[s[2]]
            
            if (c1 > i && safe[c1]==s)   safe[c1]=null
            
            if (c2 > i && safe[c2]==s)  safe[c2]=null
        }
    }
    console.log("ARESTAS DPS REMOÇAO",arests)        
    console.log("safe",safe)
    return safe
}

function label(v,count,mark,graph,comp){
    bag = [v]
    while (bag.length!=0){
        last  = bag.pop() //bag[(bag.length)-1]
        
        if (mark[last] == null){
            mark[last] = 1
            comp[last]=count-1
            for (let i=0; i<(graph[last].length);i++)   bag.push(graph[last][i])
        }
    }
}            
function count_label(graph,comp){
    count  = 0
    mark = new Array(graph.length).fill(null)
    for (let i=0; i < graph.length;i++){
        if (mark[i] == null){
            count+=1
            label(i,count,mark,graph,comp)
        }
    }
    return count
}


function Boruvka(graph, l_arestas){
    arests = deep_copy(l_arestas)
    F = []  // grafo formado ao longo do algoritmo
    comp = []   // conjunto de componentes diferentes
    tree = []   // arvore geradora mínima
    for (let i=0; i<graph.length; i++ ) {
        F.push([])
        comp.push(i)
    }
    
    //  1º PASSO- COUNT atribuir aos vertices número de componente

    count = count_label(F,comp)

    // 2º PASSO- Percorrer algortimo até atingir ARVORE GERADORA MINIMA

    while (count > 1){

        // 3º PASSO- Encontra um vertice seguro para cada componente
        aux = add_safe_edges(graph,count,F,comp, arests)

        for (let i=0; i<aux.length; i++ ) {
            if (aux[i]!=null) tree.push(aux[i])   
        }     

        // 4º PASSO- Repetir 2 e 3 até count == 1
        count  = count_label(F,comp)
    }
        
        
    console.log("tree",tree)
    console.log(F)
    
}   
Boruvka(grafo1_lista, grafo1_edges)