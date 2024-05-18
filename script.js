function adicionarConvidado() {
    var nome = document.getElementById("nome").value;
    var data = document.getElementById("data").value;
    var horario = document.getElementById("horario").value;
  
    if (nome !== "" && data !== "" && horario !== "") {
      var listaConvidados = document.getElementById("lista-convidados");
  
      var card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Data:</strong> ${data}</p>
        <p><strong>Horário:</strong> ${horario}</p>
      `;
  
      listaConvidados.appendChild(card);

      document.getElementById("nome").value = "";
      document.getElementById("data").value = "";
      document.getElementById("horario").value = "";
    } else {
      alert("Por favor, preencha todos os campos.");
    }
}
  