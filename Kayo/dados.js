
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
    empresa: "Empresa Castanha Tech",
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
  }
];

export const empresasParceiras = [
  {
    id: 1,
    nome: "Tech Solutions",
    area: "Tecnologia",
    cidade: "Parnaíba - PI",
    descricao: "Empresa voltada ao desenvolvimento de sistemas web e soluções digitais."
  },
  {
    id: 2,
    nome: "Empresa Castanha Tech",
    area: "Indústria e Comércio",
    cidade: "Parnaíba - PI",
    descricao: "Empresa parceira com atuação no setor administrativo e comercial."
  },
  {
    id: 3,
    nome: "Comércio PHB Ltda.",
    area: "Comércio",
    cidade: "Parnaíba - PI",
    descricao: "Empresa local que oferece oportunidades para atendimento e administração."
  }

  // Exporta as vagas para serem usadas em outros arquivos do projeto.
];
