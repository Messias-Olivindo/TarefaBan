//Consumir a api das tarefas
const url = `http://localhost:3000/api/tarefa`;

//Criar uma tag HTML
function createNode(element) {
    return document.createElement(element);
}

//Inserir tags html em outra
function append(parent, el) {
    return parent.appendChild(el);
}

//Pegar a coluna de a fazer
const aFazer = document.getElementById("aFazer");
const fazendo = document.getElementById("fazendo");
const feito = document.getElementById("feito");


//Realizar o fetch de Get
fetch(url)
    .then((resp) => { return resp.json(); })
    .then((data) => {
        return data.map((tarefa) => {
            //Formatar o dado de data
            const data = new Date(tarefa.prazo).toLocaleDateString('pt-br');

            //criar uma div
            let div = createNode('div');
            //estilizar a div
            div.classList.add('grid', 'grid-cols-3', 'col-start-2', 'col-span-5', 'h-60', 'rounded-lg', 'border', 'border-solid', 'border-black/20', 'bg-white', 'p-3', 'm-3');
            div.setAttribute('data-id', tarefa.id);

            if(tarefa.estado === "do"){
                //Inserir informação na div
                div.innerHTML = `
                    <h3 class="text-2xl col-span-full text-left">
                    ${tarefa.titulo}
                    </h3>
                    <p class="text-xs col-start-1 text-left">
                        A fazer</p>
                    <p class="text-xs col-start-2 col-span-2 ">
                        ${tarefa.importancia}</p>
                    <p class="text-xs col-start-1 text-left">
                        ${data}</p>
                    <p class="col-start-1 col-end-auto">
                        ${tarefa.descricao}</p>
                    
                        <!--Imagens de deletar e alterar-->
                        <button onclick=irParaEditar(this)>
                            <img src="/assets/pencil.png" class="col-start-2 justify-self-center w-8 h-8" >
                        </button>
    
                        <button onclick = deleteTarefa(this)>
                            <img src="/assets/trash.png" class="col-start-3 justify-self-center w-8 h-8">
                        </button>
                        `
                //Colocar a div na coluna
                append(aFazer, div);

            }
            if(tarefa.estado === "doing"){
                //Inserir informação na div
                div.innerHTML = `
                    <h3 class="text-2xl col-span-full text-left">
                    ${tarefa.titulo}
                    </h3>
                    <p class="text-xs col-start-1 text-left">
                        Fazendo</p>
                    <p class="text-xs col-start-2 col-span-2 ">
                        ${tarefa.importancia}</p>
                    <p class="text-xs col-start-1 text-left">
                        ${data}</p>
                    <p class="col-start-1 col-end-auto">
                        ${tarefa.descricao}</p>
                    
                        <!--Imagens de deletar e alterar-->
                        <button onclick=irParaEditar(this)>
                            <img src="/assets/pencil.png" class="col-start-2 justify-self-center w-8 h-8" >
                        </button>
    
                        <button onclick = deleteTarefa(this)>
                            <img src="/assets/trash.png" class="col-start-3 justify-self-center w-8 h-8">
                        </button>
                        `
                //Colocar a div na coluna
                append(fazendo, div);

            }
            if(tarefa.estado === "done"){
                //Inserir informação na div
                div.innerHTML = `
                    <h3 class="text-2xl col-span-full text-left">
                    ${tarefa.titulo}
                    </h3>
                    <p class="text-xs col-start-1 text-left">
                        Feito</p>
                    <p class="text-xs col-start-2 col-span-2 ">
                        ${tarefa.importancia}</p>
                    <p class="text-xs col-start-1 text-left">
                        ${data}</p>
                    <p class="col-start-1 col-end-auto">
                        ${tarefa.descricao}</p>
                    
                        <!--Imagens de deletar e alterar-->
                        <button onclick=irParaEditar(this)>
                            <img src="/assets/pencil.png" class="col-start-2 justify-self-center w-8 h-8" >
                        </button>
    
                        <button onclick = deleteTarefa(this)>
                            <img src="/assets/trash.png" class="col-start-3 justify-self-center w-8 h-8">
                        </button>
                        `
                //Colocar a div na coluna
                append(feito, div);

            }

        })
    })
    .catch((error) => {
        console.log("Erro encontrado: " + error);
    });
    


//Realizar o fetch de delete
function deleteTarefa(id) {
    const card = id.closest('div');
    const taskId = card.dataset.id;
    //Criar um request
    var request = new Request(url + "/" + taskId, {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    });

    fetch(request)
        .then((resp)=> {return resp.json()})
        .then((data) => {
            location.reload();
        })
        .catch((error) => {
            console.log("erro ao apagar: ", error);
        })
} 

function irParaEditar(btn) {
    const card = btn.closest('div');  // pega o container da tarefa
    const taskId = card.dataset.id;   // pega o id da tarefa
    // redireciona para a rota /editar/:id (você cria essa rota no backend)
    window.location.href = `/editar/${taskId}`;
}
