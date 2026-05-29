function calcularSustentabilidade() {
    // Captura dos valores inseridos
    const aguaAplicada = parseFloat(document.getElementById('aguaAplicada').value) || 0;
    const aguaUtilizada = parseFloat(document.getElementById('aguaUtilizada').value) || 0;
    const diesel = parseFloat(document.getElementById('diesel').value) || 0;
    const fertilizante = parseFloat(document.getElementById('fertilizante').value) || 0;

    // Validação básica
    if (aguaAplicada <= 0) {
        alert("Por favor, insira uma quantidade válida de água aplicada.");
        return;
    }

    // Lógica de cálculo
    let eficienciaAgua = (aguaUtilizada / aguaAplicada) * 100;
    if (eficienciaAgua > 100) eficienciaAgua = 100;

    // Fatores de emissão: 1L diesel = 2.68kg CO2 | 1kg fert = 4.7kg CO2
    const co2Total = (diesel * 2.68) + (fertilizante * 4.7);

    // Atualizando a interface com os resultados
    document.getElementById('resAgua').innerText = eficienciaAgua.toFixed(1);
    document.getElementById('resCarbono').innerText = co2Total.toFixed(2);

    // Customização do feedback da água
    const badge = document.getElementById('badgeAgua');
    if (eficienciaAgua >= 80) {
        badge.innerText = "EXCELENTE: Uso consciente da água!";
        badge.className = "status-badge excelente";
    } else if (eficienciaAgua >= 50) {
        badge.innerText = "REGULAR: Alerta para desperdícios.";
        badge.className = "status-badge regular";
    } else {
        badge.innerText = "CRÍTICO: Necessário rever o sistema.";
        badge.className = "status-badge critico";
    }

    // Dica dinâmica para o carbono
    const dica = document.getElementById('resDica');
    if (co2Total > 150) {
        dica.innerText = "Emissões altas! Considere adotar o plantio direto e a rotação de culturas para regenerar o solo e reter carbono.";
    } else {
        dica.innerText = "Bom manejo! Continue monitorando os insumos e invista em reflorestamento de áreas degradadas para zerar o impacto.";
    }

    // Mostrar a caixa de resultados
    document.getElementById('resultadoBox').style.display = 'block';
}
