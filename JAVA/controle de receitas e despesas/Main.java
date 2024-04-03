public class Main {
    public static void main(String[] args) {

        Categoria salario = new Categoria("Salário");
        Categoria alimentacao = new Categoria("Alimentação");

        Transacao receita1 = new Receita(new Date(), "Salário", 3000.00, salario);
        Transacao despesa1 = new Despesa(new Date(), "Supermercado", 200.00, alimentacao);

        ControleFinanceiro controleFinanceiro = new ControleFinanceiro();
        controleFinanceiro.adicionarTransacao(receita1);
        controleFinanceiro.adicionarTransacao(despesa1);

        List<Transacao> transacoes = controleFinanceiro.consultarTransacoes();
        Relatorio.gerarRelatorio(transacoes, "Receita");
        Relatorio.gerarRelatorio(transacoes, "Despesa");
    }
}