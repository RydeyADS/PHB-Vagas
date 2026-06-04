
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// Importa a função que carrega a página de vagas (criada pelo Diego)
import { carregarVagas } from '../Diego/vagas.js';

// Busca o arquivo HTML da página inicial (criada pelo Hemerson)
fetch('/Hemerson/home.html')
    .then(resposta => resposta.text())
    .then(html => {

        
        document.querySelector('#app').innerHTML = html;

        
        document
            .getElementById('btnVagas')
            ?.addEventListener('click', () => {

                
                carregarVagas();

            });

    });
