// Gerador de Missões Avançado
const acoes = [
    'Resgatar um prisioneiro importante',
    'Investigar a causa de uma praga misteriosa',
    'Eliminar um monstro lendário que aterroriza a região',
    'Escoltar um erudito até as ruínas de uma cidade esquecida',
    'Recuperar um artefato roubado das mãos de um culto',
    'Localizar a fonte de uma magia corrompida que está se espalhando',
    'Proteger um vilarejo indefeso de uma invasão de goblins',
    'Roubar um item valioso de um nobre corrupto',
    'Escapar de uma prisão de segurança máxima no Subterrâneo',
    'Negociar um tratado de paz entre dois reinos em guerra',
    'Descobrir o segredo por trás dos desaparecimentos na floresta',
    'Saber a verdade sobre a profecia da lua de sangue',
    'Conquistar o favor de uma entidade planar poderosa',
    'Desativar uma ameaça mágica que pode destruir um continente',
    'Explorar um templo antigo e decifrar seus enigmas',
    'Encontrar a cura para uma doença rara que afeta a realeza'
];

const alvos = [
    'um nobre desaparecido que guarda segredos de estado',
    'o mistério de uma maldição antiga que transforma pessoas em pedra',
    'uma criatura aterrorizante, metade dragão e metade demônio',
    'um comboio de caravana que transporta um tesouro mágico',
    'um artefato lendário chamado "Coração do Sol"',
    'a fonte de um rio sagrado que está secando inexplicavelmente',
    'a vila de Coração-Valente, que se recusa a seguir as ordens do rei',
    'um item mágico roubado capaz de controlar o clima',
    'a causa de uma praga que faz as plantas murcharem e o gado adoecer',
    'um traidor na guarda da cidade, que está vendendo informações a inimigos',
    'um mapa para um tesouro esquecido nas profundezas do oceano',
    'um príncipe herdeiro que foi sequestrado por um culto',
    'um tomo proibido que contém o nome verdadeiro de um deus',
    'a rainha élfica, que está sob o controle de um parasita mental'
];

const locais = [
    'na floresta Sombria, onde as árvores se movem e sussurram',
    'no castelo do Rei Louco, uma fortaleza cheia de armadilhas e ilusões',
    'nas ruínas de uma antiga cidade anã, soterrada por anos de guerra',
    'na Caverna do Sussurro, onde ecos do passado podem ser ouvidos',
    'nas montanhas de Gelo Eterno, um lugar inóspito e cheio de feras',
    'no Pântano das Almas Perdidas, onde a névoa esconde fantasmas',
    'dentro das criptas da Catedral Sagrada, que esconde um mal ancestral',
    'na cidade flutuante de Aethelgard, construída nas nuvens',
    'no deserto de cinzas, onde a areia queima e o sol é impiedoso',
    'na prisão subterrânea de Veridia, conhecida como o fosso dos esquecidos',
    'em uma ilha isolada no meio de um oceano de fogo',
    'em um plano de existência diferente, onde as leis da física não se aplicam',
    'em um labirinto dimensional que muda a cada hora'
];

const obstaculos = [
    'há traidores entre os aliados que sabotarão a missão no momento certo',
    'o alvo está guardado por um poderoso golem de Adamantina',
    'o tempo está acabando, pois a lua de sangue se aproxima e o poder do vilão será total',
    'uma facção rival também busca o mesmo objetivo e não hesitará em lutar',
    'o local está sob um feitiço de ilusão que esconde a verdadeira natureza do perigo',
    'um portal demoníaco se abriu no caminho e criaturas infernais estão invadindo',
    'um monstro ancestral despertou e considera o território seu',
    'o vilão da história é um antigo mentor do grupo, que jurou vingança',
    'uma epidemia de sonolência se espalha pela região e afeta todos',
    'o artefato roubado está amaldiçoado e causa loucura em quem o toca',
    'o vilão está protegido por um campo de força que só pode ser desativado com um sacrifício',
    'o caminho é cheio de armadilhas mortais deixadas por uma antiga civilização',
    'a magia do local é instável e pode explodir a qualquer momento'
];

const npcs = [
    'um misterioso mago que fala em enigmas',
    'um bardo tagarela que conhece todas as lendas',
    'um nobre arrogante que pode fornecer recursos em troca de favores',
    'um ladrão astuto que se oferece como guia',
    'uma elfa caçadora que conhece os segredos da floresta',
    'um anão ferreiro que pode forjar armas especiais',
    'um paladino devoto que busca redenção',
    'uma druidesa reclusa que se comunica com animais',
    'um mercador excêntrico que vende mapas e rumores',
    'um cavaleiro desonrado que busca uma chance de provar seu valor',
    'uma vidente cega que prevê o futuro em troca de uma memória',
    'o fantasma de um antigo herói, que precisa de ajuda para descansar em paz'
];

const viloes = [
    'um Lich sedento por poder, que busca a imortalidade',
    'um dragão antigo e astuto, que acumula segredos e tesouros',
    'um cultista demoníaco, que pretende abrir um portal para o inferno',
    'um senhor da guerra Orc, que lidera um exército contra os reinos humanos',
    'um vampiro ancestral, que vive nas sombras da cidade',
    'um Barão corrupto, que usa seu poder para oprimir os pobres',
    'uma Bruxa da Floresta, que faz acordos sombrios com criaturas faéricas',
    'um Artífice Maligno, que cria máquinas de guerra a vapor',
    'um Sombra, uma criatura que se alimenta do medo e da desesperança'
];

const reviravoltas = [
    'o NPC aliado é na verdade o verdadeiro vilão da história',
    'o artefato que você está buscando estava quebrado o tempo todo',
    'o vilão não é mal, ele está tentando impedir uma ameaça maior',
    'o alvo da missão na verdade não quer ser resgatado',
    'o local da missão não existe no mapa, é uma dimensão de bolso',
    'o tesouro que você encontrou não é valioso, mas a jornada revelou algo muito mais importante',
    'o suposto vilão é um herói, e o suposto herói é o verdadeiro traidor'
];

const recompensas = [
    'uma grande soma de ouro, joias e um título de nobreza menor',
    'um item mágico raro, como uma espada que brilha na escuridão',
    'o favor de uma poderosa facção, que pode te proteger de inimigos',
    'um mapa para um tesouro esquecido nas ruínas de um império',
    'uma porção massiva de pontos de experiência, o suficiente para um novo nível',
    'conhecimento sobre uma lenda antiga que pode te levar a mais aventuras',
    'uma propriedade de terra na capital do reino',
    'um título de nobreza e a proteção do rei',
    'uma aliança com um reino vizinho, fortalecendo a sua posição'
];

export function renderMissoes(content) {
    content.innerHTML = `
        <h2><i class='fa-solid fa-scroll'></i> Gerador de Missões</h2>
        <button onclick='gerarMissao()' style='margin-bottom:16px;'>Gerar Missão Aleatória</button>
        <div id='missao-gerada' style='font-size:1.1em; text-align:left;'></div>
    `;
}

export function gerarMissao() {
    const acao = acoes[Math.floor(Math.random() * acoes.length)];
    const alvo = alvos[Math.floor(Math.random() * alvos.length)];
    const local = locais[Math.floor(Math.random() * locais.length)];
    const obstaculo = obstaculos[Math.floor(Math.random() * obstaculos.length)];
    const npc = npcs[Math.floor(Math.random() * npcs.length)];
    const vilao = viloes[Math.floor(Math.random() * viloes.length)];
    const reviravolta = reviravoltas[Math.floor(Math.random() * reviravoltas.length)];
    const recompensa = recompensas[Math.floor(Math.random() * recompensas.length)];

    const missaoGerada = `
        <p><b>Missão:</b> ${acao} ${alvo} ${local}.</p>
        <p><b>Obstáculo Principal:</b> Mas cuidado, ${obstaculo}.</p>
        <p><b>Antagonista:</b> O responsável por tudo é ${vilao}.</p>
        <p><b>Aliado Potencial:</b> Um(a) ${npc} pode ser de grande ajuda nesta jornada.</p>
        <p><b>Reviravolta:</b> No clímax da missão, a verdade é revelada: ${reviravolta}.</p>
        <p><b>Recompensa:</b> A conclusão garantirá ${recompensa}.</p>
    `;

    document.getElementById('missao-gerada').innerHTML = missaoGerada;
}