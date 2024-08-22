// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Lê a entrada do usuário
const investimentosStr = gets();

function calcularSharpeRatio(investimentosStr) {
    // Converte a string de entrada em um array de números
    const investimentos = investimentosStr.split(',').map(Number);
    
    // Desestrutura os valores do array
    const retornoInvestimento = investimentos[0];
    const retornoLivreRisco = investimentos[1];
    const desvioPadrao = investimentos[2];

    // Calcula o Sharpe Ratio
    const sharpeRatio = (retornoInvestimento - retornoLivreRisco) / desvioPadrao;

    // Arredonda o resultado para duas casas decimais
    const sharpeRatioArredondado = sharpeRatio.toFixed(2);

    return sharpeRatioArredondado;
}

// Calcula o Sharpe Ratio
const sharpeRatio = calcularSharpeRatio(investimentosStr);

// Exibe o resultado
print(sharpeRatio);
