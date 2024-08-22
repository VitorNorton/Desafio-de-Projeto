// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output), pulando linha.

// Lê a entrada do usuário
const retornosAtivoStr = gets();
const retornosMercadoStr = gets();

function calcularBeta(retornosAtivoStr, retornosMercadoStr) {
    // Converte strings de entrada em arrays de números
    const retornosAtivo = retornosAtivoStr.split(',').map(Number);
    const retornosMercado = retornosMercadoStr.split(',').map(Number);

    // Calcula a média dos retornos
    const mediaRetornosAtivo = retornosAtivo.reduce((a, b) => a + b, 0) / retornosAtivo.length;
    const mediaRetornosMercado = retornosMercado.reduce((a, b) => a + b, 0) / retornosMercado.length;

    // Calcula a covariância entre os retornos do ativo e os retornos do mercado
    let covariancia = 0;
    for (let i = 0; i < retornosAtivo.length; i++) {
        covariancia += (retornosAtivo[i] - mediaRetornosAtivo) * (retornosMercado[i] - mediaRetornosMercado);
    }
    covariancia /= retornosAtivo.length;

    // Calcula a variância dos retornos do mercado
    let varianciaMercado = 0;
    for (let i = 0; i < retornosMercado.length; i++) {
        varianciaMercado += Math.pow(retornosMercado[i] - mediaRetornosMercado, 2);
    }
    varianciaMercado /= retornosMercado.length;

    // Calcula o Beta
    const beta = covariancia / varianciaMercado;

    // Arredonda o resultado para duas casas decimais
    const betaArredondado = beta.toFixed(2);

    return betaArredondado;
}

// Chama a função para calcular o Beta
const beta = calcularBeta(retornosAtivoStr, retornosMercadoStr);

// Exibe o resultado
print(beta);
