// 
// ARQUIVO: Diego/vagas.js
// RESPONSÁVEL: Deigo
// DESCRIÇÃO: controla a navegação entre as telas e o processamento do formulário de candidatura. Exibe a lista de vagas aaaaaaaa

// Importa a lista de vagas (criada pelo Kayo)
import { vagas } from '../Kayo/dados.js';

// Importa a função que gera o card de cada vaga (criada pelo Kayo)
import { gerarCardVaga } from '../Kayo/funcoes.js';

// Função principal que carrega e exibe a lista de vagas
export function carregarVagas() {

    // Monta a estrutura HTML da página de vagas
    let html = `
        <div class="container mt-5">

            <h2 class="mb-4 text-center">Vagas Disponíveis</h2>

            <div class="row justify-content-center">
                <div class="col-md-8">
    `;

    // Percorre a lista de vagas e gera um card para cada uma
    vagas.forEach(vaga => {
        html += gerarCardVaga(vaga);
    });

    // Fecha as divs e adiciona botão para voltar à Home
    html += `
                </div>
            </div>

            <div class="text-center mt-4">
                <button id="btnVoltar" class="btn btn-secondary">
                    Voltar para Home
                </button>
            </div>

        </div>
    `;

    // Insere o HTML gerado na página
    document.querySelector('#app').innerHTML = html;

    // Adiciona evento de clique em cada botão "Candidatar-se"
    document.querySelectorAll('.btn-candidatar').forEach(botao => {

        botao.addEventListener('click', () => {

            // Carrega o formulário de candidatura (arquivo na pasta public/)
            fetch('/candidatura.html')
                .then(resposta => resposta.text())
                .then(htmlFormulario => {

                    // Exibe o formulário na tela
                    document.querySelector('#app').innerHTML = htmlFormulario;

                    // Adiciona evento de envio ao formulário
                    document
                        .getElementById('formCandidatura')
                        ?.addEventListener('submit', (evento) => {

                            // Impede que a página recarregue ao enviar
                            evento.preventDefault();

                            // Captura os valores digitados nos campos
                            const nome =
                                document.getElementById('nome').value;

                            const email =
                                document.getElementById('email').value;

                            const telefone =
                                document.getElementById('telefone').value;

                            // Exibe os dados no console do navegador
                            console.log('===== roubei os dados uahahaha =======');
                            console.log('Nome:', nome);
                            console.log('Email:', email);
                            console.log('Telefone:', telefone);

                            // Mensagem de sucesso após o envio
                            document.querySelector('#app').innerHTML = `

                                <div class="container mt-5">
                                    <div class="row justify-content-center">
                                        <div class="col-md-6">

                                            <div class="alert alert-success text-center">
                                                <h4 class="alert-heading">
                                                    Candidatura enviada com sucesso!
                                                </h4>
                                                <p class="mb-0">
                                                    Obrigado por se candidatar.
                                                    Entraremos em contato em breve.
                                                </p>
                                            </div>

                                            <div class="text-center">
                                                <button
                                                    id="voltarHome"
                                                    class="btn btn-primary"
                                                >
                                                    Voltar para Home
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            `;

                            // Botão para voltar à página inicial
                            document
                                .getElementById('voltarHome')
                                .addEventListener('click', () => {
                                    location.reload();
                                });

                        });

                });

        });

    });

    // Botão "Voltar" na página de vagas
    document.getElementById('btnVoltar')?.addEventListener('click', () => {
        location.reload();
    });

}
