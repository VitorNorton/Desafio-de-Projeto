using System;
using System.Linq;

class Program
{
    static void Main()
    {
        // Recebe a entrada do número de ativos
        int N = int.Parse(Console.ReadLine());

        // Recebe os valores de mercado dos ativos em um array de strings
        string[] valoresMercadoStr = Console.ReadLine().Split(',');
        double[] valoresMercado = Array.ConvertAll(valoresMercadoStr.Select(v => v.Trim()).ToArray(), double.Parse);

        // Recebe o valor total investido
        double valorTotalInvestido = double.Parse(Console.ReadLine());

        // Recebe as alocações mínimas em um array de strings
        string[] alocacoesMinimasStr = Console.ReadLine().Split(',');
        double[] alocacoesMinimas = Array.ConvertAll(alocacoesMinimasStr.Select(v => v.Trim()).ToArray(), double.Parse);

        // Recebe as alocações máximas em um array de strings
        string[] alocacoesMaximasStr = Console.ReadLine().Split(',');
        double[] alocacoesMaximas = Array.ConvertAll(alocacoesMaximasStr.Select(v => v.Trim()).ToArray(), double.Parse);

        // Calcula o total do mercado
        double totalMercado = valoresMercado.Sum();

        // Inicializa o array de alocações e ajusta para respeitar as restrições
        double[] alocacoes = new double[N];
        double valorAlocado = 0;

        for (int i = 0; i < N; i++)
        {
            // Calcula a alocação proporcional ao valor de mercado
            double proporcao = (valoresMercado[i] / totalMercado) * valorTotalInvestido;

            // Ajusta a alocação para respeitar as restrições mínimas e máximas
            alocacoes[i] = Math.Max(alocacoesMinimas[i], Math.Min(alocacoesMaximas[i], proporcao));

            // Acumula o valor já alocado
            valorAlocado += alocacoes[i];
        }

        // Redistribuir o excesso ou déficit se necessário
        if (valorAlocado != valorTotalInvestido)
        {
            double diferenca = valorTotalInvestido - valorAlocado;
            for (int i = 0; i < N; i++)
            {
                // Ajusta proporcionalmente a diferença entre o valor total e o valor alocado
                double ajuste = (diferenca * (alocacoes[i] / valorAlocado));
                double novaAlocacao = alocacoes[i] + ajuste;

                // Certifica-se de que o ajuste respeite as alocações mínimas e máximas
                alocacoes[i] = Math.Max(alocacoesMinimas[i], Math.Min(alocacoesMaximas[i], novaAlocacao));
            }
        }

        // Imprime as alocações formatadas com duas casas decimais
        for (int i = 0; i < N; i++)
        {
            Console.WriteLine($"{alocacoes[i]:F2}");
        }
    }
}
