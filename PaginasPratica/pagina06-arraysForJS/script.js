function adicionarTarefa() {

    let inputTarefa = document.getElementById("inputTarefa"); // Cria a variável inputTarefa e guarda nela o input com id="inputTarefa"
    let tarefa = inputTarefa.value.trim(); // Cria a variável "tarefa" e insere o valor guardado no input de id="inputTarefa". Obs: o "trim()" retira os espaços em branco do começo e fim do código
    let mensagem = document.getElementById("mensagem"); //Salva o elemento com id="mensagem" dentro da variável "mensagem"

    if (tarefa === "") {
        mensagem.textContent = "Por favor, digite uma tarefa antes de adicionar."
        mensagem.style.color = "#A34743";
        return;
    }; // Confere se input está vazio e não adiciona, caso esteja

    mensagem.textContent = "Tarefa adicionada com sucesso!"; // Adiciona conteúdo na variável "mensagem"
    mensagem.style.color = "#28A745";

    let listaTarefas = document.getElementById("listaTarefas"); // Cria a variável "listaTarefas" e atribui a ela o ul com id="listaTarefas"
    let novaTarefa = document.createElement("li"); // Criar a variável "novaTarefa" e atribui a ela a criação de um li (list item)
    novaTarefa.textContent = tarefa; // Atribui à variável "novaTarefa" o conteúdo de texto guardado na variável "tarefa"
    listaTarefas.appendChild(novaTarefa); // Cria um filho na variável "listaTarefas" que guarda a ul de id="listaTarefas". O conteúdo do filho é o que está inserido na variável "novaTarefa", que já recebeu o elemento li

    inputTarefa.value = ""; // Define o valor do input como null novamente
} 