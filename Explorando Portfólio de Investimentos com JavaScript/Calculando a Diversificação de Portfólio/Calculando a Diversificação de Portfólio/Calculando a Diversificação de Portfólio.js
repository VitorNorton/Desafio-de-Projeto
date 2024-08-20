function calcularDiversificacao() {
    const portfolioStr = gets();

    // Converte a string de entrada para um array de números
    const valores = portfolioStr.split(',').map(Number);

    // Calcula o valor total do portfólio
    const valorTotal = valores.reduce((acc, valor) => acc + valor, 0);

    // Calcule a porcentagem de cada investimento em relação ao total e formate para duas casas decimais
    const porcentagens = valores.map(valor => ((valor / valorTotal) * 100).toFixed(2) + "%");

    // Imprime o array de porcentagens como uma string unida por vírgulas
    print(porcentagens.join(','));
}

calcularDiversificacao();
