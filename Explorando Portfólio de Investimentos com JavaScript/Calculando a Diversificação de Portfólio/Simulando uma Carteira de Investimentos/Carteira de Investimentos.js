let valoresIniciais = gets(); // Lê os valores iniciais dos ativos
let taxasRendimento = gets(); // Lê as taxas de rendimento dos ativos (já em formato decimal, e.g., 0.08 para 8%)
let anos = parseInt(gets()); // Lê o número de anos

let resultado = calcularValorTotal(valoresIniciais, taxasRendimento, anos);

function calcularValorTotal(valoresIniciais, taxasRendimento, anos) {
    // Converte strings para arrays de números
    let valores = valoresIniciais.split(',').map(Number);
    let taxas = taxasRendimento.split(',').map(Number);
    
    // Calcula o valor total da carteira após o período especificado
    let valorTotal = 0; // Inicializa o valor total da carteira

    for (let i = 0; i < valores.length; i++) {
        // Calcule o valor final de cada ativo após o período especificado
        let valorFinal = valores[i] * Math.pow(1 + taxas[i], anos);
        valorTotal += valorFinal; // Soma o valor final de cada ativo ao valor total da carteira
    }

    return valorTotal.toFixed(2); // Retorna o valor total da carteira com duas casas decimais
}

print(resultado);
