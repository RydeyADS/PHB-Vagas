# Portal de Vagas PHB

Projeto acadêmico de um portal de vagas de emprego para Parnaíba - PI, desenvolvido como trabalho da disciplina utilizando **Vite + Bootstrap 5 + JavaScript**.

## Equipe e Responsabilidades

| Integrante | Responsabilidade |
|------------|-----------------|
| **Hemerson** | Tela inicial (Home) — navbar, hero, vagas em destaque, footer |
| **Diego** | Vagas e navegação — listar vagas, processar formulário de candidatura |
| **Kayo** | Dados e funções — lista de vagas, função geradora de cards |
| **Vinicius** | Design e Bootstrap — escolha de componentes e organização do layout |

> **Mudanças recentes:** As responsabilidades de Diego e Hemerson foram trocadas.
> Hemerson agora é responsável pela Home, e Diego pelas Vagas e navegação.

## Tecnologias

- **Vite** — servidor de desenvolvimento rápido
- **Bootstrap 5.3** — framework CSS (sem CSS personalizado)
- **JavaScript** — lógica do sistema (sem React ou outros frameworks)
- **HTML** — estrutura das páginas

## Como executar

```bash
# 1. Instalar as dependências (uma vez)
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev

# 3. Abrir no navegador
#    http://localhost:5173
```

Para ver os dados de candidatura no console: `F12` → aba **Console**.

## Estrutura do projeto

```
ATV-LUIS/
├── Diego/
│   ├── vagas.js           ← Navegação, listagem de vagas, formulário
│   └── Exp.txt
├── Hemerson/
│   ├── home.html          ← Tela inicial (navbar, hero, destaques, footer)
│   └── Exp.txt
├── Kayo/
│   ├── dados.js           ← Dados das 3 vagas fictícias
│   ├── funcoes.js         ← Função que gera cards Bootstrap
│   └── Exp.txt
├── Vinicius/
│   └── Exp.txt            ← Componentes Bootstrap utilizados
├── public/
│   ├── imagens/
│   │   └── logo-phb-vagas.svg  ← Logo SVG do portal
│   └── candidatura.html   ← Formulário de candidatura
├── src/
│   └── main.js            ← Ponto de entrada (Vite)
├── index.html             ← HTML principal
├── package.json           ← Dependências
├── README.md
└── EXPLICACAO_PROJETO.txt
```

## Funcionamento

O projeto possui 3 telas que se alternam sem recarregar a página:

1. **Home** — Navbar + hero "Encontre sua próxima oportunidade" + vagas em destaque + beneficios + footer. Botão "Ver Vagas" leva à listagem.

2. **Vagas** — 3 vagas fictícias com botão "Candidatar-se" em cada card.

3. **Candidatura** — Formulário (Nome, Email, Telefone) que ao enviar mostra mensagem de sucesso e registra os dados no Console.

## Regras seguidas

- Nenhum arquivo CSS criado
- Toda estilização com classes Bootstrap
- Sem banco de dados, API ou PHP
- Sem frameworks JavaScript além do Bootstrap
- Código comentado para fácil entendimento
