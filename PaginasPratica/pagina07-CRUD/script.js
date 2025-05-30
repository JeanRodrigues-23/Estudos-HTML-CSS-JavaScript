let tarefas = []

function adicionarTarefa() {

    let inputTarefa = document.getElementById("inputTarefa"); // Cria a variável inputTarefa e guarda nela o input com id="inputTarefa"
    let tarefa = inputTarefa.value.trim(); // Cria a variável "tarefa" e insere o valor guardado no input de id="inputTarefa". Obs: o "trim()" retira os espaços em branco do começo e fim do código
    let mensagem = document.getElementById("mensagem"); //Salva o elemento com id="mensagem" dentro da variável "mensagem"

    if (tarefa === "") {
        mensagem.textContent = "Por favor, digite uma tarefa antes de adicionar."
        mensagem.style.color = "#A34743"; // Define a cor da "mensagem" usando JS
        return;
    }; // Confere se input está vazio e não adiciona, caso esteja

    mensagem.textContent = "Tarefa adicionada com sucesso!"; // Adiciona conteúdo na variável "mensagem"
    mensagem.style.color = "#28A745";

    tarefas.push(tarefa); // Insere conteúdo em "tarefas"
    renderizarTarefas(); //Executa a função

    inputTarefa.value = ""; // Define o valor do input como null novamente
} 

function renderizarTarefas() {
    let listaTarefas = document.getElementById("listaTarefas"); // Cria a variável "listaTarefas" e atribui a ela o ul com id="listaTarefas"
    listaTarefas.innerHTML = "";

    for (let i = 0; i < tarefas.length; i++) {
        let novaTarefa = document.createElement("li"); // Criar a variável "novaTarefa" e atribui a ela a criação de um li (list item)
        novaTarefa.textContent = tarefas[i]; // Atribui à variável "novaTarefa" o conteúdo de texto guardado na variável "tarefa"
        
        let botaoRemover = document.createElement("button"); // Cria o botão com JS e insere na variável "botaoRemover"
        botaoRemover.className = "remover"; // Define a classe de botão com JS para identificação no CSS
        botaoRemover.textContent = "Remover"; // Insere texto no botão com JS
        botaoRemover.style.backgroundColor = "red"; //Define cor de fundo do botão com JS
        botaoRemover.onclick = () => removerTarefa(i); // Define o "onclick" do botão com JS

        let botaoEditar = document.createElement("button");
        botaoEditar.className = "editar";
        botaoEditar.textContent = "Editar";
        botaoEditar.style.backgroundColor = "brown";
        botaoEditar.onclick = () => editarTarefa(i);

        novaTarefa.appendChild(botaoRemover); // Insere o "botaoRemover" como elemento filho em novaTarefa
        novaTarefa.appendChild(botaoEditar); 
        listaTarefas.appendChild(novaTarefa); // Insere um item filho em "listaTarefas", no caso o conteúdo de "novaTarefa"
    }
    
}

function removerTarefa(i) {
    tarefas.splice(i, 1); // Remove um item da lista
    renderizarTarefas();
};

function editarTarefa(i) {
    let tarefaEditada = prompt("Edite a tarefa:"); // Abre uma caixa para inserção de valores

    if (tarefaEditada.trim() !== "") {
        tarefas[i] = tarefaEditada;
    };

    renderizarTarefas();
}

function limparLista () {
    
    if (tarefas.length == 0) {
        mensagem.textContent="Não há itens a serem apagados"
    } else {
        tarefas.length = 0;
        renderizarTarefas();
        let mensagem = document.getElementById("mensagem");
        mensagem.textContent = "Lista de tarefas apagada!";
    }
    
    
}