package JAVA.controle de receitas e despesas;

class Despesa extends Transacao {
    private Categoria categoria;

    public Despesa(Date data, String descricao, double valor, Categoria categoria) {
        super(data, descricao, valor);
        this.categoria = categoria;
    }

    @Override
    public String getTipo() {
        return "Despesa";
    }

    public Categoria getCategoria() {
        return categoria;
    }
}
