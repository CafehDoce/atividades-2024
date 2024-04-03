package JAVA.controle de receitas e despesas;

class Receita extends Transacao {
    private Categoria categoria;

    public Receita(Date data, String descricao, double valor, Categoria categoria) {
        super(data, descricao, valor);
        this.categoria = categoria;
    }

    @Override
    public String getTipo() {
        return "Receita";
    }

    public Categoria getCategoria() {
        return categoria;
    }
}