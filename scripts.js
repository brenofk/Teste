// scripts.js

document.getElementById("alunoForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    alert("Aluno cadastrado com sucesso!");
    // Você pode adicionar lógica para enviar os dados via AJAX ou salvar no backend
});
