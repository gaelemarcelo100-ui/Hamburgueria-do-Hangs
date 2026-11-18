export const WHATSAPP_NUMBER = '5591992672897';
export const WHATSAPP_DISPLAY = '(91) 99267-2897';
export const INSTAGRAM_HANDLE = '@hangburgs';
export const INSTAGRAM_URL = 'https://www.instagram.com/hangburgs/';
export const ADDRESS_SHORT = 'Av. Almirante Tamandaré · Cidade Velha, Belém - PA';

export function buildWhatsAppUrl(customMessage?: string): string {
  const defaultMsg =
    'Olá, Hangs Burguer! Quero fazer meu pedido pelo WhatsApp e viver uma experiência de sabor na casa nova.';
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export interface ProofMetric {
  value: string;
  label: string;
  detail: string;
}

export const HERO_PROOF_METRICS: ProofMetric[] = [
  {
    value: '20+ Anos',
    label: 'Tradição em Belém',
    detail: 'Mais de duas décadas construindo história na Cidade Velha.',
  },
  {
    value: '4,4 ★',
    label: 'Avaliação Consolidada',
    detail: 'Milhares de clientes satisfeitos no salão e no delivery.',
  },
  {
    value: 'Madrugada',
    label: 'Horário Estendido',
    detail: 'Cozinha ativa no pós-balada, jogos e entregas noturnas.',
  },
  {
    value: 'Casa Nova 2026',
    label: 'Av. Almirante Tamandaré',
    detail: 'Espaço revitalizado com estacionamento gratuito e acessibilidade.',
  },
];

export interface DifferentialItem {
  number: string;
  title: string;
  description: string;
}

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    number: '01',
    title: 'Tradição e autoridade de marca',
    description:
      'Conhecida carinhosamente como Hang Burgs, a marca atravessa gerações na Cidade Velha mantendo padrão de sabor e atendimento próximo.',
  },
  {
    number: '02',
    title: 'Horário estendido na madrugada',
    description:
      'Quando a maioria das cozinhas já fechou em Belém, nossa chapa segue acesa para o público noturno, universitários e pedidos de madrugada.',
  },
  {
    number: '03',
    title: 'Espaço revitalizado e moderno',
    description:
      'A reinauguração em 2026 na Avenida Almirante Tamandaré entrega conforto acústico, iluminação acolhedora e salão ampliado sem perder a alma boêmia.',
  },
  {
    number: '04',
    title: 'Porções generosas e custo-benefício',
    description:
      'Chapas fartas pensadas para dividir com a turma, sanduíches bem servidos e pratos executivos com preço justo para voltar sempre.',
  },
  {
    number: '05',
    title: 'Experiência completa de entretenimento',
    description:
      'Música ao vivo selecionada e telões para acompanhar os grandes clássicos do futebol com cerveja estupidamente gelada na mesa.',
  },
  {
    number: '06',
    title: 'Localização estratégica com estacionamento gratuito',
    description:
      'Fácil acesso no coração histórico de Belém, com estacionamento gratuito e estrutura preparada com acessibilidade para toda a família.',
  },
  {
    number: '07',
    title: 'Conexão comunitária e cultural',
    description:
      'Ponto de encontro natural de moradores tradicionais da Cidade Velha, grupos de amigos e da vibrante comunidade cametaense na capital.',
  },
];

export type ServiceCategory = 'todos' | 'gastronomia' | 'experiencia' | 'atendimento';

export interface FeaturedDish {
  id: string;
  tag: string;
  title: string;
  servings: string;
  availability: string;
  image: string;
  alt: string;
  description: string;
  highlights: string[];
  whatsappMessage: string;
}

export const FEATURED_MAIN_DISHES: FeaturedDish[] = [
  {
    id: 'prato-chapa-imperial',
    tag: 'Prato Principal · Carro-Chefe',
    title: 'Chapa Imperial da Tamandaré',
    servings: 'Serve 3 a 4 pessoas',
    availability: 'Salão & Delivery na Madrugada',
    image: '/src/assets/images/portfolio_chapa_generosa_1794961844890.jpg',
    alt: 'Chapa quente generosa com carne fatiada na brasa, linguiça artesanal, queijo gratinado e batatas rústicas na Hangs Burguer',
    description:
      'A chapa mais pedida da Cidade Velha, agora servida na casa nova: cortes bovinos grelhados no ponto, linguiça tostada, queijo derretido na hora, alho assado e fritas crocantes.',
    highlights: [
      'Ferro fundido aquecido para manter o sabor até o último pedaço',
      'Acompanha molhos artesanais da casa e farofa crocante',
    ],
    whatsappMessage:
      'Olá, Hangs Burguer! Quero pedir o prato principal Chapa Imperial da Tamandaré pelo WhatsApp.',
  },
  {
    id: 'prato-hangs-gold',
    tag: 'Prato Principal · Artesanal na Brasa',
    title: 'Hangs Gold Double Smash',
    servings: 'Individual reforçado',
    availability: 'Salão, Retirada & Delivery',
    image: '/src/assets/images/hero_hangs_burger_1794961844196.jpg',
    alt: 'Hambúrguer artesanal duplo com cheddar derretido, bacon crocante e cebola caramelizada no pão brioche da Hangs Burguer',
    description:
      'Dois blends bovinos prensados na chapa quente com crosta dourada, cheddar duplo derretido, tiras de bacon defumado, cebola caramelizada e pão brioche selado na manteiga.',
    highlights: [
      'Blend fresco preparado diariamente na cozinha da casa',
      'Perfeito para o jantar em família ou pós-balada na madrugada',
    ],
    whatsappMessage:
      'Olá, Hangs Burguer! Quero pedir o Hangs Gold Double Smash pelo WhatsApp.',
  },
  {
    id: 'prato-executivo-regional',
    tag: 'Prato Principal · Identidade Amazônica',
    title: 'Executivo Regional Paraense',
    servings: 'Prato completo individual',
    availability: 'Almoço, Jantar & Delivery',
    image: '/src/assets/images/portfolio_regional_executivo_1794961845159.jpg',
    alt: 'Prato executivo paraense com corte grelhado, arroz de ervas regionais, banana da terra dourada e farofa crocante',
    description:
      'Corte grelhado suculento escoltado por arroz soltinho com ervas regionais, banana da terra frita, farofa crocante dourada e vinagrete fresco da casa.',
    highlights: [
      'Tempero autêntico do Pará com porção generosa',
      'Embalagem térmica reforçada para entrega sem contato',
    ],
    whatsappMessage:
      'Olá, Hangs Burguer! Gostaria de pedir o Executivo Regional Paraense pelo WhatsApp.',
  },
  {
    id: 'prato-combo-petiscos',
    tag: 'Prato Principal · Para Compartilhar',
    title: 'Tábua Suprema de Petiscos',
    servings: 'Ideal para grupos e jogos',
    availability: 'Happy Hour & Madrugada',
    image: '/src/assets/images/menu_petiscos_porcoes_1794962602341.jpg',
    alt: 'Porção generosa com anéis de cebola dourados, tiras de frango empanadas, macaxeira crocante e cheddar cremoso',
    description:
      'Combinação crocante de tiras de frango temperadas, anéis de cebola dourados, macaxeira frita sequinha e bowl central de cheddar cremoso para acompanhar a cerveja gelada.',
    highlights: [
      'Harmoniza com cerveja estupidamente gelada e música ao vivo',
      'Fartura e custo-benefício para toda a mesa',
    ],
    whatsappMessage:
      'Olá, Hangs Burguer! Quero pedir a Tábua Suprema de Petiscos pelo WhatsApp.',
  },
];

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: Exclude<ServiceCategory, 'todos'>;
  categoryLabel: string;
  description: string;
  highlight: string;
  image: string;
  alt: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'chapas-petiscos',
    number: '01',
    title: 'Chapas e petiscos',
    category: 'gastronomia',
    categoryLabel: 'Gastronomia',
    description:
      'Chapas generosas servidas fumegantes na mesa com cortes selecionados, calabresa artesanal, fritas crocantes e acompanhamentos para compartilhar.',
    highlight: 'Carro-chefe da casa para grupos',
    image: '/src/assets/images/portfolio_chapa_generosa_1794961844890.jpg',
    alt: 'Chapa fumegante com carnes grelhadas, linguiça, queijo e fritas da Hangs Burguer',
  },
  {
    id: 'sanduiches-lanches',
    number: '02',
    title: 'Sanduíches e lanches rápidos',
    category: 'gastronomia',
    categoryLabel: 'Gastronomia',
    description:
      'Hambúrgueres artesanais suculentos, clássicos de chapa e lanches rápidos preparados na hora com pão macio e molhos exclusivos.',
    highlight: 'Feitos na brasa e chapa de ferro',
    image: '/src/assets/images/hero_hangs_burger_1794961844196.jpg',
    alt: 'Hambúrguer artesanal duplo com cheddar derretido e bacon na chapa',
  },
  {
    id: 'pratos-executivos',
    number: '03',
    title: 'Pratos executivos e regionais',
    category: 'gastronomia',
    categoryLabel: 'Gastronomia',
    description:
      'Refeições completas que valorizam o tempero paraense e executivos bem servidos para almoço, jantar ou refeição reforçada.',
    highlight: 'Tempero amazônico e porção farta',
    image: '/src/assets/images/portfolio_regional_executivo_1794961845159.jpg',
    alt: 'Prato executivo regional paraense servido em louça escura',
  },
  {
    id: 'bebidas-sobremesas',
    number: '04',
    title: 'Bebidas e sobremesas',
    category: 'gastronomia',
    categoryLabel: 'Gastronomia',
    description:
      'Cerveja estupidamente gelada no ponto certo, drinks autorais, sucos regionais, refrigerantes e sobremesas para fechar a noite.',
    highlight: 'Temperatura controlada abaixo de zero',
    image: '/src/assets/images/menu_sobremesa_drink_1794962604752.jpg',
    alt: 'Sobremesa brownie com sorvete e drink refrescante de maracujá na Hangs Burguer',
  },
  {
    id: 'transmissao-esportes',
    number: '05',
    title: 'Transmissão de eventos esportivos',
    category: 'experiencia',
    categoryLabel: 'Experiência',
    description:
      'Telões posicionados estrategicamente para torcedores vibrarem juntos nos jogos do Brasileirão, Copa do Brasil, Libertadores e clássicos paraenses.',
    highlight: 'Clima de arquibancada com conforto',
    image: '/src/assets/images/menu_transmissao_jogos_1794962603533.jpg',
    alt: 'Amigos assistindo transmissão de jogo de futebol ao vivo com cerveja e hambúrgueres',
  },
  {
    id: 'musica-ao-vivo',
    number: '06',
    title: 'Música ao vivo',
    category: 'experiencia',
    categoryLabel: 'Experiência',
    description:
      'Programação musical vibrante que embala o happy hour e as noites boêmias na Av. Almirante Tamandaré com repertório para cantar junto.',
    highlight: 'Palco acústico na casa nova',
    image: '/src/assets/images/about_lounge_belem_1794961844278.jpg',
    alt: 'Salão da Hangs Burguer com iluminação dourada e espaço para música ao vivo',
  },
  {
    id: 'confraternizacoes',
    number: '07',
    title: 'Confraternizações e eventos comunitários',
    category: 'experiencia',
    categoryLabel: 'Experiência',
    description:
      'Mesas amplas e atendimento dedicado para aniversários, encontros de faculdade, reuniões da comunidade cametaense e celebrações.',
    highlight: 'Reserva facilitada pelo WhatsApp',
    image: '/src/assets/images/portfolio_drinks_chopp_1794961844648.jpg',
    alt: 'Cerveja estupidamente gelada servida para confraternizações no bar da Hangs Burguer',
  },
  {
    id: 'atendimento-presencial',
    number: '08',
    title: 'Atendimento presencial',
    category: 'atendimento',
    categoryLabel: 'Atendimento',
    description:
      'Salão revitalizado em 2026 com equipe ágil, hospitalidade belenense e ambiente preparado para receber famílias, casais e turmas.',
    highlight: 'Hospitalidade há mais de 20 anos',
    image: '/src/assets/images/about_lounge_belem_1794961844278.jpg',
    alt: 'Ambiente acolhedor e moderno para atendimento presencial na Av. Almirante Tamandaré',
  },
  {
    id: 'delivery-sem-contato',
    number: '09',
    title: 'Delivery e entrega sem contato',
    category: 'atendimento',
    categoryLabel: 'Atendimento',
    description:
      'Embalagens térmicas que preservam a crocância e o calor da chapa até a sua porta, com opção de entrega sem contato na madrugada.',
    highlight: 'Pedido direto pelo WhatsApp',
    image: '/src/assets/images/menu_delivery_madrugada_1794962604391.jpg',
    alt: 'Embalagens pretas e douradas seladas para delivery e entrega sem contato na madrugada',
  },
  {
    id: 'retirada-balcao',
    number: '10',
    title: 'Retirada no balcão',
    category: 'atendimento',
    categoryLabel: 'Atendimento',
    description:
      'Peça com antecedência pelo WhatsApp e retire no balcão sem filas, ideal para quem está de passagem pela Cidade Velha.',
    highlight: 'Agilidade sem taxa de entrega',
    image: '/src/assets/images/menu_petiscos_porcoes_1794962602341.jpg',
    alt: 'Porções e petiscos crocantes prontos para consumo ou retirada rápida no balcão',
  },
  {
    id: 'estacionamento-acessibilidade',
    number: '11',
    title: 'Estacionamento gratuito e acessibilidade',
    category: 'atendimento',
    categoryLabel: 'Atendimento',
    description:
      'Comodidade e segurança para estacionar gratuitamente na Av. Almirante Tamandaré, além de circulação acessível para todos os públicos.',
    highlight: 'Conforto e inclusão no salão',
    image: '/src/assets/images/menu_transmissao_jogos_1794962603533.jpg',
    alt: 'Estrutura ampla, acessível e confortável na casa nova da Hangs Burguer em Belém',
  },
];

export type PortfolioCategory = 'todos' | 'chapas-burgers' | 'ambiente-eventos' | 'regionais-bebidas';

export interface PortfolioItem {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, 'todos'>;
  categoryLabel: string;
  availability: string;
  servings: string;
  image: string;
  alt: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  whatsappPrefill: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'chapa-tamandare',
    title: 'Chapa Imperial da Tamandaré',
    category: 'chapas-burgers',
    categoryLabel: 'Chapas & Burgers',
    availability: 'Salão e Delivery na Madrugada',
    servings: 'Serve 3 a 4 pessoas',
    image: '/src/assets/images/portfolio_chapa_generosa_1794961844890.jpg',
    alt: 'Chapa quente generosa com cortes de carne grelhados, linguiça, queijo derretido e batatas crocantes na Hangs Burguer',
    shortDesc:
      'Nossa chapa assinatura com carne suculenta na brasa, queijo gratinado, calabresa artesanal, alho assado e batatas rústicas.',
    fullDesc:
      'O ícone que atravessa duas décadas de Hang Burgs agora elevado na cozinha da casa nova. Preparada em ferro fundido para chegar chiando à mesa, combina cortes selecionados no ponto certo, linguiça tostada, queijo derretido na hora e fritas douradas — feita para dividir com amigos sem pressa.',
    highlights: [
      'Ferro fundido aquecido para manter temperatura até o último pedaço',
      'Acompanha molhos da casa e farofa crocante',
      'Disponível em versão completa para grupos e universitários',
    ],
    whatsappPrefill: 'Olá, Hangs Burguer! Gostaria de pedir a Chapa Imperial da Tamandaré.',
  },
  {
    id: 'hangs-gold-burger',
    title: 'Hangs Gold Double Smash',
    category: 'chapas-burgers',
    categoryLabel: 'Chapas & Burgers',
    availability: 'Salão, Retirada e Delivery',
    servings: 'Individual reforçado',
    image: '/src/assets/images/hero_hangs_burger_1794961844196.jpg',
    alt: 'Hambúrguer artesanal duplo com cheddar derretido, bacon crocante e cebola caramelizada no pão brioche da Hangs Burguer',
    shortDesc:
      'Duplo smash bovino com crosta caramelizada na chapa, cheddar duplo, bacon crocante, cebola dourada e brioche selado.',
    fullDesc:
      'Pensado para quem busca o equilíbrio exato entre carne de verdade, queijo derretido e textura crocante. Cada disco é prensado na chapa quente para selar os sucos naturais, finalizado com bacon defumado, maionese temperada da casa e pão brioche tostado na manteiga.',
    highlights: [
      'Blend bovino fresco moído diariamente',
      'Pão brioche artesanal selado na chapa',
      'Opções rápidas para matar a fome pós-balada ou faculdade',
    ],
    whatsappPrefill: 'Olá, Hangs Burguer! Quero pedir o Hangs Gold Double Smash pelo WhatsApp.',
  },
  {
    id: 'casa-nova-2026',
    title: 'Salão 2026 · Música & Futebol',
    category: 'ambiente-eventos',
    categoryLabel: 'Ambiente & Eventos',
    availability: 'Quarta a Domingo · Noite e Madrugada',
    servings: 'Mesas para casais e grandes grupos',
    image: '/src/assets/images/about_lounge_belem_1794961844278.jpg',
    alt: 'Ambiente noturno revitalizado da Hangs Burguer na Av. Almirante Tamandaré com luzes douradas, música ao vivo e telões',
    shortDesc:
      'A nova casa na Av. Almirante Tamandaré: iluminação dourada, palco para música ao vivo, transmissão de jogos e estacionamento grátis.',
    fullDesc:
      'A reinauguração em 2026 preservou a essência calorosa da Cidade Velha em um projeto arquitetônico escuro, sofisticado e confortável. O espaço reúne mesas amplas para confraternizações da comunidade cametaense, aniversários, estudantes e torcedores em noites de jogo.',
    highlights: [
      'Palco dedicado para apresentações acústicas e música ao vivo',
      'Visibilidade ampla dos telões de transmissão esportiva',
      'Estacionamento gratuito e acesso facilitado na Av. Almirante Tamandaré',
    ],
    whatsappPrefill: 'Olá, Hangs Burguer! Quero reservar uma mesa na casa nova da Av. Almirante Tamandaré.',
  },
  {
    id: 'executivo-paraense',
    title: 'Executivo & Sabores Paraenses',
    category: 'regionais-bebidas',
    categoryLabel: 'Regionais & Bebidas',
    availability: 'Almoço e Jantar · Salão e Delivery',
    servings: 'Prato individual completo',
    image: '/src/assets/images/portfolio_regional_executivo_1794961845159.jpg',
    alt: 'Prato executivo regional paraense com carne grelhada, arroz com ervas, banana frita e farofa crocante',
    shortDesc:
      'Grelhado suculento acompanhado de arroz de ervas regionais, banana da terra dourada, farofa crocante e vinagrete fresco.',
    fullDesc:
      'Mais do que lanches: nossa cozinha celebra a mesa belenense com pratos executivos e regionais preparados com ingredientes frescos do Pará. Perfeito para famílias, trabalhadores do centro histórico e quem procura uma refeição completa com tempero autêntico.',
    highlights: [
      'Temperos frescos com identidade amazônica',
      'Porção equilibrada com excelente custo-benefício',
      'Embalagem reforçada para entrega sem contato',
    ],
    whatsappPrefill: 'Olá, Hangs Burguer! Gostaria de pedir um Prato Executivo Regional.',
  },
  {
    id: 'cerveja-gelada-bar',
    title: 'Bar & Cerveja Estupidamente Gelada',
    category: 'regionais-bebidas',
    categoryLabel: 'Regionais & Bebidas',
    availability: 'Todos os dias de funcionamento',
    servings: 'Long neck, garrafa, chopp e drinks',
    image: '/src/assets/images/portfolio_drinks_chopp_1794961844648.jpg',
    alt: 'Copo trincando de gelado com cerveja dourada sobre balcão escuro sob iluminação âmbar na Hangs Burguer',
    shortDesc:
      'Rótulos servidos no ponto exato do véu de noiva, drinks refrescantes e sobremesas para acompanhar a noite toda.',
    fullDesc:
      'Em Belém, cerveja gelada é compromisso de honra. Nosso bar trabalha com câmaras calibradas para garantir copos e garrafas trincando do início ao fim da resenha, combinando perfeitamente com nossas chapas e noites de música ao vivo.',
    highlights: [
      'Controle rigoroso de temperatura no bar',
      'Combos promocionais de chapa + balde para grupos',
      'Opções sem álcool, sucos naturais e sobremesas da casa',
    ],
    whatsappPrefill: 'Olá, Hangs Burguer! Quero consultar os combos de chapa e cerveja gelada para hoje.',
  },
];

export interface TestimonialItem {
  id: string;
  name: string;
  context: string;
  since: string;
  quote: string;
  outcome: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'depoimento-1',
    name: 'Lucas Pantoja',
    context: 'Universitário · Pós-aula e noites de sexta',
    since: 'Cliente há 6 anos',
    quote:
      'Antes eu e minha turma da faculdade ficávamos sem opção de comida boa depois da meia-noite em Belém. Desde que descobrimos a chapa do Hang Burgs na Cidade Velha, virou nosso ponto fixo — e a casa nova na Tamandaré em 2026 deixou tudo ainda mais confortável, sem perder o preço justo.',
    outcome: 'Chapa farta dividida em 4 amigos e entrega rápida na madrugada.',
  },
  {
    id: 'depoimento-2',
    name: 'Raimunda Corrêa',
    context: 'Moradora da Cidade Velha · Almoço e jantar em família',
    since: 'Cliente há 18 anos',
    quote:
      'Acompanho a história do Hang Burgs há quase duas décadas no bairro. Ver a marca crescer, manter o atendimento acolhedor e reinaugurar com estacionamento gratuito e acessibilidade me dá orgulho. Trouxe meus filhos pequenos e meus pais idosos com total tranquilidade.',
    outcome: 'Conforto familiar e pratos regionais que agradam todas as idades.',
  },
  {
    id: 'depoimento-3',
    name: 'Henrique Cametá',
    context: 'Comunidade Cametaense · Torcedor e confraternizações',
    since: 'Cliente há 9 anos',
    quote:
      'Em dia de clássico ou encontro dos amigos de Cametá em Belém, não tem discussão: a gente fecha mesa na Hangs Burguer. A cerveja chega realmente estupidamente gelada, o som ao vivo cria um clima único e ninguém precisa se preocupar com vaga para o carro.',
    outcome: 'Noites de jogo e confraternizações completas sem dor de cabeça.',
  },
  {
    id: 'depoimento-4',
    name: 'Mariana Souza',
    context: 'Designer · Pedidos via WhatsApp na madrugada',
    since: 'Cliente desde 2023',
    quote:
      'Quando trabalho até tarde, pedir lanche sempre era uma loteria de comida fria. Pelo WhatsApp da Hangs Burguer o atendimento é direto, humano e a entrega sem contato chega com o hambúrguer quentinho e crocante como se tivesse acabado de sair da chapa.',
    outcome: 'Pedido resolvido em minutos no WhatsApp com padrão de salão em casa.',
  },
];
