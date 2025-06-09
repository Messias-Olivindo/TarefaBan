//url da api
const url = `http://localhost:3000/api/tarefa`;

function fetchData() {
    //variável com as informações que vão no post
    let titulo = document.getElementById("tituloTarefa").value;
    let descricao = document.getElementById("descricaoTarefa").value;
    let estado = document.getElementById("estadoTarefa").value;
    let importancia = document.getElementById("importanciaTarefa").value;
    let prazo = document.getElementById("prazoTarefa").value;

    //objeto com as variáveis
    let data = {
        titulo: titulo,
        descricao: descricao,
        estado: estado,
        importancia: importancia,
        prazo: prazo
    }


    //passar uma requisição instanciada como uma
    var request = new Request(url, {
        method: 'POST',
        body: JSON.stringify(data), //transformar o dado puro em um json
        headers: new Headers({
            'Content-Type': 'application/json' //informar o tipo de dado
        })
    });


    fetch(request)
        .then(() => {
            console.log("Deu certo");
        })
        .catch((error) => {
            console.log("Erro encontrado: " + error)
        });
}