// Rolador de dados
export function renderDados(content) {
    content.innerHTML = `
        <h2><i class='fa-solid fa-dice'></i> Rolador de Dados</h2>
        <div class='dice-btns'>
            <button onclick='rolarDado(4)'>d4</button>
            <button onclick='rolarDado(6)'>d6</button>
            <button onclick='rolarDado(8)'>d8</button>
            <button onclick='rolarDado(10)'>d10</button>
            <button onclick='rolarDado(12)'>d12</button>
            <button onclick='rolarDado(20)'>d20</button>
            <button onclick='rolarDado(100)'>d100</button>
        </div>
        <div id='resultado-dado'></div>
    `;
}
export function rolarDado(lados) {
    const resultado = Math.floor(Math.random()*lados)+1;
    document.getElementById('resultado-dado').textContent = `Resultado: ${resultado}`;
}
