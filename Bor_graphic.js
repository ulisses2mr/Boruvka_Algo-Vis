var speed  = 500

let c = {
    current: "yellow",
    marked: "red",
    removed: "lightgray",
    unvisited: "black",
    visited: "grey",
    pre_marked : "blue",
    normal_text : "black",
    current_step_text : "red"
} 

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function mark_step(func,step){    // muda a cor da linha de codigo dando-lhe destaque (recebe o número da linha e a função)
    func.filter(function(){return d3.select(this).attr("step")==step}).style("fill",c.current_step_text)
}

async function unmark_step(func){   // desmarca todos os passos da função exceto o indicador da função atual (nome da função)
    func.style("fill",c.normal_text)
    await mark_step(func,0)
}

async function tap_step(func,step){     // marca momentaneamente e de seguida desmarca um passo
    await mark_step(func,step)
    await sleep(speed/3)
    await unmark_step(func)
}

async function hide_func(func){         // esconde a função auxiliar
    await unmark_step(func)
    func.style("display","none")
}

async function show_func(func){         // revela a função auxiliar
    await mark_step(func,0)
    func.style("display","")
}

function deep_copy(lista){      // realiza deep_copy de uma lista 
    new_lista = [];
    for (let i=0; i<lista.length; i++){
        new_lista.push(lista[i]);
    }
    return (new_lista);
}

function list_edges(graph){      // converte uma lista de adj numa lista de arestas
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


async function add_edge(v,w,current_edge,A_graph,safe,comp,graph){
    // v = vertice em estudo     w = seu peso
    if ((safe[comp[v]]==null) || (w < weight(graph,safe[comp[v]]))){
                
        if (safe[comp[v]]!=null){       // peso da atual é menor do q o registado em comp. subtitui-se
            var previous = [safe[comp[v]][1],safe[comp[v]][2]].join("-")   // safe anterior

            // ARESTA N É SAFE PARA ESTE VERTICE ----

            // Verifica se vértice esta no início ou fim para direcionar a seta -----------

            if (v==previous.split("-")[0]){ // vértice no início
                A_graph.all_edges.filter(function() {return d3.select(this).attr("id")==previous})
                    .attr("safe_n",function() {if (d3.select(this).attr("safe_n") == 1) return 0; else  return 1})
                    .attr("state", function() {if (d3.select(this).attr("safe_n") == 1) return "marked"; else return "visited"})
                    .style("stroke-width",function() {if (d3.select(this).attr("safe_n") == 1) return A_graph.escala/4; 
                            else return A_graph.escala/12})
                    .style("stroke",function() {if (d3.select(this).attr("safe_n") == 1) return c.pre_marked; 
                            else return c.visited})
                    .attr("marker-start","")                 
            } 

            else{       // vértice no fim
                A_graph.all_edges.filter(function() {return d3.select(this).attr("id")==previous})
                    .attr("safe_n",function() {if (d3.select(this).attr("safe_n") == 1) return 0; else  return 1})
                    .attr("state", function() {if (d3.select(this).attr("safe_n") == 1) return "marked"; else return "visited"})
                    .style("stroke-width",function() {if (d3.select(this).attr("safe_n") == 1) return A_graph.escala/4; 
                            else return A_graph.escala/12})
                    .style("stroke",function() {if (d3.select(this).attr("safe_n") == 1) return c.pre_marked; 
                            else return c.visited})
                    .attr("marker-end", "")
                    
            }
            // -----------------------------------------------

            //segurança para limpar setas de todas arestas
            A_graph.all_edges.filter(function() {return d3.select(this).attr("safe_n")==0})
                    .attr("marker-end", "")
                    .attr("marker-start", "")

            // -----------

        }// Se a componente não estiver vazia seria marcada em cima, caso contrário deve ser marcada

        // Verifica se vértice esta no início ou fim para direcionar a seta

        if (v == current_edge.split("-")[1]){   // vértice no início
            A_graph.all_edges.filter(function() {return d3.select(this).attr("id")==current_edge})
                .attr("state","marked")
                .style("stroke-width",A_graph.escala/4)
                .style("stroke",c.pre_marked)
                .attr("safe_n", function() {if (d3.select(this).attr("safe_n") == 0) return 1;  else return 2})
                .attr("marker-end","url(#arrow)")
                
        }
        else{           // vértice no fim
            A_graph.all_edges.filter(function() {return d3.select(this).attr("id")==current_edge})
                .attr("state","marked")
                .style("stroke-width",A_graph.escala/4)
                .style("stroke",c.pre_marked)
                .attr("safe_n", function() {if (d3.select(this).attr("safe_n") == 0) return 1;  else return 2})
                .attr("marker-start", "url(#arrow)")
                
        }   
        
        //---------------------------
        
        safe[comp[v]] = arests[n]
        return 1;
    }
    else{
        // não se enquadra nas condições para aresta segura && aresta não é segura
        // desmarca
        A_graph.all_edges.filter(function(){return d3.select(this).attr("safe_n") == 0 && d3.select(this).attr("id")==current_edge})
            .style("stroke",c.visited)
            .style("stroke-width",A_graph.escala/12)
            .attr("state","visited")

        return 0;
        
    }   
    
}
    

async function add_safe_edges(graph,count,F,comp,arests,A_graph){
    // escolhe todas as arestas mais pequenas q ligam comps difs - 1 para cada comp
    
    // repoem a cor das arestas visitadas 

    await show_func(pseudo_add)

    A_graph.all_edges.filter(function(){return  d3.select(this).attr("state") == "visited"})
            .style("stroke",c.unvisited)
            .attr("state","unvisited")
            .style("stroke-width", A_graph.escala/4)

    safe = new Array(count).fill(null); //recebe as arestas a adicionar
    
    n = 0   //percorre arestas a serem verificadas
    var removable = []    

    await tap_step(pseudo_add,1)

    console.log("safe",safe)
    console.log("ARESTAS ANTES REMOÇÃO",arests)

    while (n != arests.length){ 
        // estuda cada aresta   
        u = arests[n][1]    // vertice 1
        v = arests[n][2]    // vertice 2
        w = arests[n][0]    // peso da ligação
        
        var cur = [u,v].join("-")       // aresta a ser estudada de momento
        
        A_graph.all_edges.filter(function() {if (d3.select(this).attr("state")=="unvisited") return d3.select(this).attr("id")==cur})
            .style("stroke",c.current)
            .attr("state","current")
        
        await tap_step(pseudo_add,2)
        
        if (comp[u] != comp[v]){    // se arestas ligam diferentes comp são estudados os seus vertices
            await sleep(speed/2)

            await tap_step(pseudo_add,3)
            if (await add_edge(u,w,cur,A_graph,safe,comp,graph)) {await tap_step(pseudo_add,4)}
            
            await tap_step(pseudo_add,5)
            if (await add_edge(v,w,cur,A_graph,safe,comp,graph)) {await tap_step(pseudo_add,6)}

        }            
                               
        else{
            
            await tap_step(pseudo_add, 7)
            await mark_step(pseudo_add,8)
            await sleep(speed/2)
            await unmark_step(pseudo_add)

            arests[n] = arests[arests.length-1];
            arests.pop()
            n-=1     
            removable.push(cur)

            A_graph.all_edges.filter(function() {return d3.select(this).attr("id")==cur})
                .filter(function() {return d3.select(this).attr("state")=="current"})
                .style("stroke",c.removed)
                .style("stroke-width",1)
                .attr("state","removed")
            
        }
        n+=1
        await sleep(speed/3);
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
    console.log("Aresta dps remoção",arests)
    await sleep(speed)

    A_graph.all_edges.attr("marker-start","").attr("marker-end","")

    A_graph.all_edges.filter(function() {return d3.select(this).attr("state")=="marked"}).style("stroke",c.marked)
   
   await hide_func(pseudo_add)
    return safe
}

async function label(v,count,mark,graph,comp,A_graph){
    // DFS
    
    bag = [[v,v]]
    var arest       // contem a aresta atual,aresta a ser marcada no DFS
    arest_bag=[]       // contem todas as arestas marcadas durante o DFS (string(pai-aresta))
                        // dar split a um elemento para encontrar os vertices
    
    // É criada uma visualização de DFS ao percorrer arest_bag e marcar as arestas com id correto
    
    await tap_step(pseudo_label,1)

    while (bag.length!=0){

        await tap_step(pseudo_label,2)
        
        current = bag.pop() 
        parent = current[1]
        current = current[0]

        await tap_step(pseudo_label,3)
        if (mark[current] == null){
            mark[current] = 1            
            comp[current]=count-1
            
            await tap_step(pseudo_label,4)
            await mark_step(pseudo_label,5)

            if (current<parent){ arest = [current,parent].join("-") }
            else {arest = [parent,current].join("-")}

            arest_bag.push(arest)

            // encontra o texto por id e altera o valor exibido no vertice

            A_graph.all_numbers.filter(function() {return d3.select(this).attr("id")==current}).text(count)
            A_graph.all_vertices.filter(function() {return d3.select(this).attr("id")==current})
                .attr("r",A_graph.escala*5/4).attr("fill",c.marked)
            A_graph.all_edges.filter(function(){return d3.select(this).attr("id")==arest}).style("stroke-width",A_graph.escala*2/3)
            
            await sleep(speed/2)
            await unmark_step(pseudo_label)


            A_graph.all_vertices.filter(function() {return d3.select(this).attr("id")==current}).attr("r",A_graph.escala)
                    .style("stroke","red").style("stroke-width",A_graph.escala/4)
            A_graph.all_edges.filter(function(){return d3.select(this).attr("id")==arest}).style("stroke-width",A_graph.escala/2)

            await tap_step(pseudo_label,6)

            for (let i=0; i<(graph[current].length);i++){
                await tap_step(pseudo_label,7)
                bag.push([graph[current][i],current])
            }      

            A_graph.all_edges.filter(function(){return d3.select(this).attr("id")==arest}).attr("fill",c.unvisited)
        }
    }

    // vis DFS
    await sleep(speed/2)
    if (arest_bag.length>1){
        // aumenta a grossura dos traços e das arestas para uma componente com mais de 2 vertices
        for (let i in arest_bag){
            A_graph.all_edges.filter(function() {return d3.select(this).attr("id")==arest_bag[i].split("-")[0]})
                .style("stroke-width",A_graph.escala*2/3)
            A_graph.all_vertices.filter(function() {return d3.select(this).attr("id")==arest_bag[i].split("-")[0]})
                .attr("r",A_graph.escala*5/4).attr("fill",c.marked)  
            A_graph.all_vertices.filter(function() {return d3.select(this).attr("id")==arest_bag[i].split("-")[1]})
                .attr("r",A_graph.escala*5/4).attr("fill",c.marked)
           
        }
        await sleep(speed*4/5)

        for (let i in arest_bag){
            A_graph.all_edges.filter(function() {return d3.select(this).attr("id")==arest_bag[i].split("-")[0]}).style("stroke-width",A_graph.escala/2)
            A_graph.all_vertices.filter(function() {return d3.select(this).attr("id")==arest_bag[i].split("-")[0]}).attr("r",A_graph.escala) 
            A_graph.all_vertices.filter(function() {return d3.select(this).attr("id")==arest_bag[i].split("-")[1]}).attr("r",A_graph.escala)
        }

    }
    A_graph.all_vertices.attr("fill",c.unvisited)
}

// percore vertices e encontra os comps do grafo
async function count_label(graph,comp,A_graph){
    
    await show_func(pseudo_count)
    await show_func(pseudo_label)
    await tap_step(pseudo_count,1)

    count  = 0
    mark = new Array(graph.length).fill(null)

    await tap_step(pseudo_count,3)
    for (let i=0; i < graph.length;i++){

        await tap_step(pseudo_count,4)
        if (mark[i] == null){
            await tap_step(pseudo_count,5)
            count+=1
            await mark_step(pseudo_count,6)
            await label(i, count, mark, graph, comp,A_graph)
            await unmark_step(pseudo_count)
        }
    }

    await tap_step (pseudo_count,7)
    await hide_func(pseudo_count)
    await hide_func(pseudo_label)
   
    return count
}


async function Boruvka(graph, l_arestas,A_graph){                        
    await sleep(speed*5)

    arests = deep_copy(l_arestas)
    F = []  // grafo formado ao longo do algoritmo
    comp = []   // conjunto de componentes diferentes
    tree = []   // arvore geradora mínima
    for (let i=0; i<graph.length; i++ ) {
        F.push([])
        comp.push(i)
    }


    //  1º PASSO- COUNT atribuir aos vertices número de componente
    await mark_step(pseudo_main,0)
    await sleep(speed)
    await tap_step(pseudo_main,1)
    

    A_graph.title.text("Count and Label ")

    await mark_step(pseudo_main,2)
    
    count =  await count_label(F,comp,A_graph)
    
    await unmark_step(pseudo_main)

    A_graph.content.text("Number of components: "+count)
    await sleep(speed*5)

    // 2º PASSO- Percorrer algortimo até atingir ARVORE GERADORA MINIMA
    
    while (count > 1){
        await tap_step(pseudo_main,3)
        
        // 3º PASSO- Encontra um vertice seguro para cada componente
        A_graph.title.text("Add Safe Edges")
        A_graph.content.text("")

        await mark_step(pseudo_main,4)
        
        aux = await add_safe_edges(graph,count,F,comp, arests,A_graph)
        
        
        var n_edeges=0
        for (let i=0; i<aux.length; i++ ) {
            if (aux[i]!=null) {
                tree.push(aux[i])   
                n_edeges++
            }
        }     

        A_graph.content.text("Number of new safe edges: "+n_edeges)

        await sleep(speed*5)
        await unmark_step(pseudo_main)
        A_graph.content.text("")


        // 4º PASSO- Repetir 2 e 3 até count == 1
        A_graph.title.text("Count and Label")
        A_graph.all_numbers.text("")   // limpa os números a cada iteração do algo principal
        await sleep(speed)
        
        await mark_step(pseudo_main,5)
        count  = await count_label(F,comp,A_graph)
        A_graph.content.text("Number of components: "+count)
        await unmark_step(pseudo_main)

    }   

    await mark_step(pseudo_main,6)
    await sleep(speed*5)
    
    console.log("tree",tree)
    console.log("F",F)
    
    
    A_graph.all_edges.filter(function() {return d3.select(this).attr("state")!="marked"})
        .attr("state","removed")
        .style("stroke",c.removed)
    
    A_graph.all_edges.filter(function() {return d3.select(this).attr("state")=="marked"})
        .style("stroke-width",A_graph.escala*3/4)
    
    A_graph.all_vertices.attr("r",A_graph.escala*5/4).style("stroke-width",A_graph.escala/3)
    

    await sleep(speed*5)

    pseudo_main.style("fill",c.normal_text)

    A_graph.title.text("Boruvka Algorithm")
    A_graph.content.text("Minimum spanning tree obtained") 
    
    
    console.log("CONCLUÍDO")

}  