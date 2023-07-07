const form = document.getElementById("form-agenda");
const tels = [];
let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  adicionarLinha();
  atualizarTabela();
  atualizarContatosTotal();
});

function adicionarLinha() {
  const nomeContato = document.getElementById("nome-contato");
  const telContato = document.getElementById("tel-contato");

  if (tels.includes(telContato.value)) {
    alert(`Número de telefone ${telContato.value} já cadastrado.`);
  } else {
    tels.push(telContato.value);

    let linha = "<tr>";
    linha += `<td>${nomeContato.value}</td>`;
    linha += `<td>${telContato.value}</td>`;
    linha += "</tr>";

    linhas += linha;
  }

  nomeContato.value = "";
  telContato.value = "";
}

function atualizarTabela() {
  const tabela = document.querySelector("tbody");
  tabela.innerHTML = linhas;
}

function atualizarContatosTotal() {
  let totalContatos = tels.length;
  document.getElementById("contatos-total").innerHTML = totalContatos;
}

const handlePhone = (event) => {
  let input = event.target;
  input.value = phoneMask(input.value);
};

const phoneMask = (value) => {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
};
