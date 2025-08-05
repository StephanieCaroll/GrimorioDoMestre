// Gerador de tesouros/itens mágicos
// --- Partes dos nomes de itens e suas descrições
const tiposDeItem = [
    { nome: 'Espada', descricao: 'Uma lâmina afiada e bem balanceada.' },
    { nome: 'Cajado', descricao: 'Um longo bastão de madeira com um ornamento mágico.' },
    { nome: 'Anel', descricao: 'Um adorno forjado em metal raro.' },
    { nome: 'Amuleto', descricao: 'Um pingente de pedra polida, gravado com runas.' },
    { nome: 'Escudo', descricao: 'Uma barreira defensiva, leve mas resistente.' },
    { nome: 'Elmo', descricao: 'Um capacete para proteger a cabeça em combate.' },
    { nome: 'Botas', descricao: 'Calçados confortáveis e feitos para longas jornadas.' }
];

const adjetivos = [
    'Radiante', 'Sombrio', 'Antigo', 'Místico', 'Gélido', 'Flamejante', 'Sussurrante',
    'Celeste', 'Terreno', 'Dracônico', 'Élfico', 'Anão', 'Fantasma', 'Eterno'
];

const poderes = [
    'da Força', 'da Destreza', 'do Conjurador', 'do Silêncio', 'da Proteção',
    'da Cura', 'da Visão', 'do Trovão', 'do Gelo Eterno', 'da Chama'
];

function gerarTesouroAleatorio() {
    const item = tiposDeItem[Math.floor(Math.random() * tiposDeItem.length)];
    const adjetivo = adjetivos[Math.floor(Math.random() * adjetivos.length)];
    const poder = poderes[Math.floor(Math.random() * poderes.length)];

    const nome = `${item.nome} ${adjetivo} ${poder}`;
    const descricao = `${item.descricao} Concede o poder ${poder.toLowerCase().replace('do ', '').replace('da ', '')}.`;

    return { nome, descricao };
}

export function renderTesouros(content) {
    content.innerHTML = `
        <h2><i class='fa-solid fa-gem'></i> Gerador de Tesouros Mágicos</h2>
        <button onclick='gerarTesouro()'>Gerar Tesouro</button>
        <div id='tesouro-gerado' style='margin-top:16px;font-size:1.1em;'></div>
    `;
}

export function gerarTesouro() {
    const tesouroGerado = gerarTesouroAleatorio();
    document.getElementById('tesouro-gerado').innerHTML = `
        <h3>${tesouroGerado.nome}</h3>
        <p>${tesouroGerado.descricao}</p>
    `;
}