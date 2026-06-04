
// dados.js - Kayo
// Arquivo responsável por armazenar as vagas do portal PHB Vagas


// Lista de vagas disponíveis no sistema
// Cada vaga é um objeto com informações como título, empresa e salário.
export const vagas = [
  {
    id: 1,
    titulo: "Desenvolvedor Front-End",
    empresa: "Tech Solutions",
    local: "Parnaíba - PI",
    salario: "R$ 2.500,00",
    tipo: "CLT",
    descricao: "Desenvolvimento de interfaces web modernas com HTML, CSS e JavaScript.",
  },
  {
    id: 2,
    titulo: "Analista de Sistemas",
    empresa: "Empresa Castanha",
    local: "Parnaíba - PI",
    salario: "R$ 3.200,00",
    tipo: "CLT",
    descricao: "Análise e desenvolvimento de sistemas para gestão empresarial.",
  },
  {
    id: 3,
    titulo: "Assistente Administrativo",
    empresa: "Comércio PHB Ltda.",
    local: "Parnaíba - PI",
    salario: "R$ 1.500,00",
    tipo: "CLT",
    descricao: "Atendimento ao público, controle de documentos e suporte administrativo.",
  },

  // Exporta as vagas para serem usadas em outros arquivos do projeto.
];
