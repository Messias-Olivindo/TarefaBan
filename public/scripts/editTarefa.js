function editTarefa(taskId) {
     console.log("Task ID recebido:", taskId);

    let titulo = document.getElementById("tituloTarefa").value;
    let descricao = document.getElementById("descricaoTarefa").value;
    let estado = document.getElementById("estadoTarefa").value;
    let importancia = document.getElementById("importanciaTarefa").value;
    let prazo = document.getElementById("prazoTarefa").value;

    let data = {
        titulo,
        descricao,
        estado,
        importancia,
        prazo
    };

    fetch(`http://localhost:3000/api/tarefa/${taskId}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(data => {
        console.log('Tarefa editada:', data);
        window.location.href = '/quadro'; 
    })
    .catch(err => {
        console.error('Erro ao editar:', err);
    });
}
