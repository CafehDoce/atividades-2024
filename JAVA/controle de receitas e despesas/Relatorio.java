package JAVA.controle de receitas e despesas;

class Relatorio {
    public static void gerarRelatorio(List<Transacao> transacoes, String tipo) {
        System.out.println("Relatório de " + tipo + ":\n");
        for (Transacao transacao : transacoes) {
            if (transacao.getTipo().equals(tipo)) {
                System.out.println("Data: " + transacao.getData() + 
                                   " | Descrição: " + transacao.getDescricao() +
                                   " | Valor: " + transacao.getValor() +
                                   " | Categoria: " + ((transacao instanceof Receita) ? ((Receita) transacao).getCategoria().getNome() : ((Despesa) transacao).getCategoria().getNome()));
            }
        }
    }
}