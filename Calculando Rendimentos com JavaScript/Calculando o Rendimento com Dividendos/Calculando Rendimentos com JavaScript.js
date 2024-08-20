// Lê os preços de compra dos ativos
let precosEntrada = gets();

// Lê os dividendos recebidos de cada ativo
let dividendosEntrada = gets();

// Separa e converte os preços de compra em um array de números
let precosCompra = precosEntrada.split(", ").map(Number);

// Separa e converte os dividendos recebidos em um array de números
let dividendosRecebidos = dividendosEntrada.split(", ").map(Number);

// Calcula o rendimento total do portfólio
let rendimento = calcularRendimento(precosCompra, dividendosRecebidos);

function calcularRendimento(precosCompra, dividendosRecebidos) {
    // Calcula o total de dividendos recebidos
    let dividendosTotais = 0;
    for (let dividendo of dividendosRecebidos) {
        dividendosTotais += dividendo;
    }
    
    // Calcula o preço total de compra dos ativos
    let precoTotalCompra = 0;
    for (let preco of precosCompra) {
        precoTotalCompra += preco; // Some cada preço de compra ao total
    }
    
    // Calcule o rendimento percentual
    let rendimento = (dividendosTotais / precoTotalCompra) * 100;
    
    return rendimento; // Retorna o rendimento calculado
}

// Exibir o resultado formatado com duas casas decimais
print(rendimento.toFixed(2) + "%");
