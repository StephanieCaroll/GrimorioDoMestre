// Gerador de nomes
export const nomes = {
    fantasia: ['Arthos', 'Lyra', 'Thalion', 'Mira', 'Darian', 'Seraphine', 'Galdur', 'Elowen'],
    moderno: ['Lucas', 'Amanda', 'Rafael', 'Bianca', 'Felipe', 'Jéssica', 'Bruno', 'Camila'],
    elfo: ['Eldarion', 'Faelwen', 'Luthien', 'Galad', 'Aerendil', 'Nimriel'],
    anão: ['Thorin', 'Balin', 'Dwalin', 'Gimli', 'Durin', 'Bofur']
};
export function renderNomes(content) {
    content.innerHTML = `
        <h2><i class='fa-solid fa-user-ninja'></i> Gerador de Nomes de Personagem</h2>
        <div class='name-btns'>
            <button onclick='gerarNome("fantasia")'>Fantasia</button>
            <button onclick='gerarNome("moderno")'>Moderno</button>
            <button onclick='gerarNome("elfo")'>Elfo</button>
            <button onclick='gerarNome("anão")'>Anão</button>
        </div>
        <div id='resultado-nome'></div>
    `;
}
export function gerarNome(tipo) {
    const lista = nomes[tipo];
    const nome = lista[Math.floor(Math.random()*lista.length)];
    document.getElementById('resultado-nome').textContent = `Nome gerado: ${nome}`;
}
