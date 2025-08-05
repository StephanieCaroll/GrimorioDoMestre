export function renderFicha(content) {
    content.innerHTML = `
        <h2 style="margin-bottom:32px;"><i class='fa-solid fa-address-card'></i> Ficha Completa de RPG</h2>
        <form id='ficha-form' style='background: #fffbe6; border: 2px solid #d4af37; border-radius: 12px; box-shadow: 0 4px 18px rgba(212,175,55,0.08); padding: 32px 24px 24px 24px; max-width: 600px; margin: 0 auto 24px auto;'>
            <fieldset style='border:1.5px solid #d4af37;border-radius:8px;padding:18px;margin-bottom:18px;'>
                <legend style='color:#8b4513;font-weight:bold;'>Identificação</legend>
                <div style='display:flex;gap:18px;flex-wrap:wrap;'>
                    <label style='flex:1 1 220px;'>Nome do Jogador:<input type='text' name='jogador' required style='margin-left:8px;width:70%;padding:6px;border-radius:5px;border:1px solid #d4af37;'></label>
                    <label style='flex:1 1 220px;'>Nome do Personagem:<input type='text' name='nome' required style='margin-left:8px;width:70%;padding:6px;border-radius:5px;border:1px solid #d4af37;'></label>
                </div>
                <div style='display:flex;gap:18px;flex-wrap:wrap;margin-top:12px;'>
                    <label style='flex:1 1 120px;'>Raça:<input type='text' name='raca' style='margin-left:8px;width:60%;padding:6px;border-radius:5px;border:1px solid #d4af37;'></label>
                    <label style='flex:1 1 80px;'>Idade:<input type='number' name='idade' min='0' style='margin-left:8px;width:60px;padding:6px;border-radius:5px;border:1px solid #d4af37;'></label>
                    <label style='flex:1 1 80px;'>Sexo:<input type='text' name='sexo' style='margin-left:8px;width:60px;padding:6px;border-radius:5px;border:1px solid #d4af37;'></label>
                    <label style='flex:1 1 80px;'>Altura:<input type='text' name='altura' style='margin-left:8px;width:60px;padding:6px;border-radius:5px;border:1px solid #d4af37;'></label>
                    <label style='flex:1 1 80px;'>Peso:<input type='text' name='peso' style='margin-left:8px;width:60px;padding:6px;border-radius:5px;border:1px solid #d4af37;'></label>
                </div>
            </fieldset>
            <fieldset style='border:1.5px solid #d4af37;border-radius:8px;padding:18px;margin-bottom:18px;'>
                <legend style='color:#8b4513;font-weight:bold;'>Atributos</legend>
                <div style='display:flex;gap:18px;flex-wrap:wrap;'>
                    <label>Força:<input type='number' name='forca' min='0' max='20' style='margin-left:8px;width:50px;padding:6px;border-radius:5px;border:1px solid #d4af37;'></label>
                    <label>Inteligência:<input type='number' name='inteligencia' min='0' max='20' style='margin-left:8px;width:50px;padding:6px;border-radius:5px;border:1px solid #d4af37;'></label>
                    <label>Resistência:<input type='number' name='resistencia' min='0' max='20' style='margin-left:8px;width:50px;padding:6px;border-radius:5px;border:1px solid #d4af37;'></label>
                    <label>Destreza:<input type='number' name='destreza' min='0' max='20' style='margin-left:8px;width:50px;padding:6px;border-radius:5px;border:1px solid #d4af37;'></label>
                    <label>Reflexos:<input type='number' name='reflexos' min='0' max='20' style='margin-left:8px;width:50px;padding:6px;border-radius:5px;border:1px solid #d4af37;'></label>
                    <label>Carisma:<input type='number' name='carisma' min='0' max='20' style='margin-left:8px;width:50px;padding:6px;border-radius:5px;border:1px solid #d4af37;'></label>
                </div>
            </fieldset>
            <fieldset style='border:1.5px solid #d4af37;border-radius:8px;padding:18px;margin-bottom:18px;'>
                <legend style='color:#8b4513;font-weight:bold;'>Perícias e Talentos</legend>
                <label style='display:block;margin-bottom:10px;'>Perícias/Níveis:<textarea name='pericias' rows='2' style='width:100%;padding:6px;border-radius:5px;border:1px solid #d4af37;'></textarea></label>
                <label style='display:block;margin-bottom:10px;'>Talentos:<textarea name='talentos' rows='2' style='width:100%;padding:6px;border-radius:5px;border:1px solid #d4af37;'></textarea></label>
                <label style='display:block;margin-bottom:10px;'>Falhas:<textarea name='falhas' rows='2' style='width:100%;padding:6px;border-radius:5px;border:1px solid #d4af37;'></textarea></label>
            </fieldset>
            <fieldset style='border:1.5px solid #d4af37;border-radius:8px;padding:18px;margin-bottom:18px;'>
                <legend style='color:#8b4513;font-weight:bold;'>Poderes, Magias e Armas</legend>
                <label style='display:block;margin-bottom:10px;'>Poder/Magia/Psiquismo/Superpoder/Efeito Colateral:<textarea name='poderes' rows='2' style='width:100%;padding:6px;border-radius:5px;border:1px solid #d4af37;'></textarea></label>
                <label style='display:block;margin-bottom:10px;'>Armas:<textarea name='armas' rows='2' style='width:100%;padding:6px;border-radius:5px;border:1px solid #d4af37;'></textarea></label>
            </fieldset>
            <fieldset style='border:1.5px solid #d4af37;border-radius:8px;padding:18px;margin-bottom:18px;'>
                <legend style='color:#8b4513;font-weight:bold;'>História</legend>
                <label style='display:block;margin-bottom:10px;'>História do Personagem:<textarea name='historia' rows='3' style='width:100%;padding:6px;border-radius:5px;border:1px solid #d4af37;'></textarea></label>
            </fieldset>
            <div style='display:flex;justify-content:space-between;align-items:center;'>
                
                <button type='submit' style='margin-top:18px;background:linear-gradient(to right,#d4af37,#f8d56b);color:#332d28;font-weight:bold;border:none;border-radius:6px;padding:12px 28px;font-size:1.1em;box-shadow:0 2px 8px #d4af37;cursor:pointer;transition:0.2s;'>Salvar Ficha <i class='fa-solid fa-file-pdf'></i></button>
            </div>
        </form>
        <div id='ficha-salva' style='margin-top:40px;max-width:600px;align-items:center;background:#fffbe6;border:1.5px solid #d4af37;border-radius:10px;box-shadow:0 2px 8px #d4af37;padding:24px 18px;font-size:1.1em;'></div>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'></script>
    `;
    document.getElementById('ficha-form').onsubmit = function(e) {
        e.preventDefault();
        const dados = Object.fromEntries(new FormData(e.target));
        // Exibe a ficha salva na tela
        document.getElementById('ficha-salva').innerHTML = `
            <div style='padding:18px 0;'>
                <b>${dados.nome}</b> (${dados.raca || 'Raça indefinida'})<br>
                <b>Jogador:</b> ${dados.jogador || '-'}<br>
                <b>Idade:</b> ${dados.idade || '-'} | <b>Sexo:</b> ${dados.sexo || '-'} | <b>Altura:</b> ${dados.altura || '-'} | <b>Peso:</b> ${dados.peso || '-'}<br>
                <b>Atributos:</b> Força: ${dados.forca || 0}, Inteligência: ${dados.inteligencia || 0}, Resistência: ${dados.resistencia || 0}, Destreza: ${dados.destreza || 0}, Reflexos: ${dados.reflexos || 0}, Carisma: ${dados.carisma || 0}<br>
                <b>Perícias:</b> ${dados.pericias || '-'}<br>
                <b>Talentos:</b> ${dados.talentos || '-'}<br>
                <b>Falhas:</b> ${dados.falhas || '-'}<br>
                <b>Poderes/Magias:</b> ${dados.poderes || '-'}<br>
                <b>Armas:</b> ${dados.armas || '-'}<br>
                <b>História:</b> ${dados.historia || '-'}<br>
            </div>
        `;
        // Geração do PDF estilo ficha clássica
    function gerarPDF(jsPDF) {
    const doc = new jsPDF('p', 'mm', 'a4');

    doc.setDrawColor(112, 84, 52); // tom sépia
    doc.setLineWidth(1.5);
    doc.rect(10, 10, 190, 277, 'S');

    // Título principal
    doc.setFont('times', 'bold');
    doc.setTextColor(120, 0, 0);
    doc.setFontSize(26);
    doc.setFontSize(16);
    doc.text('FICHA DE PERSONAGEM', 105, 32, { align: 'center' });

    // Divisória
    doc.setDrawColor(120,0,0);
    doc.setLineWidth(0.6);
    doc.line(15, 38, 195, 38);

    // Seção Identificação
    let y = 43;
    doc.setFont('times', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(51,45,40);
    doc.text(`Jogador: ${dados.jogador || ''}    Personagem: ${dados.nome || ''}`, 15, y);
    y += 7;
    doc.text(`Raça: ${dados.raca || ''}    Idade: ${dados.idade || ''}    Sexo: ${dados.sexo || ''}    Altura: ${dados.altura || ''}    Peso: ${dados.peso || ''}`, 15, y);

    // Divisória
    doc.line(15, y + 2, 195, y + 2);
    y += 9;

    // Seção Atributos
    doc.setFont('times', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(120,0,0);
    doc.text('Atributos', 15, y);
    y += 7;
    doc.setFont('times', 'normal');
    doc.setFontSize(12);
    doc.setTextColor(51, 45, 40);
    doc.text(`Força: ${dados.forca || ''}    Inteligência: ${dados.inteligencia || ''}    Resistência: ${dados.resistencia || ''}    Destreza: ${dados.destreza || ''}    Reflexos: ${dados.reflexos || ''}    Carisma: ${dados.carisma || ''}`, 15, y);

    // Divisória
    doc.line(15, y + 2, 195, y + 2);
    y += 9;

    // Campos de texto extensos
    const blocosTexto = [
        { titulo: 'Perícias/Níveis', valor: dados.pericias },
        { titulo: 'Talentos', valor: dados.talentos },
        { titulo: 'Falhas', valor: dados.falhas },
        { titulo: 'Poderes/Magias/Psiquismo/Superpoder/Efeito Colateral', valor: dados.poderes },
        { titulo: 'Armas', valor: dados.armas },
        { titulo: 'História do Personagem', valor: dados.historia }
    ];

    doc.setFontSize(14);
    blocosTexto.forEach(b => {
        doc.setTextColor(120, 0, 0);
        doc.setFont('times', 'bold');
        doc.text(b.titulo, 15, y);
        doc.setFont('times', 'italic');
        doc.setTextColor(51, 45, 40);
        doc.setFontSize(12);
        let linhas = doc.splitTextToSize(`${b.valor || '-'}`, 180);
        linhas.forEach((linha, i) => {
            doc.text(linha, 15, y + 6 + (i * 5));
        });
        y += 6 + (linhas.length * 5);
        doc.setDrawColor(120, 0, 0);
        doc.line(15, y, 195, y);
        y += 5;
    });

    // Data de criação: sempre hoje
    const hoje = new Date();
    const dataFormatada = hoje.toLocaleDateString('pt-BR');
    doc.setFont('times', 'normal');
    doc.setTextColor(51, 45, 40);
    doc.setFontSize(12);
    doc.text(`Data de Criação: ${dataFormatada}`, 15, y + 5);

    // Rodapé
    doc.setFont('times', 'italic');
    doc.setFontSize(12);
    doc.setTextColor(212, 175, 55);
    doc.text('Gerado pelo Grimório do Mestre', 105, 285, { align: 'center' });

    // Salvar
    doc.save(`Ficha_${dados.nome || 'personagem'}.pdf`);
}

        function tentarGerarPDF() {
            let jsPDF = null;
            if (window.jspdf && window.jspdf.jsPDF) {
                jsPDF = window.jspdf.jsPDF;
            } else if (window.jspdf && window.jspdf.default && window.jspdf.default.jsPDF) {
                jsPDF = window.jspdf.default.jsPDF;
            }
            if (jsPDF) {
                gerarPDF(jsPDF);
            } else {
                setTimeout(tentarGerarPDF, 200); // espera carregar
            }
        }
        if (window.jspdf || window.jspdf?.jsPDF || window.jspdf?.default) {
            tentarGerarPDF();
        } else {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
            script.onload = tentarGerarPDF;
            document.body.appendChild(script);
        }
        e.target.reset();
    };
}
