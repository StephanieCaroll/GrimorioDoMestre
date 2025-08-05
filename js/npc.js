// Gerador de NPC

// Listas de partes de nomes para gerar nomes dinâmicos
const prefixes = ['Ael', 'Thal', 'El', 'Cor', 'Fin', 'Dra', 'Mor', 'Bran', 'Lor', 'Aro', 'Bal', 'Cal', 'Dae', 'Fae', 'Gala'];
const middles = ['da', 'ri', 'len', 'gar', 'on', 'en', 'os', 'in', 'eth', 'lin', 'wyn', 'dor', 'an', 'al'];
const suffixes = ['dor', 'ion', 'as', 'nir', 'lor', 'mir', 'gorn', 'dan', 'iel', 'wen', 'ian', 'ael'];

// Listas para a geração de NPC
const racasNPC = ['Humano', 'Elfo', 'Anão', 'Orc', 'Gnomo', 'Halfling', 'Tiefling'];
const profsNPC = ['Guerreiro', 'Mago', 'Ladino', 'Clérigo', 'Bardo', 'Mercador', 'Nobre', 'Aventureiro'];
const personalidadesNPC = ['corajoso', 'misterioso', 'amigável', 'arrogante', 'leal', 'trapaceiro', 'sábio', 'medroso'];

// Lista de sobrenomes para ter uma base
const sobrenomes = ['Mão-de-Ferro', 'Sombra-Fria', 'Folha-Veloz', 'Pedra-Rúnica', 'Coração-Valente', 'Rio-Longo', 'Vento-Sussurrante', 'Chama-Brilhante'];

function renderNPC(content) {
    content.innerHTML = `
        <h2><i class='fa-solid fa-user-secret'></i> Gerador de NPC</h2>
        <button onclick='gerarNPC()'>Gerar NPC</button>
        <div id='npc-gerado' style='margin-top:16px;font-size:1.1em;'></div>
    `;
}

// Função para gerar um nome aleatório combinando partes
function gerarNomeAleatorio() {
    const numPartes = Math.floor(Math.random() * 2) + 2; // Gera nome com 2 ou 3 partes
    let nome = '';
    if (numPartes === 3) {
        nome = prefixes[Math.floor(Math.random() * prefixes.length)] +
               middles[Math.floor(Math.random() * middles.length)] +
               suffixes[Math.floor(Math.random() * suffixes.length)];
    } else {
        nome = prefixes[Math.floor(Math.random() * prefixes.length)] +
               suffixes[Math.floor(Math.random() * suffixes.length)];
    }
    return nome;
}

function gerarNPC() {
    const nome = gerarNomeAleatorio();
    const sobrenome = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
    const raca = racasNPC[Math.floor(Math.random() * racasNPC.length)];
    const prof = profsNPC[Math.floor(Math.random() * profsNPC.length)];
    const pers = personalidadesNPC[Math.floor(Math.random() * personalidadesNPC.length)];
    document.getElementById('npc-gerado').innerHTML = `<b>${nome} ${sobrenome}</b><br>Raça: ${raca}<br>Profissão: ${prof}<br>Personalidade: ${pers}`;
}