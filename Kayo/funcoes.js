// funcoes.js - Kayo
// Função responsável por gerar o HTML de cada card de vaga
export function gerarCardVaga(vaga) {

  // Segurança: se não receber uma vaga válida, retorna vazio
  if (!vaga) return "";

  return `
    <div class="col-md-4 mb-4">
      <div class="card h-100 shadow border-0">
        <div class="card-body">
          <h5 class="card-title">${vaga.titulo}</h5>
          <p class="card-text">${vaga.empresa}</p>
          <p class="card-text">Local: ${vaga.local}</p>
          <p class="card-text">Salário: ${vaga.salario}</p>
          <p class="card-text">Tipo: ${vaga.tipo}</p>
          <p class="card-text">${vaga.descricao}</p>
          <button class="btn btn-outline-primary btn-candidatar" data-id="${vaga.id}">
            Candidatar-se
          </button>
        </div>
      </div>
    </div>
  `;

}