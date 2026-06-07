// funcoes.js - Kayo
// Função responsável por gerar o HTML de cada card de vaga
export function gerarCardVaga(vaga) {
  if (!vaga) return "";

  return `
    <div class="col-md-4 mb-4">
      <div class="card h-100 shadow border-0">
        <div class="card-body">
          <h5 class="card-title">${vaga.titulo}</h5>
          <p class="card-text"><strong>Empresa:</strong> ${vaga.empresa}</p>
          <p class="card-text"><strong>Local:</strong> ${vaga.local}</p>
          <p class="card-text"><strong>Salário:</strong> ${vaga.salario}</p>
          <p class="card-text"><strong>Tipo:</strong> ${vaga.tipo}</p>
          <p class="card-text">${vaga.descricao}</p>
          <button class="btn btn-outline-primary btn-candidatar" data-id="${vaga.id}">
            Candidatar-se
          </button>
        </div>
      </div>
    </div>
  `;
}

export function gerarCardEmpresa(empresa) {
  if (!empresa) return "";

  return `
    <div class="col-md-4 mb-4">
      <div class="card h-100 shadow border-0">
        <div class="card-body">
          <h5 class="card-title">${empresa.nome}</h5>
          <p class="card-text"><strong>Área:</strong> ${empresa.area}</p>
          <p class="card-text"><strong>Cidade:</strong> ${empresa.cidade}</p>
          <p class="card-text">${empresa.descricao}</p>
        </div>
      </div>
    </div>
  `;
}