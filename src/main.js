import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import { carregarVagas } from '../Diego/vagas.js';
import { empresasParceiras } from '../Kayo/dados.js';
import { gerarCardEmpresa } from '../Kayo/funcoes.js';

function carregarHome() {
  fetch('/Hemesson/home.html')
    .then(resposta => resposta.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html;

      document
        .getElementById('btnVagas')
        ?.addEventListener('click', () => {
          carregarVagas();
        });

        document.querySelectorAll('.btn-detalhes-vaga').forEach(botao => {
    botao.addEventListener('click', (evento) => {
        evento.preventDefault();
        carregarVagas();
    });
});

      document
        .getElementById('btnEmpresas')
        ?.addEventListener('click', () => {
          carregarEmpresas();
        });
    });
}

function carregarEmpresas() {
  let html = `
    <div class="container mt-5">
      <h2 class="mb-4 text-center">Empresas Parceiras</h2>

      <div class="row">
  `;

  empresasParceiras.forEach(empresa => {
    html += gerarCardEmpresa(empresa);
  });

  html += `
      </div>

      <div class="text-center mt-4">
        <button id="btnVoltarHome" class="btn btn-secondary">
          Voltar para Home
        </button>
      </div>
    </div>
  `;

  document.querySelector('#app').innerHTML = html;

  document
    .getElementById('btnVoltarHome')
    ?.addEventListener('click', () => {
      carregarHome();
    });
}

carregarHome();