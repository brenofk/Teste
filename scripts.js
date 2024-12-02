document.getElementById("alunoForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Cria o FormData com os dados do formulário
    const formData = new FormData();
    formData.append("nome", document.getElementById("nome").value);  // Nome do aluno
    formData.append("matricula", document.getElementById("registro").value);  // Registro Acadêmico
    formData.append("ano", document.getElementById("ano").value);  // Ano Letivo
    formData.append("foto", document.getElementById("foto").files[0]);  // Foto do aluno
    formData.append("observacoes", document.getElementById("observacoes").value);  // Observações

    // Envia os dados para a API
    fetch('http://127.0.0.1:8000/api/alunos/', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.id) {
            alert('Aluno cadastrado com sucesso: ' + data.nome);
        } else {
            alert('Erro ao cadastrar aluno: ' + JSON.stringify(data));
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao tentar cadastrar o aluno.');
    });
});
