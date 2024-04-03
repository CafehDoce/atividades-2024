package JAVA.controle de receitas e despesas;

class ControleFinanceiro {
    private List<Transacao> transacoes;

    public ControleFinanceiro() {
        transacoes = new ArrayList<>();
    }

    public void adicionarTransacao(Transacao transacao) {
        transacoes.add(transacao);
    }

    public void removerTransacao(Transacao transacao) {
        transacoes.remove(transacao);
    }

    public List<Transacao> consultarTransacoes() {
        return transacoes;
    }
}
