using System;
using System.Linq;

class Program
{
    static void Main(string[] args)
    {
        // Lê a string de entrada contendo os preços de fechamento
        string input = Console.ReadLine();

        // Separa os preços de fechamento em um array de strings usando vírgula como separador
        string[] precosStr = input.Split(',');

        // Converte os preços de fechamento para um array de doubles
        double[] precos = Array.ConvertAll(precosStr.Select(v => v.Trim()).ToArray(), double.Parse);

        // Calcula a volatilidade histórica (desvio padrão)
        double volatilidade = CalcularVolatilidade(precos);

        // Exibe o resultado formatado com três casas decimais
        Console.WriteLine($"{volatilidade:F3}");
    }

    public static double CalcularVolatilidade(double[] precos)
    {
        // Calcula a média dos preços de fechamento
        double media = CalcularMedia(precos);

        // Calcula as diferenças quadráticas em relação à média e somar
        double somaDiferencasQuadraticas = 0;
        foreach (double preco in precos)
        {
            double diferenca = preco - media;
            somaDiferencasQuadraticas += diferenca * diferenca;
        }

        // Calcula a variância dividindo a soma das diferenças quadráticas pelo número de dias
        double variancia = somaDiferencasQuadraticas / precos.Length;

        // Calcula o desvio padrão (raiz quadrada da variância)
        double desvioPadrao = Math.Sqrt(variancia);

        return desvioPadrao; // Retorna o desvio padrão (volatilidade)
    }

    public static double CalcularMedia(double[] precos)
    {
        double soma = 0;
        foreach (double preco in precos)
        {
            soma += preco;
        }

        return soma / precos.Length; // Retorna a média dos preços
    }
}
